import React from 'react';

function ChatSection() {
	return (
		<div className="flex flex-col justify-start items-center w-full gap-16 pb-60 bg-white">
			{/* 상단 헤더 */}
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] gap-2 border-l-4 border-[#e6e6e6]">
				<div className="flex justify-start items-start self-stretch relative gap-2.5 px-8">
					<p className="flex-grow-0 flex-shrink-0 text-6xl font-medium text-left text-[#4ab3bc]">
						실시간 소통으로 강사와 빠른 피드백
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5 px-8">
					<p className="flex-grow-0 flex-shrink-0 text-[32px] font-light text-left text-[#4d4d4d]">
						강사와 회원이 함께 쌍방향 소통으로 만드는 운동 루틴
					</p>
				</div>
			</div>

			{/* 강사톡 섹션 */}
			<div className="flex flex-col justify-start items-start self-stretch relative gap-6 px-48 py-12 bg-[#dae4e4]">
				<div className="flex flex-col justify-start items-start space-y-[-4px]">
					<div className="flex justify-center items-center h-20 relative gap-2.5 px-8 py-4 rounded-2xl bg-white">
						<p className="flex-grow-0 flex-shrink-0 text-[40px] font-light text-left text-[#4d4d4d]">
							강사톡
						</p>
					</div>
					<div className="flex justify-start items-center relative gap-2.5 pl-6">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 2C0 0.89543 0.895431 0 2 0L19.1716 0C20.9534 0 21.8457 2.15428 20.5858 3.41421L12 12L3.41422 20.5858C2.15429 21.8457 0 20.9534 0 19.1716L0 2Z" fill="white"></path>
						</svg>
					</div>
				</div>
				<div className="self-stretch h-[652px] relative">
					<div className="flex justify-start items-center absolute left-[584px] top-0 opacity-60 gap-2.5 p-2.5 rounded-[22px] bg-[#f3f3f3]" style={{ boxShadow: '0px 0px 20px 0 rgba(0,0,0,0.2)' }}>
						{/* src 경로를 public 폴더 기준으로 변경 */}
						<img src="/src/assets/memberApp/chat/강사톡_1-2-1.png" className="w-[292px] h-[632px] rounded-2xl object-cover" alt="강사톡 배경"/>
					</div>
					<div className="flex flex-col justify-start items-start w-[1300px] absolute left-[118px] top-[84px] gap-14">
						<div className="flex justify-start items-start self-stretch relative gap-8 pr-80">
							<div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3 pt-7">
								<img src="/src/assets/memberApp/chat/rectangle-11337.png" className="w-[136px] h-[136px] rounded-[200px]" alt="김지선 강사 프로필"/>
								<p className="self-stretch w-[150px] text-[28px] text-center text-black">김지선 강사</p>
							</div>
							<img src="/src/assets/memberApp/chat/강사톡_강사-채팅.png" className="w-[606px] h-[164px] object-cover" alt="강사 채팅 내용"/>
						</div>
						<div className="flex justify-end items-start self-stretch relative gap-8 pl-2.5">
							<img src="/src/assets/memberApp/chat/강사톡_회원-채팅.png" className="w-[877px] h-[164px] object-cover" alt="회원 채팅 내용"/>
							<div className="flex flex-col justify-start items-center relative gap-3 pt-7">
								<img src="/src/assets/memberApp/chat/rectangle-11338.png" className="w-[136px] h-[136px] rounded-[200px]" alt="박하람 회원 프로필"/>
								<p className="self-stretch w-[150px] text-[28px] text-center text-black">박하람 회원</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 센터톡 섹션 */}
			<div className="flex flex-col justify-start items-start self-stretch relative gap-6 px-48 py-12 bg-[#dae4e4]">
				<div className="flex flex-col justify-start items-start space-y-[-4px]">
					<div className="flex justify-center items-center h-20 relative gap-2.5 px-8 py-4 rounded-2xl bg-white">
						<p className="text-[40px] font-light text-left text-[#4d4d4d]">센터톡</p>
					</div>
					<div className="flex justify-start items-center relative gap-2.5 pl-6">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 2C0 0.89543 0.895431 0 2 0L19.1716 0C20.9534 0 21.8457 2.15428 20.5858 3.41421L12 12L3.41422 20.5858C2.15429 21.8457 0 20.9534 0 19.1716L0 2Z" fill="white"></path>
						</svg>
					</div>
				</div>
				<div className="self-stretch h-[652px] relative">
					<div className="flex justify-start items-center absolute left-[612px] top-0 opacity-60 gap-2.5 p-2.5 rounded-[22px] bg-[#f3f3f3]" style={{ boxShadow: '0px 0px 20px 0 rgba(0,0,0,0.2)' }}>
						<img src="/src/assets/memberApp/chat/강사톡_1-2-1-2.png" className="w-[292px] h-[632px] rounded-2xl object-cover" alt="센터톡 배경"/>
					</div>
					<div className="flex flex-col justify-start items-end w-[1300px] absolute left-[118px] top-[84px] gap-14">
						<div className="flex justify-end items-start relative gap-8 pl-80">
							<img src="/src/assets/memberApp/chat/센터톡_회원-채팅.png" className="w-[770px] h-[164px] object-cover" alt="회원 채팅 내용"/>
							<div className="flex flex-col justify-start items-center relative gap-3 pt-7">
								<img src="/src/assets/memberApp/chat/rectangle-11338.png" className="w-[136px] h-[136px] rounded-[200px]" alt="박하람 회원 프로필"/>
								<p className="self-stretch w-[150px] text-[28px] text-center text-black">박하람 회원</p>
							</div>
						</div>
						<div className="flex justify-start items-start w-[1304px] relative gap-8 pr-80">
							<div className="flex flex-col justify-start items-center relative gap-3 pt-7">
								<svg width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[136px] h-[136px] relative">
									<rect width="136" height="136" rx="68" fill="#4AB3BC"></rect>
									{/* SVG path 들 */}
									<path d="M68.4458 53.4597V61.1032H58.1633C55.3082 61.1032 52.9021 63.4487 52.8996 66.314C52.8996 67.9912 53.6905 69.4866 54.9178 70.4443C51.7438 70.0551 49.552 69.0104 48.0926 67.1949C45.6151 64.1119 45.9366 59.6564 48.7049 56.8321C50.4706 55.0319 53.3665 53.4597 58.097 53.4597H68.4458Z" fill="white"></path>
									<path d="M76.9856 74.1907C76.9499 74.2265 76.9116 74.2649 76.8759 74.3033C74.577 76.5849 71.8214 78.239 68.8158 79.1839H69.2469C72.0459 79.1839 74.3218 81.468 74.3218 84.277C74.3218 87.086 72.0459 89.3701 69.2469 89.3701H47.3501V97.0135H69.2469C76.2431 97.0135 81.938 91.3008 81.938 84.277C81.938 80.1749 79.9989 76.5234 76.9881 74.1932L76.9856 74.1907Z" fill="white"></path>
									<path d="M81.9355 59.9842C81.9355 65.3257 79.7566 70.1601 76.233 73.6477C72.7859 77.0687 68.0452 79.1787 62.8198 79.1787H58.097C51.0319 79.1787 45.2835 73.407 45.2835 66.3192C45.2835 65.5741 45.3498 64.8392 45.4748 64.1222C46.3985 69.8349 50.7207 71.5352 58.0996 71.5352H62.8224C69.1628 71.5352 74.3219 66.3576 74.3219 59.9842C74.3219 53.6108 69.1628 48.4435 62.8224 48.4435H41.1628V97.0083H33.5466V40.8H62.8198C73.3574 40.8 81.9355 49.4089 81.9355 59.9842Z" fill="white"></path>
									<path d="M99.3622 77.4015C92.6594 77.4015 87.2043 71.9295 87.2043 65.2002C87.2043 58.4708 92.6569 52.9988 99.3622 52.9988C106.067 52.9988 111.52 58.4708 111.52 65.2002C111.52 71.9295 106.067 77.4015 99.3622 77.4015ZM99.3622 60.3196C96.6806 60.3196 94.499 62.5089 94.499 65.2002C94.499 67.8914 96.6806 70.0807 99.3622 70.0807C102.044 70.0807 104.225 67.8914 104.225 65.2002C104.225 62.5089 102.044 60.3196 99.3622 60.3196Z" fill="white"></path>
								</svg>
								<p className="self-stretch w-[150px] text-[28px] text-center text-black">
									<span className="self-stretch w-[150px] text-[28px] text-center text-black">바디스위치</span><br />
									<span className="self-stretch w-[150px] text-[28px] text-center text-black">필라테스</span>
								</p>
							</div>
							<img src="/src/assets/memberApp/chat/센터톡_센터-채팅.png" className="w-[817px] h-[164px] object-cover" alt="센터 채팅 내용"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatSection;