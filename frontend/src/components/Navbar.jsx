// const NavigationBar = () => {
//     return (
//         <div className="flex justify-between px-8 pt-4">
//             <a className="font-white font-bold text-3xl" href="/">
//                 {" "}⚡Boilerplate Find{" "}
//             </a>
//             <div className="gap-x-4 flex">
//                 <a href="/leaderboards">
//                         <button className="text-white py-1.5 rounded">
//                             Home
//                         </button>
//                 </a>
//                 <a href="/leaderboards">
//                         <button className="border border-yellow-400 text-white hover:bg-yellow-400 hover:text-white py-1.5 px-4 rounded">
//                             Leaderboards
//                         </button>
//                 </a>
//                 <a href="/search">
//                         <button className="border border-yellow-400 bg-yellow-400 text-orange-800 font-bold hover:bg-opacity-90 py-1.5 px-4 rounded">
//                             Search
//                         </button>
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default NavigationBar


// import React, { useState } from 'react';

// const NavigationBar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav>
//             <div className="flex justify-between items-center px-8 pt-4">
//                 <a className="text-white font-bold text-3xl" href="/">
//                     ⚡Boilerplate Find
//                 </a>
//                 <div className="md:hidden">
//                     <button onClick={toggleMenu} className="text-white focus:outline-none">
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
//                         </svg>
//                     </button>
//                 </div>
//                 <div className={`flex-col md:flex-row gap-x-4 gap-y-2 md:flex md:items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
//                     <a href="/" className="block text-white py-2 md:py-0 md:px-4">Home</a>
//                     <a href="/leaderboards" className="block text-white py-2 md:py-0 md:px-4 border border-yellow-400 hover:bg-yellow-400 hover:text-white px-4 rounded">Leaderboards</a>
//                     <a href="/search" className="block py-2 md:py-0 md:px-4 border border-yellow-400 bg-yellow-400 text-orange-800 font-bold hover:bg-opacity-90 px-4 rounded">Search</a>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default NavigationBar;


// <div className={`flex-col gap-x-4 gap-y-2 md:flex-row md:flex md:items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
//                     <a href="/" className="block text-white py-1.5 rounded">Home</a>
//                     <a href="/leaderboards" className="block border border-yellow-400 text-white hover:bg-yellow-400 hover:text-white py-1.5 px-4 rounded">Leaderboards</a>
//                     <a href="/search" className="block border border-yellow-400 bg-yellow-400 text-orange-800 font-bold hover:bg-opacity-90 py-1.5 px-4 rounded">Search</a>
//                 </div>

import React, { useState } from 'react';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black p-4">
            <div className="flex justify-between items-center px-2">
                <a className="text-white font-bold text-3xl flex items-center" href="/">
                    ⚡Boilerplate Find
                </a>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex md:items-center md:gap-x-4">
                    <a href="/" className="text-white">Home</a>
                    <a href="/leaderboards" className="text-white">
                        <button className="border border-yellow-400 text-white hover:bg-yellow-400 hover:text-white py-1.5 px-4 rounded">
                            Leaderboards
                        </button>
                    </a>
                    <a href="/search" className="text-white">
                        <button className="border border-yellow-400 bg-yellow-400 text-orange-800 font-bold hover:bg-opacity-90 py-1.5 px-4 rounded">
                            Search
                        </button>
                    </a>
                </div>
            </div>
            <div className={`fixed top-0 right-0 w-40 h-55 rounded border border-white border-opacity-80 bg-black text-white z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col p-4 space-y-4 items-center">
                    <a href="/" className="text-white">Home</a>
                    <a href="/search" className="text-white">
                        <button className="border border-yellow-400 bg-yellow-400 text-orange-800 font-bold hover:bg-opacity-90 py-1.5 px-4 rounded">
                            Search
                        </button>
                    </a>
                    <a href="/leaderboards" className="text-white">
                        <button className="border border-yellow-400 text-white hover:bg-yellow-400 hover:text-white py-1.5 px-4 rounded">
                            Leaderboards
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
