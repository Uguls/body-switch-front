import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalRoutes from './routes/GlobalRoutes.jsx';

/**
 * 메인 App 컴포넌트
 * GlobalRoutes를 통해 사용자와 관리자 라우트를 분리 관리
 */
function App() {
	return (
		<Router>
			<GlobalRoutes />
		</Router>
	);
}

export default App;