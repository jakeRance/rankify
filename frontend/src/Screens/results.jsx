import React, { useEffect, useState } from 'react';


function Results({songs}){

    return(
        <div className="flex items-center justify-center h-screen">
            <div className="text-5xl">
                {songs.map((song, index) => (
                <div key={index} className='pb-5'>
                    <p>{index + 1}.) {song.name}: {song.score} ({song.avg}), {song.range}%</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Results
