import axios from 'axios';

export const sendRequest = async formData => {
  try {
    //const res = await axios.post('/send', formData);
    console.log(formData);
    const res = await axios.post(
      'http://ec2-35-161-98-191.us-west-2.compute.amazonaws.com/send',
      formData
    );
  } catch (error) {
    console.log(error);
  }
};
