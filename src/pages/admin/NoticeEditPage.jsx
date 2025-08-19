import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import apiClient from "../../api/apiClient.js";

const NoticeEditPage = () => {
	const { id } = useParams(); // URL에서 공지사항 ID를 가져옵니다.
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [loading, setLoading] = useState(true); // 데이터 로딩 상태
	const [error, setError] = useState(null); // 에러 상태

	// useEffect를 사용하여 컴포넌트가 처음 렌더링될 때 기존 공지사항 데이터를 불러옵니다.
	useEffect(() => {
		const fetchNoticeData = async () => {
			try {
				const response = await apiClient.get(`/notice/${id}`);
				setTitle(response.data.title);
				setContent(response.data.content);

			} catch (err) {
				console.error("공지사항 데이터 로딩 실패:", err);
				setError("데이터를 불러오는 데 실패했습니다.");
			} finally {
				setLoading(false);
			}
		};

		fetchNoticeData();
	}, [id]); // id가 변경될 때마다 데이터를 다시 불러옵니다.

	const modules = {
		toolbar: [
			[{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
			['link', 'image'],
			['clean']
		],
	};

	const customQuillStyle = `
    .ql-editor { color: #000; min-height: 450px; }
    .ql-snow .ql-picker-label { color: #000; }
  `;

	const handleSubmit = async () => {
		if (!title.trim()) {
			alert('제목을 입력해주세요.');
			return;
		}
		if (!content.trim() || content === '<p><br></p>') {
			alert('내용을 입력해주세요.');
			return;
		}

		const updatedNoticeData = { title, content };

		try {
			const response = await apiClient.put(`/notice/${id}`, updatedNoticeData);
			if (response.status === 200) {
			  alert('공지사항이 성공적으로 수정되었습니다.');
			  navigate(`/bodyswitch-admin/notice/${id}`);
			}
		} catch (error) {
			console.log(error);
			alert('공지사항 수정 중 오류가 발생했습니다.');
		}
	};

	// 로딩 및 에러 UI
	if (loading) return <div className="pt-24 flex justify-center items-center h-screen text-2xl">데이터 로딩 중...</div>;
	if (error) return <div className="pt-24 flex justify-center items-center h-screen text-2xl text-red-500">{error}</div>;

	return (
		<>
			<style>{customQuillStyle}</style>
			<div className="flex flex-col items-center w-full min-h-screen p-4 sm:p-8 bg-gray-50 font-sans">
				<div className="flex justify-center items-center w-full max-w-4xl relative py-8 border-b-2 border-[#e6e6e6]">
					<p className="text-3xl md:text-4xl font-medium text-[#333]">공지사항 수정하기</p>
				</div>

				<div className="flex justify-start w-full max-w-4xl py-6">
					<button onClick={() => navigate(-1)} className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 18L9 12L15 6" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
						<p className="text-base font-semibold text-[#4d4d4d]">뒤로가기</p>
					</button>
				</div>

				<div className="flex flex-col justify-center gap-10 w-full max-w-4xl">
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

					<div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-4">
						<button onClick={() => navigate(-1)} className="w-full sm:w-auto flex justify-center items-center px-10 h-16 rounded-lg bg-[#ccc] hover:bg-[#b3b3b3] transition-colors">
							<p className="text-2xl font-bold text-white">취소</p>
						</button>
						<button onClick={handleSubmit} className="w-full sm:w-80 flex justify-center items-center h-16 rounded-lg bg-[#4ab3bc] hover:bg-[#3a9ea6] transition-colors">
							<p className="text-2xl font-bold text-white">수정완료</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default NoticeEditPage;
