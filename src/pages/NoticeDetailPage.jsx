import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const NoticeDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [notice, setNotice] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchNoticeDetail = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/notice/${id}`);
				setNotice(response.data);
			} catch (err) {
				setError("공지사항 상세 정보를 불러오는 데 실패했습니다.");
				console.error("Error fetching notice detail:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchNoticeDetail();
	}, [id]);

	const handleGoBack = () => {
		navigate("/notice");
	};

	if (loading) {
		return (
			<div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold">
				로딩 중...
			</div>
		);
	}

	if (error) {
		return (
			<div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold text-red-500">
				{error}
			</div>
		);
	}

	if (!notice) {
		return (
			<div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold text-gray-500">
				공지사항을 찾을 수 없습니다.
			</div>
		);
	}

	return (
		<div className="pt-24 flex flex-col items-center w-full">
			<div className="flex flex-col items-center max-w-[1536px] mx-auto">
				{/* 제목 섹션 */}
				<div className="flex justify-center items-center w-full relative gap-2.5 py-8 border-t-0 border-r-0 border-b-2 border-l-0 border-[#e6e6e6]">
					<p className="text-[40px] font-medium text-[#333]">공지사항</p>
				</div>

				{/* 상세 정보 헤더 */}
				<div className="flex flex-col justify-start items-center w-[628px] relative gap-[9px] mt-16">
					<div className="flex justify-start items-center relative gap-4">
						<p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#4ab3bc]">
							공지사항
						</p>
						<div className="flex-grow-0 flex-shrink-0 w-0.5 h-5 rounded-[999px] bg-[#e6e6e6]"></div>
						<p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#b3b3b3]">
							{notice.createdAt}
						</p>
					</div>
					<p className="self-stretch flex-grow-0 flex-shrink-0 w-[628px] text-[40px] font-semibold text-center text-[#333]">
						{notice.title}
					</p>
				</div>

				{/* 상세 내용 본문 */}
				<div className="mt-8 mb-16">
					{/* 💡 dangerouslySetInnerHTML을 사용하여 HTML 렌더링 */}
					<div
						className="max-w-[1200px] text-base font-medium text-center text-neutral-700 whitespace-pre-wrap"
						style={{fontFamily: 'Pretendard-Regular, sans-serif', fontSize: "larger"}}
						dangerouslySetInnerHTML={{ __html: notice.content }}
					/>
					{notice.imgUrls && notice.imgUrls.length > 0 && (
						<div className="flex flex-col gap-4 mt-8">
							{notice.imgUrls.map((url, index) => (
								<img key={index} src={url} alt={`Notice Image ${index}`} className="w-full h-auto rounded-md" />
							))}
						</div>
					)}
				</div>

				{/* 목록으로 버튼 */}
				<div
					className="flex justify-start items-center relative gap-2 px-4 py-3 rounded-2xl bg-[#666] cursor-pointer"
					onClick={handleGoBack}
				>
					<svg
						width="48"
						height="48"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
						preserveAspectRatio="xMidYMid meet"
					>
						<path
							d="M7.59007 32.8696L7.74777 32.8777C8.52566 32.958 9.13292 33.6244 9.13292 34.4348C9.13292 35.2451 8.52566 35.9116 7.74777 35.9918L7.59007 36H7.56596C6.71403 35.9998 6.0231 35.2991 6.0231 34.4348C6.0231 33.5705 6.71403 32.8698 7.56596 32.8696H7.59007ZM40.4571 32.8696L40.6148 32.8777C41.3929 32.9579 42 33.6244 42 34.4348C42 35.2452 41.3929 35.9117 40.6148 35.9918L40.4571 36H16.9808C16.1287 36 15.4379 35.2992 15.4379 34.4348C15.4379 33.5703 16.1287 32.8696 16.9808 32.8696H40.4571ZM7.56596 22.4348C8.41806 22.4348 9.10882 23.1356 9.10882 24C9.10882 24.8644 8.41806 25.5652 7.56596 25.5652H7.54286C6.69076 25.5652 6 24.8644 6 24C6 23.1356 6.69076 22.4348 7.54286 22.4348H7.56596ZM40.4571 22.4348L40.6148 22.4429C41.3929 22.5231 42 23.1896 42 24C42 24.8104 41.3929 25.4769 40.6148 25.5571L40.4571 25.5652H16.9808C16.1287 25.5652 15.4379 24.8644 15.4379 24C15.4379 23.1356 16.1287 22.4348 16.9808 22.4348H40.4571ZM7.59007 12L7.74777 12.0082C8.52566 12.0884 9.13292 12.7549 9.13292 13.5652C9.13292 14.3756 8.52566 15.042 7.74777 15.1223L7.59007 15.1304H7.56596C6.71403 15.1302 6.0231 14.4295 6.0231 13.5652C6.0231 12.7009 6.71403 12.0002 7.56596 12H7.59007ZM40.4571 12L40.6148 12.0082C41.3929 12.0883 42 12.7548 42 13.5652C42 14.3756 41.3929 15.0421 40.6148 15.1223L40.4571 15.1304H16.9808C16.1287 15.1304 15.4379 14.4297 15.4379 13.5652C15.4379 12.7008 16.1287 12 16.9808 12H40.4571Z"
							fill="white"
						></path>
					</svg>
					<p className="text-[32px] font-medium text-white">목록으로</p>
				</div>
			</div>
		</div>
	);
};

export default NoticeDetailPage;