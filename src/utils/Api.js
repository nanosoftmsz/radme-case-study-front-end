import axios from "axios";

const BaseAPI = axios.create({
  baseURL: process.env.REACT_APP_ecommerce_admin,
  headers: {
    "Content-Type": "application/json",
  },
});

export { BaseAPI };
