import React, {useMemo, useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import apiClient from "../../../api/apiClient.js";
import { AdminPageLayout, PageHeader, SuccessModal } from "../../../components/admin/index.js";
import { compressImagesInHTML, createCompressedImageHandler } from '../../../utils/imageCompression.js';
import '/src/styles/ReactQuill.css'

const NoticeCreatePage = () => {
	const navigate = useNavigate();

	// 폼 데이터를 관리하는 상태
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	/**
	 * React Quill 에디터의 툴바 옵션 설정
	 */
	const modules = useMemo(() => ({
		toolbar: {
			container: [
				[{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
				['bold', 'italic', 'underline', 'strike', 'blockquote'],
				[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
				['link', 'image'],
				['clean']
			],
			handlers: {
				image: createCompressedImageHandler(1200, 1200, 0.8)
			}
		},
	}), []);

	/**
	 * '작성완료' 버튼 클릭 시 실행될 핸들러
	 */
	const handleSubmit = useCallback(async () => {
		if (!title.trim()) {
			alert('제목을 입력해주세요.');
			return;
		}
		if (!content.trim() || content === '<p><br></p>') {
			alert('내용을 입력해주세요.');
			return;
		}

		const compressedContent = await compressImagesInHTML(content, 1200, 1200, 0.8);

		const noticeData = {
			title,
			content: compressedContent,
		};

		try {
			const response = await apiClient.post('/notice/create', noticeData);
			if (response.status === 201) {
				setShowSuccessModal(true);
			}
		} catch {
			alert('공지사항 등록 중 오류가 발생했습니다.');
		}
	}, [title, content]);

	const handleModalClose = () => {
		setShowSuccessModal(false);
		navigate('/bodyswitch-admin/notices');
	};

	return (
		<>
			<div className="flex flex-col items-center w-full min-h-screen p-4 sm:p-8 bg-gray-50 font-sans">
				{/* 페이지 타이틀 */}
				<div className="flex justify-center items-center w-full max-w-6xl relative py-8 border-b-2 border-[#e6e6e6]"
				     style={{fontFamily: 'esamanru, sans-serif'}}>
					<p className="text-3xl md:text-4xl font-medium text-[#333]">공지사항</p>
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

				{/* 메인 폼 영역: 단일 컬럼으로 변경 */}
				<div className="flex flex-col justify-center gap-10 w-full max-w-6xl">

					{/* 제목 */}
					<div className="flex flex-col gap-3">
						<label className="text-2xl font-semibold text-left text-black">제목</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="제목을 입력하세요"
							className="w-full h-[62px] px-5 py-4 text-xl text-[#666] rounded-lg bg-white border border-[#e6e6e6] focus:outline-none focus:ring-2 focus:ring-[#4ab3bc]"
						/>
					</div>

					{/* 작성하기 영역 (React Quill) */}
					<div className="flex flex-col self-stretch gap-3">
						<p className="text-2xl font-semibold text-left text-black">작성하기</p>
						<div className="w-full bg-white rounded-lg border border-[#d9d9d9] overflow-hidden">
							<ReactQuill
								theme="snow"
								value={content}
								onChange={setContent}
								modules={modules}
							/>
						</div>
					</div>

					{/* 버튼 영역: justify-center로 수정하여 중앙 정렬 */}
					<div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-4">
						<button
							onClick={() => navigate(-1)}
							className="w-full sm:w-auto flex justify-center items-center px-10 h-16 rounded-lg bg-[#ccc] hover:bg-[#b3b3b3] transition-colors"
						>
							<p className="text-2xl font-bold text-white">취소</p>
						</button>
						<button
							onClick={handleSubmit}
							className="w-full sm:w-80 flex justify-center items-center h-16 rounded-lg bg-[#4ab3bc] hover:bg-[#3a9ea6] transition-colors"
						>
							<p className="text-2xl font-bold text-white">작성완료</p>
						</button>
					</div>
				</div>
			</div>

			<SuccessModal
				isOpen={showSuccessModal}
				onClose={handleModalClose}
				message="작성이 완료되었습니다."
			/>
		</>
	);
};

export default NoticeCreatePage;
