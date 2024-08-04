import React, { useEffect, useState } from 'react';
// import {compare} from './compare'
// import {results} from './results'
import Compare from './compare.jsx';
import Results from './results.jsx';
import Songs from './songs.jsx'
import axios from 'axios';




function app() { 
  const [songA, setSongA] = useState("")
  const [songB, setSongB] = useState("")
  const [data, setData] = useState([])
  const [songs, setSongs] = useState([])
  const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('');
  const [gotSongs, setGotSongs] = useState(false)
  const [objectsList, setObjectsList] = useState([]);

  const resetSongPool = async () => {
    try {
      const response = await axios.post("${process.env.REACT_APP_API_URL}/api/reset");
      console.log(response.data.message);
    } catch (error) {
      console.error('Error resetting song pool:', error);
    }
  };



  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedObjects = inputText.split('\n').map(item => item.trim()).filter(item => item);
    setObjectsList(parsedObjects);
    setGotSongs(true);
  };
 

  const fetchSongs = async () => {
    try {
      //Reset song_pool so past rounds don't carry over
      resetSongPool()
      const response = await axios.post("${process.env.REACT_APP_API_URL}/api/pairs", objectsList);
      setData(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const sendResults = async () => {
  try {
      const response = await axios.post("${process.env.REACT_APP_API_URL}/api/results", data);
      setSongs(response.data.processedData);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};

  useEffect(() => {
    if(gotSongs){
      fetchSongs()
    }
  },[gotSongs])


useEffect(() => {
  if (count === data.length && count > 0) {
    sendResults();
  }
}, [data, count]);



  const handleRankSubmit = (score) => {
    data[count].score = score
    setCount(count + 1)
  };


  return (
    <div>
      {gotSongs == false ? (
        <Songs inputText={inputText} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      ) : (
        count < data.length ? (
           <Compare songA={data[count].songA} songB={data[count].songB} handleRankSubmit={handleRankSubmit} />
        ) : (
          <Results songs={songs} />
        )
      )}  
    </div>
);

 
}

export default app
