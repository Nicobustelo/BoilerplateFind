import { useState } from "react";

import { addVote } from '../api';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCaretUp,
	faCaretDown,
    faClock,
    faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import moment from 'moment'

const BoilerplateCard = ({boilerplate}) => {
    const {
        title,
		url,
		description,
		free,
		stack,
		socials,
        upVotes,
		downVotes,
		createdAt,
    } = boilerplate

    const boilerplateVotes = upVotes - downVotes
    
    const [voteStatus, setVoteStatus] = useState(null);

    // Url cleaner
    let cleanUrl = url;
    // Remove 'https://' from the beginning
    if (cleanUrl.startsWith("https://")) {
        cleanUrl = cleanUrl.slice("https://".length);
    }
    // Remove query parameters
    cleanUrl = cleanUrl.split('?')[0];
    // Remove the trailing '/'
    if (cleanUrl.endsWith("/")) {
        cleanUrl = cleanUrl.slice(0, -1);
    }
        
    let createdTime = moment(createdAt);
    let timeAgo = createdTime.fromNow();

    const handleVote = async (value) => {
        try {
            await addVote(boilerplate._id, value);
            setVoteStatus(`${value}`)
            // Optionally refresh the boilerplates or update the UI to reflect the vote change
        } catch (error) {
            console.error('Error adding vote:', error);
        }
    };

    return ( 
        <div className='grid grid-cols-9 border-solid border border-opacity-80 border-white rounded-md m-2 p-2 '>
				<div className='col-span-8 flex flex-col space-y-1'>
					<div className='flex border-solid items-center'>
						<h1 className='font-bold text-lg'>{title}</h1>
						<p>&nbsp;-&nbsp;</p>
						<a href={url} target="_blank" className='text-gray-300'>{cleanUrl}</a>
					</div>
					<h2 className='text-sm'>{description}</h2>
					<div className='flex gap-x-1 flex-wrap pt-1.5'>
						{stack.map((language) => {
                            return(
                                <div key={language} className='px-2.5 bg-slate-800 rounded-full mt-2 text-sm font-medium border-solid border border-opacity-60 border-white text-white'>
                                    {language}
                                </div>
                            )
                        })}
					</div>
					<div className='flex gap-x-4 flex-wrap pt-1'>
						{/* <div className='italic border-solid border-white border px-2 rounded-md'> */}
						<div className="flex items-center justify-center gap-x-1.5">
                            <FontAwesomeIcon icon={faClock} color="rgb(229 231 235)" size="sm"/>
                        	{timeAgo}
						</div>
                        <div className="flex items-center justify-center gap-x-1.5">
                            <FontAwesomeIcon icon={faDollarSign} color="rgb(229 231 235)" size="sm"/>
                            {free ? "free" : "paid"}
                        </div>
						{socials.map((social) => {
                            return(
                                <div className='none text-gray-300'>	
                                    <a href="#">
                                        {social}
                                    </a>
                                </div>
                            )
                        })}
					</div>
				</div>
				<div className='flex flex-col h-full items-center justify-around'>
                    <div>
                        <button onClick={() => handleVote(1)}>
                            <FontAwesomeIcon icon={faCaretUp} color={voteStatus === '1' ? 'yellow' : 'white'}/>
                        </button>
                    </div>
                    <div>
                        {   voteStatus === '1' ? boilerplateVotes + 1 
                            : voteStatus === '-1' ? boilerplateVotes - 1 
                            : boilerplateVotes
                        }
                    </div>
                    <div>
                        <button onClick={() => handleVote(-1)}>
                            <FontAwesomeIcon icon={faCaretDown} color={voteStatus === '-1' ? 'yellow' : 'white'}/>
                        </button>
                    </div>
                </div>
			</div>
     );
}
 
export default BoilerplateCard;