import axios from 'axios';

// Function to reset the song pool
export const resetSongPool = async () => {
  console.log("RESET")
  try {
    const response = await axios.post('/api/reset');
    console.log(response.data.message);
  } catch (error) {
    console.error('Error resetting song pool:', error);
  }
};
