import axios from 'axios';

export const sendRequest = async (formData) => {
  try {
    console.log(formData);
    const res = await axios.post(
      //'http://161.35.99.4/send',
      //'http://ec2-54-188-32-210.us-west-2.compute.amazonaws.com/send',
      //'http://ec2-3-210-43-100.compute-1.amazonaws.com/send',
      'http://161.35.58.214:5000/send',
      formData
    );
  } catch (error) {
    console.log(error);
  }
};
