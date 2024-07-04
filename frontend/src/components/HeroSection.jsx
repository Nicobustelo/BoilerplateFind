import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const HeaderForm = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${query}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group flex justify-center relative">
                    <input
                        type="text"
                        className="min-h-[62px] leading-7 z-10 text-black bg-gray-100 px-8 dark:bg-slate-800 focus:outline-none rounded-full ps-4 w-full"
                        placeholder="What's your programming language?"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button 
                        type="submit"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 py-2.5 px-8 text-orange-800 font-bold bg-yellow-400 hover:bg-opacity-90 duration-300 z-50 rounded-full"
                    >
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

const HeroSection = () => {
	return (
		<header className="ezy__header34 light pt-16 md:pt-28 bg-black text-white dark:bg-[#0b1727] dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 lg:col-span-7 text-center lg:text-start">
						<div className="flex flex-col justify-center h-full">
							<h2 className="text-4xl font-bold md:text-[70px] leading-none mb-6">
								Best 
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-400 to-red-700">
										&nbsp;Boilerplates&nbsp;
									</span>
								& <br />
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-400 to-red-700">
										Starter Kits&nbsp;
									</span>
								for Your Tech Stack
							</h2>
							<div className="flex flex-col gap-y-6 mx-auto lg:mx-0">
								<div className="max-w-lg">
									<p className="text-[17px] leading-[1.8] opacity-80 mb-6">
									Explore our curated selection of boilerplates tailored to your needs, including real-time rankings of the top picks.
									</p>
								</div>
								<div className="max-w-xl">
									<HeaderForm />
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-5 relative text-center">
						<div>
							<img
								src="https://cdn.pixabay.com/photo/2024/04/25/02/23/work-8718795_960_720.png"
								alt=""
								className="max-w-full max-h-96 h-auto mx-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeroSection