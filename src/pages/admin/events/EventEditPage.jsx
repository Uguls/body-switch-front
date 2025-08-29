import React, {useState, useEffect, useMemo, useCallback} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import apiClient from "../../../api/apiClient.js";
import { SuccessModal } from "../../../components/admin/index.js";
import { compressImagesInHTML, createCompressedImageHandler } from '../../../utils/imageCompression.js';
import '/src/styles/ReactQuill.css'

const EventEditPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	// 폼 데이터를 관리하는 상태
	const [title, setTitle] = useState('');
	const [subTitle, setSubTitle] = useState('');
	const [content, setContent] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [thumbnailImage, setThumbnailImage] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [currentImageUrl, setCurrentImageUrl] = useState('');
	const [deleteImage, setDeleteImage] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	/**
	 * React Quill 에디터의 툴바 옵션 설정
	 */
	const modules = useMemo(() => ({
		toolbar: {
			container: [
				['undo', 'redo'],
				[{ 'header': [1, 2, false] }],
				[{ 'align': [] }],
				[{ 'color': [] }],
				['bold', 'italic', 'underline', 'strike'],
				[{ 'list': 'ordered'}, { 'list': 'bullet' }],
				['link', 'image'],
				['code-block', 'blockquote'],
				['clean']
			],
			handlers: {
				image: createCompressedImageHandler(1200, 1200, 0.8)
			}
		},
	}), []);

	/**
	 * React Quill 에디터의 기본 텍스트 색상을 검정색으로 지정하기 위한 커스텀 스타일
	 */
	const customQuillStyle = `
    .ql-editor {
      color: #000;
      min-height: 450px;
    }
    .ql-snow .ql-picker-label {
        color: #000;
    }
  `;

	// 날짜를 YYYY-MM-DD 형식으로 변환하는 함수
	const formatDateForInput = (dateString) => {
		if (!dateString) return '';
		const date = new Date(dateString);
		return date.toISOString().split('T')[0];
	};

	// 기존 이벤트 데이터 로드
	useEffect(() => {
		const fetchEvent = async () => {
			try {
				const response = await apiClient.get(`/event/${id}`);
				const eventData = response.data;
				
				setTitle(eventData.title || '');
				setSubTitle(eventData.subTitle || '');
				setContent(eventData.content || '');
				setStartDate(formatDateForInput(eventData.startDate));
				setEndDate(formatDateForInput(eventData.endDate));
				
				// 기존 이미지가 있으면 미리보기에 표시 (응답에서는 imgUrl로 옴)
				if (eventData.imgUrl) {
					setCurrentImageUrl(eventData.imgUrl);
					setImagePreview(eventData.imgUrl);
				}
			} catch (err) {
				setError('이벤트 정보를 불러오는데 실패했습니다.');
				console.error('Error fetching event:', err);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchEvent();
		}
	}, [id]);

	/**
	 * 이미지 파일 선택 핸들러
	 */
	const handleImageSelect = (e) => {
		const file = e.target.files[0];
		if (file) {
			// 파일 타입 체크
			if (!file.type.startsWith('image/')) {
				alert('이미지 파일만 업로드 가능합니다.');
				return;
			}

			// 파일 크기 체크 (10MB 제한)
			if (file.size > 10 * 1024 * 1024) {
				alert('파일 크기는 10MB 이하로 제한됩니다.');
				return;
			}

			setThumbnailImage(file);
			setDeleteImage(false); // 새 이미지 선택 시 삭제 플래그 해제

			// 이미지 미리보기 생성
			const reader = new FileReader();
			reader.onload = (e) => {
				setImagePreview(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};

	/**
	 * 이미지 삭제 핸들러
	 */
	const handleImageDelete = () => {
		setThumbnailImage(null);
		setImagePreview(null);
		setDeleteImage(true);
		// 파일 input 초기화
		const fileInput = document.getElementById('thumbnail-input');
		if (fileInput) {
			fileInput.value = '';
		}
	};

	/**
	 * 이미지 업로드 영역 클릭 핸들러
	 */
	const handleImageUploadClick = () => {
		document.getElementById('thumbnail-input').click();
	};

	/**
	 * '수정완료' 버튼 클릭 시 실행될 핸들러
	 */
	const handleSubmit = useCallback(async () => {
		// 유효성 검사
		if (!title.trim()) {
			alert('제목을 입력해주세요.');
			return;
		}
		if (!subTitle.trim()) {
			alert('부제목을 입력해주세요.');
			return;
		}
		if (!startDate) {
			alert('이벤트 시작일을 선택해주세요.');
			return;
		}
		if (!endDate) {
			alert('이벤트 종료일을 선택해주세요.');
			return;
		}
		if (new Date(startDate) > new Date(endDate)) {
			alert('시작일은 종료일보다 이전이어야 합니다.');
			return;
		}
		if (!content.trim() || content === '<p><br></p>') {
			alert('내용을 입력해주세요.');
			return;
		}

		setIsSubmitting(true);

		try {
			// 이미지 압축 적용
			const compressedContent = await compressImagesInHTML(content, 1200, 1200, 0.8);
			
			// 1단계: 이벤트 기본 정보 수정
			const eventData = {
				title,
				subTitle,
				content: compressedContent,
				startDate,
				endDate,
				deleteImage: deleteImage
			};

			await apiClient.put(`/event/${id}`, eventData);
			
			// 2단계: 새로운 이미지가 있는 경우 이미지 업로드
			if (thumbnailImage) {
				const formData = new FormData();
				formData.append('image', thumbnailImage);

				
				try {
					await apiClient.put(`/event/${id}/image`, formData, {
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					});
				} catch (imageError) {
					console.error('이미지 업로드 실패:', imageError);
					alert('이벤트는 수정되었지만 이미지 업로드에 실패했습니다.');
				}
			}

			setShowSuccessModal(true);
		} catch (error) {
			console.error('이벤트 수정 실패:', error);
			alert('이벤트 수정 중 오류가 발생했습니다.');
		} finally {
			setIsSubmitting(false);
		}
	}, [title, subTitle, content, startDate, endDate, thumbnailImage, deleteImage]);

	const handleModalClose = () => {
		setShowSuccessModal(false);
		navigate('/bodyswitch-admin/events');
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center w-full min-h-screen p-4 sm:p-8 bg-gray-50 font-sans">
				<div className="text-2xl font-semibold">로딩 중...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center w-full min-h-screen p-4 sm:p-8 bg-gray-50 font-sans">
				<div className="text-2xl font-semibold text-red-500">{error}</div>
			</div>
		);
	}

	return (
		<>
			<style>{customQuillStyle}</style>

			<div className="flex flex-col items-center w-full min-h-screen p-4 sm:p-8 bg-gray-50 font-sans">
				{/* 페이지 타이틀 */}
				<div className="flex justify-center items-center w-full max-w-6xl relative py-8 border-b-2 border-[#e6e6e6]">
					<p className="text-3xl md:text-4xl font-medium text-[#333]" style={{fontFamily: 'esamanru, sans-serif'}}>이벤트 수정</p>
				</div>

				{/* 뒤로가기 버튼 */}
				<div className="flex justify-start w-full max-w-6xl py-6">
					<button
						onClick={() => navigate(-1)}
						className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 18L9 12L15 6" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
						<p className="text-base font-semibold text-[#4d4d4d]">뒤로가기</p>
					</button>
				</div>

				{/* 메인 폼 영역 */}
				<div className="flex flex-col gap-8 w-full max-w-6xl">
					
					{/* 썸네일 이미지와 이벤트 기간 */}
					<div className="flex flex-col lg:flex-row justify-start items-start gap-16">
						{/* 썸네일 이미지 */}
						<div className="flex flex-col gap-2">
							<div className="flex items-end gap-2">
								<p className="text-2xl font-semibold text-neutral-800">썸네일 이미지</p>
							</div>
							<div className="flex items-center gap-4">
								<div 
									className="flex flex-col justify-center items-center h-[200px] w-[320px] gap-3 rounded-lg bg-white border border-[#d9d9d9] cursor-pointer hover:bg-gray-50 transition-colors relative"
									onClick={handleImageUploadClick}
								>
									{imagePreview ? (
										<>
											<img 
												src={imagePreview} 
												alt="미리보기" 
												className="w-full h-full object-cover rounded-lg"
											/>
											<button
												onClick={(e) => {
													e.stopPropagation();
													handleImageDelete();
												}}
												className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
												title="이미지 삭제"
											>
												×
											</button>
										</>
									) : (
										<>
											<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.875 18.5V9.33125L9.95 12.2562L8.375 10.625L14 5L19.625 10.625L18.05 12.2562L15.125 9.33125V18.5H12.875ZM7.25 23C6.63125 23 6.10175 22.7799 5.6615 22.3396C5.22125 21.8994 5.00075 21.3695 5 20.75V17.375H7.25V20.75H20.75V17.375H23V20.75C23 21.3687 22.7799 21.8986 22.3396 22.3396C21.8994 22.7806 21.3695 23.0007 20.75 23H7.25Z" fill="#58B9C1"></path>
											</svg>
											<p className="w-[120px] text-center text-[#7dc8cf]">
												<span className="text-base font-semibold">이미지 업로드</span><br />
												<span className="text-xs">권장: 16:10 비율</span>
											</p>
										</>
									)}
								</div>
								<input
									id="thumbnail-input"
									type="file"
									accept="image/*"
									onChange={handleImageSelect}
									className="hidden"
								/>
								{currentImageUrl && !imagePreview && (
									<div className="text-sm text-gray-500">
										<p>기존 이미지가 삭제됩니다.</p>
									</div>
								)}
							</div>
						</div>

						{/* 이벤트 기간 */}
						<div className="flex flex-col gap-3 max-w-[480px]">
							<p className="text-2xl font-semibold text-[#333]">이벤트 기간</p>
							<div className="flex flex-col h-40">
								<div className="flex justify-start items-center py-3 rounded-tl-lg rounded-tr-lg bg-[#f2f2f2] border-b border-[#d9d9d9]">
									<p className="w-52 text-lg text-center text-neutral-800">이벤트 시작일</p>
									<p className="w-52 text-lg text-center text-neutral-800">이벤트 종료일</p>
								</div>
								<div className="flex justify-start items-center flex-grow py-4 bg-white">
									<div className="flex justify-center items-center w-52 px-3">
										<div className="flex justify-between items-center flex-grow h-12 px-4 py-3 rounded-md border border-[#d9d9d9]">
											<input
												type="date"
												value={startDate}
												onChange={(e) => setStartDate(e.target.value)}
												className="flex-grow text-base font-medium text-neutral-800 bg-transparent outline-none"
											/>
										</div>
									</div>
									<div className="flex justify-center items-center w-52 px-3">
										<div className="flex justify-between items-center flex-grow h-12 px-4 py-3 rounded-md border border-[#d9d9d9]">
											<input
												type="date"
												value={endDate}
												onChange={(e) => setEndDate(e.target.value)}
												className="flex-grow text-base font-medium text-neutral-800 bg-transparent outline-none"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* 제목과 부제목 */}
					<div className="flex flex-col lg:flex-row gap-16">
						{/* 제목 */}
						<div className="flex flex-col gap-3 flex-1">
							<p className="text-2xl font-semibold text-[#333]">제목</p>
							<input
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="제목을 입력하세요"
								className="h-[62px] px-5 py-4 text-xl text-[#666] rounded-lg bg-white border border-[#e6e6e6] focus:outline-none focus:ring-2 focus:ring-[#4ab3bc]"
							/>
						</div>

						{/* 부제목 */}
						<div className="flex flex-col gap-3 flex-1">
							<p className="text-2xl font-semibold text-[#333]">부제목</p>
							<input
								type="text"
								value={subTitle}
								onChange={(e) => setSubTitle(e.target.value)}
								placeholder="부제목을 입력하세요"
								className="h-[62px] px-5 py-4 text-xl text-[#666] rounded-lg bg-white border border-[#e6e6e6] focus:outline-none focus:ring-2 focus:ring-[#4ab3bc]"
							/>
						</div>
					</div>

					{/* 작성하기 영역 (React Quill) */}
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-3">
							<p className="text-2xl font-semibold text-[#333]">작성하기</p>
							<div className="w-full bg-white rounded-lg border border-[#d9d9d9] overflow-hidden">
								<ReactQuill
									theme="snow"
									value={content}
									onChange={setContent}
									modules={modules}
								/>
							</div>
						</div>

						{/* 버튼 영역 */}
						<div className="flex justify-center items-center gap-8">
							<button
								onClick={() => navigate(-1)}
								className="flex justify-center items-center w-[126px] h-16 rounded-lg bg-[#ccc] hover:bg-[#b3b3b3] transition-colors"
								disabled={isSubmitting}
							>
								<p className="text-2xl font-bold text-white">취소</p>
							</button>
							<button
								onClick={handleSubmit}
								disabled={isSubmitting}
								className="flex justify-center items-center w-80 h-16 rounded-lg bg-[#4ab3bc] hover:bg-[#3a9ea6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
							>
								<p className="text-2xl font-bold text-white">
									{isSubmitting ? '수정중...' : '수정완료'}
								</p>
							</button>
						</div>
					</div>
				</div>
			</div>

			<SuccessModal
				isOpen={showSuccessModal}
				onClose={handleModalClose}
				message="이벤트가 성공적으로 수정되었습니다."
			/>
		</>
	);
};

export default EventEditPage;