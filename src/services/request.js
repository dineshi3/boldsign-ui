import axios from 'axios';
import { toast } from 'react-toastify';

export const request = async ({ url = '', method, baseURL, data, headers, params, timeout }) => {
  try {
    const response = await axios.request({ url, method, baseURL, data, headers, params, timeout });
    return response.data;
  } catch (error) {
    if (error.response) toast.error(error.response.data?.message);
    else toast.error(error.message);
    return { status: false, message: error.message };
  }
};
