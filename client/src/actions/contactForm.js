import axios from 'axios';

export const sendRequest = async formData => {
  try {
    const res = await axios.post('/send', formData);
  } catch (error) {
    console.log(error);
  }
};
