import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Leaderboards from './pages/Leaderboards';
import Header from './components/Navbar';
// import Footer from './components/Footer';

export default function App() {
	return (
		<div className='bg-black text-white'>
			<BrowserRouter>
				<div className='h-full'>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
						<Route path="/leaderboards" element={<Leaderboards />} />
					</Routes>
					{/* <Footer /> */}
				</ div>
			</BrowserRouter>
		</div>
	);
}
