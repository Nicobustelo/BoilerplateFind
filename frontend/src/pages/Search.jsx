import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BoilerplateCard from "../components/BoilerplateCard";
import { getBoilerplates } from "../api";

const language = [
    'javascript', 'Node.js', 'swift', 'python', 'java', 'typescript', 'ruby', 'php', 'csharp', 'go', 'kotlin', 'rust', 'scala'
];

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export default function Search() {
    const [boilerplates, setBoilerplates] = useState([]);
    const [inputQuery, setInputQuery] = useState("");
    const [recommendedTech, setRecommendedTech] = useState("");

    const query = useQuery().get('q');

    useEffect(() => {
        if (query) {
            setInputQuery(query);
            handleSearch(query);
        } else {
            fetchBoilerplates();
        }
    }, [query]);

    const fetchBoilerplates = async () => {
        try {
            const boilerplatesData = await getBoilerplates();
            console.log(Array.isArray(boilerplatesData)); // should log true
            console.log(boilerplatesData);
            if (Array.isArray(boilerplatesData)) {
                boilerplatesData.sort((a, b) => (b.upVotes - b.downVotes) - (a.upVotes - a.downVotes));
                setBoilerplates(boilerplatesData);
            } else {
                throw new Error('Data is not an array');
            }
        } catch (error) {
            console.error('Error fetching boilerplates:', error);
        }
    };

    const handleSearch = async (searchQuery) => {
        const boilerplatesData = await getBoilerplates();
        const topBoilerplates = boilerplatesData.sort((a, b) => (b.upVotes - b.downVotes) - (a.upVotes - a.downVotes));

        const filteredBoilerplates = topBoilerplates.filter((boilerplate) => {
            const stackMatches = boilerplate.stack.map(tech => tech.toLowerCase());

            // Check if boilerplate matches the input query or recommended tech
            const matchesQueryOrRecommended = 
                (!searchQuery || stackMatches.some(tech => tech.includes(searchQuery.toLowerCase()))) &&
                (!recommendedTech || stackMatches.includes(recommendedTech.toLowerCase()));

            return matchesQueryOrRecommended;
        });

        setBoilerplates(filteredBoilerplates);
    };

    const queryChange = (event) => {
        setInputQuery(event.target.value);
    };

    const handleSearchButtonClick = () => {
        handleSearch(inputQuery);
    };

    const handleRecommendedTechClick = (tech) => {
        setRecommendedTech(tech);
        setInputQuery(tech);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="max-w-screen-lg">
                <div className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 pt-10 w-full pb-10">
                    <div className="">
                        <h1 className="text-4xl font-bold md:text-[70px] text-center py-3 leading-none">Discover the Best Boilerplate for Your Tech Stack</h1>
                        <h2 className="text-[17px] leading-[1.8] opacity-80 text-center text-md">Explore our curated selection of boilerplates tailored to your needs, including real-time rankings of the top picks.</h2>
                    </div>
                </div>
                <div className="form-group px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                    <div className="input-group flex justify-center relative ">
                        <input
                            type="text"
                            className="min-h-[62px] text-black leading-7 z-10 bg-gray-100 px-8 focus:outline-none rounded-full ps-4 w-full"
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
