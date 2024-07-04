import React, { useEffect, useState } from 'react';
import BoilerplateCard from '../components/BoilerplateCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFire,
	faClock,
	faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { getBoilerplates, getHotBoilerplates } from '../api';

export default function Leaderboards() {
    const [boilerplates, setBoilerplates] = useState([]);
    const [activeButton, setActiveButton] = useState("top");

    useEffect(() => {
        fetchBoilerplates("top");
    }, []);

    const fetchBoilerplates = async (sequence) => {
        try {
            let boilerplatesData;
            if (sequence === "hot") {
                boilerplatesData = await getHotBoilerplates(7); // Fetch hot boilerplates from the last 7 days
            } else {
                boilerplatesData = await getBoilerplates(); // Fetch all boilerplates
                if (sequence === "top") {
                    boilerplatesData.sort((a, b) => (b.upVotes - b.downVotes) - (a.upVotes - a.downVotes));
                } else if (sequence === "new") {
                    boilerplatesData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                }
            }
            setBoilerplates(boilerplatesData);
            setActiveButton(sequence);
        } catch (error) {
            console.error('Error fetching boilerplates:', error);
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='max-w-screen-lg'>
                <div className='flex flex-col items-center mt-14'>
                    <h1 className='text-4xl font-bold md:text-[70px] p-4 text-center leading-none'>Boilerplate Leaderboard</h1>
                    <h2 className='px-6 mt-6 text-[17px] leading-[1.8] opacity-80 text-center'>Explore the hottest, top-rated, and newest boilerplates or share your own to help others accelerate learning and deployment! 🚀⚡</h2>
                </div>
                <div className='flex items-center justify-center pt-10 mt-5 mb-14'>
                    <button 
                        // className='border py-0.5 px-1.5 rounded-md hover:border-yellow-300 hover:text-yellow-300'
                        className='absolute py-2.5 px-8 text-orange-800 font-bold bg-yellow-400 hover:bg-opacity-90 duration-300 z-50 rounded-full'
                    >
                        Add Boilerplate
                    </button>
                </div>
                <div className='flex w-full justify-around mt-8'>
                    <div className={`flex items-center justify-center space-x-1 border-solid border-b-2 w-full py-1.5 ${activeButton === 'hot' ? 'border-yellow-400' : ''}`}>
                        <FontAwesomeIcon icon={faFire} color={activeButton === 'hot' ? 'yellow' : 'white'}/>
                        <button  
                            onClick={() => fetchBoilerplates("hot")}
                        >
                            Hot
                        </button>
                    </div>
                    <div className={`flex items-center justify-center space-x-1 border-solid border-b-2 w-full py-1.5 ${activeButton === 'top' ? 'border-yellow-400' : ''}`}>
                        <FontAwesomeIcon icon={faTrophy} color={activeButton === 'top' ? 'yellow' : 'white'}/>
                        <button 
                            onClick={() => fetchBoilerplates("top")}
                        >
                            Top
                        </button>
                    </div>
                    <div className={`flex items-center justify-center space-x-1 border-solid border-b-2 w-full py-1.5 ${activeButton === 'new' ? 'border-yellow-400' : ''}`}>
                        <FontAwesomeIcon icon={faClock} color={activeButton === 'new' ? 'yellow' : 'white'}/>
                        <button  
                            onClick={() => fetchBoilerplates("new")}
                        >
                            New
                        </button>
                    </div>
                </div>
                <div>
                    {boilerplates.map((boilerplate) => {
                        return (
                            <div key={boilerplate.id}>
                                <BoilerplateCard boilerplate={boilerplate}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}