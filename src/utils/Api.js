import axios from 'axios';

const BaseAPI = axios.create({
  baseURL: process.env.REACT_APP_CASE_STUDY_USER,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { BaseAPI };
