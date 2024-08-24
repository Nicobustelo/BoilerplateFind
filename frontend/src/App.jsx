import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';
import React, { useEffect } from 'react';

import Home from './pages/Home';
import Search from './pages/Search';
import Leaderboards from './pages/Leaderboards';
import Header from './components/Navbar';
import Footer from './components/Footer';

// Component to track route changes and send page views to GA4
const RouteChangeTracker = () => {
	const location = useLocation();
  
	useEffect(() => {
	  ReactGA4.send({ hitType: 'pageview', page: location.pathname + location.search });
	}, [location]);
  
	return null;
  };

export default function App() {
	return (
		<div className='bg-black text-white'>
			<BrowserRouter>
				<RouteChangeTracker />
				<div className='h-full'>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
						<Route path="/leaderboards" element={<Leaderboards />} />
					</Routes>
					<Footer />
				</ div>
			</BrowserRouter>
		</div>
	);
}
