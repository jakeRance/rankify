import React, { useEffect, useState } from 'react';


function Compare({ songA, songB, handleRankSubmit }){
    const [score, setScore] = useState(-1)
    const values = [3,2,1,0,1,2,3]


    const handleScoreChange = (new_score) => {
        setScore(new_score)
    };


    return (
    <div className="flex items-center justify-center h-screen">
        <div className="grid grid-rows-2 justify-items-center w-full">
            <div className="grid grid-cols-3 justify-items-center w-1/3">
                <p className='text-5xl text-center'>{songA.name}</p>
                <p className='text-1xl text-center'>or</p>
                <p className='text-5xl text-center'>{songB.name}</p>
            </div>
            <form className="grid grid-cols-7 grid-rows-2 justify-items-center w-1/3 mt-3" 
                onSubmit={(e) => {
                    // Prevent page refresh from submit
                    e.preventDefault();
                    handleRankSubmit(score);
                }}> 
                {values.map((value, index) => (
                    <button
                        key={index + 1}
                        type="button"
                        onClick={() => handleScoreChange(index + 1)}
                    >
                        {value}
                    </button>
                ))}

                <button 
                    type="submit" 
                    className="bg-cover-blue rounded-lg md:text-2xl col-span-7 mt-4" 
                    disabled={score == -1} 
                    >
                    Confrim
                </button>
            </form>
        </div>
    </div>
    )
}

export default Compare
