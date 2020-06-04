import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID YExJ9FsXlmAefGjBLTxnaPt5Pcc9wJGZSRniwxT5b9c',
  },
});
