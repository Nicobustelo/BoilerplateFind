import { useState } from "react";

import { addVote } from '../api';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCaretUp,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

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
    
    const [voteStatus, setVoteStatus] = useState(null);

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
        <div className='grid grid-cols-9 border-solid border border-white rounded-md m-2 p-2 '>
				<div className='col-span-8 flex flex-col space-y-1'>
					<div className='flex border-solid'>
						<h1 className='font-bold'>{title}</h1>
						<p>&nbsp;-&nbsp;</p>
						<a href={url} target="_blank" className='text-gray-300'>{url}</a>
					</div>
					<h2 className='text-sm'>{description}</h2>
					<div className='flex gap-x-4 flex-wrap'>
						{stack.map((language) => {
                            return(
                                <div key={language} className='px-2 bg-slate-800 rounded-lg text-white'>
                                    {language}
                                </div>
                            )
                        })}
					</div>
					<div className='flex gap-x-4 flex-wrap'>
						{/* <div className='italic border-solid border-white border px-2 rounded-md'> */}
						<div>
                        	{createdAt}
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
                    <div>{upVotes - downVotes}</div>
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