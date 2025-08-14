import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-4 md:py-6 bg-white/60 backdrop-blur-[20px]">
			{/* 로고 SVG */}
			<Link to="/">
				<svg
				width="256"
				height="48"
				viewBox="0 0 256 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-32 h-6 sm:w-40 sm:h-7 md:w-48 md:h-9 lg:w-56 lg:h-10 xl:w-64 xl:h-12"
				preserveAspectRatio="none"
			>
				<path
					d="M16.8698 23.2501C19.3871 24.441 20.9647 26.8264 20.9647 29.7357C20.9647 34.0544 17.2322 37.3255 12.3033 37.3255H-6.10352e-05V10.6708H12.0579C16.7906 10.6708 20.2438 13.5538 20.2438 17.4918C20.2438 19.8735 18.9078 22.0178 16.8698 23.2501ZM13.6921 28.8614C13.6921 27.4445 12.6505 26.4496 11.0579 26.4496H7.06113V31.2959H11.0579C12.6505 31.2959 13.6921 30.2972 13.6921 28.8614ZM13.2657 18.7091C13.2657 17.326 12.3184 16.3877 10.7786 16.3877H7.06113V21.0267H10.7786C12.3184 21.0267 13.2657 20.0883 13.2657 18.7053V18.7091Z"
					fill="#4AB3BC"
				></path>
				<path
					d="M38.1328 38.0001C29.5506 38.0001 23.4291 32.1438 23.4291 24C23.4291 15.8563 29.5544 10.0001 38.1328 10.0001C46.7111 10.0001 52.7948 15.8337 52.7948 24C52.7948 32.1664 46.6923 38.0001 38.1328 38.0001ZM38.1328 31.1678C42.1974 31.1678 45.1373 28.1718 45.1373 24C45.1373 19.8283 42.1974 16.8324 38.1328 16.8324C34.0681 16.8324 31.0866 19.8509 31.0866 24C31.0866 28.1492 34.0719 31.1678 38.1328 31.1678Z"
					fill="#4AB3BC"
				></path>
				<path
					d="M81.1303 23.9774C81.1303 31.7556 75.4088 37.3255 67.3513 37.3255H56.5462V10.6708H67.3513C75.4315 10.6708 81.1303 16.1879 81.1303 23.9774ZM73.5935 23.9774C73.5935 20.0243 70.9593 17.3976 67.0041 17.3976H63.932V30.6025H67.0041C70.9555 30.6025 73.5935 27.9118 73.5935 23.9774Z"
					fill="#4AB3BC"
				></path>
				<path
					d="M97.1133 26.898V37.3217H89.6218V26.8754L80.3604 10.6671H88.5161L93.3959 20.2994L98.2757 10.6671H106.431L97.1095 26.898H97.1133Z"
					fill="#4AB3BC"
				></path>
				<path
					d="M115.742 29.4907H117.01C117.01 33.6888 120.241 36.4097 125.105 36.4097C129.54 36.4097 132.646 33.8773 132.646 30.1464C132.646 25.9182 128.898 25.1117 124.905 24.2261C120.758 23.3217 116.327 22.3306 116.327 17.3901C116.327 13.1166 119.712 10.3543 124.905 10.3543C130.098 10.3543 133.219 13.2975 133.219 17.7707H131.982C131.982 14.0022 129.132 11.5639 124.89 11.5639C120.648 11.5639 117.58 13.8401 117.58 17.3524C117.58 21.3884 121.354 22.1987 125.283 23.0541C129.506 23.9962 133.929 24.9949 133.929 30.1351C133.929 34.6649 130.261 37.6345 125.12 37.6345C119.497 37.6345 115.749 34.4086 115.749 29.4869L115.742 29.4907Z"
					fill="#4AB3BC"
				></path>
				<path
					d="M172.998 10.6708L164.438 37.3255H163.408L154.871 14.2622L146.474 37.3255H145.444L136.692 10.6708H138.028L145.995 35.1397L154.531 11.6695H155.181L163.876 35.1435L171.673 10.6708H172.998Z"
					fill="#4AB3BC"
				></path>
				<path d="M178.315 10.6708H179.565V37.3255H178.315V10.6708Z" fill="#4AB3BC"></path>
				<path
					d="M194.457 11.8617V37.3255H193.208V11.8617H184.505V10.6708H203.164V11.8617H194.457Z"
					fill="#4AB3BC"
				></path>
				<path
					d="M204.771 24.0264C204.771 16.0598 210.444 10.2789 218.377 10.2789C224.249 10.2789 228.846 13.4972 230.676 18.694H229.382C227.608 14.2095 223.566 11.5075 218.38 11.5075C211.21 11.5075 206.043 16.7344 206.043 24.0264C206.043 31.3185 211.183 36.4889 218.38 36.4889C223.709 36.4889 227.846 33.6324 229.612 28.835H230.88C229.08 34.3559 224.396 37.7174 218.38 37.7174C210.421 37.7174 204.775 31.9968 204.775 24.0302L204.771 24.0264Z"
					fill="#4AB3BC"
				></path>
				<path
					d="M256 10.6708V37.3255H254.751V24.0264H237.677V37.3255H236.428V10.6708H237.677V22.8167H254.751V10.6708H256Z"
					fill="#4AB3BC"
				></path>
				</svg>
			</Link>

			{/* 네비게이션 메뉴 */}
			<div className="hidden md:flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4 lg:gap-8 xl:gap-16">
				<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4 lg:gap-8 xl:gap-16">
					<Link to="/" className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-3 border-t-0 border-r-0 border-b-2 border-l-0 ${location.pathname === '/' ? 'border-[#4ab3bc]' : 'border-transparent'}`}>
						<p className={`flex-grow-0 flex-shrink-0 text-sm lg:text-base xl:text-lg font-bold text-left ${location.pathname === '/' ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>
							관리프로그램
						</p>
					</Link>
					<Link to="/member-app" className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-3 border-t-0 border-r-0 border-b-2 border-l-0 ${location.pathname === '/member-app' ? 'border-[#4ab3bc]' : 'border-transparent'}`}>
						<p className="flex-grow-0 flex-shrink-0 text-lg text-left">
							<span className={`flex-grow-0 flex-shrink-0 text-sm lg:text-base xl:text-lg font-bold text-left ${location.pathname === '/member-app' ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>회원</span>
							<span className={`flex-grow-0 flex-shrink-0 text-sm lg:text-base xl:text-lg text-left ${location.pathname === '/member-app' ? 'text-[#4ab3bc]' : 'text-[#333]'}`}> ∙ </span>
							<span className={`flex-grow-0 flex-shrink-0 text-sm lg:text-base xl:text-lg font-bold text-left ${location.pathname === '/member-app' ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>강사앱</span>
						</p>
					</Link>
					<Link to="/event" className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-3 border-t-0 border-r-0 border-b-2 border-l-0 ${location.pathname === '/event' ? 'border-[#4ab3bc]' : 'border-transparent'}`}>
						<p className={`flex-grow-0 flex-shrink-0 text-sm lg:text-base xl:text-lg font-bold text-left ${location.pathname === '/event' ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>이벤트</p>
					</Link>
					<Link to="/notice" className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-3 border-t-0 border-r-0 border-b-2 border-l-0 ${location.pathname === '/notice' ? 'border-[#4ab3bc]' : 'border-transparent'}`}>
						<p className={`flex-grow-0 flex-shrink-0 text-sm lg:text-base xl:text-lg font-bold text-left ${location.pathname === '/notice' ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>공지사항</p>
					</Link>
					<Link to="/about" className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-3 border-t-0 border-r-0 border-b-2 border-l-0 ${location.pathname === '/about' ? 'border-[#4ab3bc]' : 'border-transparent'}`}>
						<p className={`flex-grow-0 flex-shrink-0 text-sm lg:text-base xl:text-lg font-bold text-left ${location.pathname === '/about' ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>회사소개</p>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;