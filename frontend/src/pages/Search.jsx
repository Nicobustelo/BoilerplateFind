import { useEffect, useState } from "react";
import BoilerplateCard from "../components/BoilerplateCard";
import { getBoilerplates } from "../api";

const language = [
    'javascript', 'swift', 'python', 'java', 'typescript', 'ruby', 'php', 'csharp', 'go', 'kotlin', 'rust', 'scala'
];

export default function Search() {
    const [boilerplates, setBoilerplates] = useState([]);
    const [inputQuery, setInputQuery] = useState("");
    const [recommendedTech, setRecommendedTech] = useState("");

    useEffect(() => {
        fetchBoilerplates();
    }, []);

    const queryChange = (event) => {
        setInputQuery(event.target.value);
    };

    const fetchBoilerplates = async () => {
        try {
            const boilerplatesData = await getBoilerplates();
            boilerplatesData.sort((a, b) => (b.upVotes - b.downVotes) - (a.upVotes - a.downVotes));
            setBoilerplates(boilerplatesData);
        } catch (error) {
            console.error('Error fetching boilerplates:', error);
        }
    };

    const handleSearchButtonClick = () => {
        const topBoilerplates = boilerplates.sort((a, b) => (b.upVotes - b.downVotes) - (a.upVotes - a.downVotes));

        const filteredBoilerplates = topBoilerplates.filter((boilerplate) => {
            const stackMatches = boilerplate.stack.map(tech => tech.toLowerCase());

            // Check if boilerplate matches the input query or recommended tech
            const matchesQueryOrRecommended = 
                (!inputQuery || stackMatches.some(tech => tech.includes(inputQuery.toLowerCase()))) &&
                (!recommendedTech || stackMatches.includes(recommendedTech.toLowerCase()));

            return matchesQueryOrRecommended;
        });

        setBoilerplates(filteredBoilerplates);
    };

    const handleRecommendedTechClick = (tech) => {
        setRecommendedTech(tech);
        setInputQuery(tech);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="max-w-screen-lg">
                <div className="lg:px-28 md:px-16 pt-10 sm:px-6 xs:px-2 w-full pb-10">
                    <div className="">
                        <h1 className="text-4xl font-bold md:text-[70px] text-center py-3 leading-none">Discover the Ideal Boilerplate for Your Tech Stack</h1>
                        <h2 className="text-[17px] leading-[1.8] opacity-80 text-center text-md">Explore our curated selection of boilerplates tailored to your needs, including real-time rankings of the top picks.</h2>
                    </div>
                </div>
                {/* <div className="flex w-full px-6 pt-10">
                    <input 
                        type="text" 
                        placeholder="What's your programming language?" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={inputQuery}
                        onChange={queryChange}
                    />
                    <button 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 font-sans font-semibold ms-1"
                        onClick={handleSearchButtonClick}
                    >
                        Search
                    </button>
                </div> */}
                <div className="form-group">
                    <div className="input-group flex justify-center relative ">
                        <input
                            type="text"
                            className="min-h-[62px] text-black leading-7 z-10 bg-gray-100 px-8 dark:bg-slate-800 focus:outline-none rounded-full ps-4 w-full"
                            placeholder="What's your programming language?"
                            value={inputQuery}
                            onChange={queryChange}
                        />
                        <button 
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 py-2.5 px-8 text-orange-800 font-bold bg-yellow-400 hover:bg-opacity-90 duration-300 z-50 rounded-full"
                            onClick={handleSearchButtonClick}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="content-start w-full pt-5 px-6">
                    <h3 className="text-sm mb-2">Recommended for you...</h3>
                    <div className="flex gap-x-1.5 gap-y-1.5 flex-wrap">
                        {language.map((tech) => (
                            <div key={tech} className={`px-2 rounded-lg ${recommendedTech === tech ? 'bg-yellow-300 text-orange-800 font-semibold' : 'bg-slate-800 text-white'}`}>
                                <button onClick={() => handleRecommendedTechClick(tech)}>
                                    {tech.charAt(0).toUpperCase() + tech.slice(1)}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="content-start w-full pt-5 px-6">
                    <h3 className="text-sm mb-2">Complete your tech stack...</h3>
                    <div className="flex gap-x-1.5 gap-y-1.5 flex-wrap">
                        {stack.map((tech) => (
                            <div key={tech} className={`px-2 bg-slate-800 rounded-lg text-white ${selectedTechStack.includes(tech) ? 'bg-yellow-300' : 'bg-slate-800'}`}>
                                <button onClick={() => handleTechStackClick(tech)}>
                                    {tech}
                                </button>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="pt-10">
                    <div className="underlined text-xl px-2">
                        Your Top Results
                    </div>
                    {boilerplates.map((boilerplate) => (
                        <div key={boilerplate._id}>
                            <BoilerplateCard boilerplate={boilerplate} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}