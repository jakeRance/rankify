import React, { useEffect, useState } from 'react';


function Songs({inputText, handleSubmit, handleInputChange}){

  const hasEnoughItems = () => {
    // Split the string by newline characters and filter out any empty strings
    const items = inputText.split('\n').filter(item => item.trim() !== '');
    // Check if there are fewer than 2 items
    return items.length >= 2;
  };

    return(
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center'>
          <p className="text-5xl mb-4">List of Items</p>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Paste your list of objects here, separated by a new line"
            rows={10}
            cols={50}
            className='resize-none mb-4 p-4'
          />
        </div>
        <div className='flex justify-center'>
          <button type="submit" 
            className='text-3xl btn btn-primary'
            disabled={!hasEnoughItems()}>Submit</button>
        </div>
      </form>
    </div>
    )
}

export default Songs
