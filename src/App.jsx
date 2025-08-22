import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import GlobalRoutes from './routes/GlobalRoutes.jsx';
import ScrollToTop from './components/ui/ScrollToTop.jsx';

/**
 * 메인 App 컴포넌트
 * AuthProvider로 전역 인증 상태 관리
 * GlobalRoutes를 통해 사용자와 관리자 라우트를 분리 관리
 */
function App() {
	return (
		<Router>
			<AuthProvider>
				<ScrollToTop />
				<GlobalRoutes />
			</AuthProvider>
		</Router>
	);
}

export default App;