/* eslint-disable no-unused-vars */

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/albums";
export const getUsers = async () => {
  const response = await axios.get(url);
  return response.data;
};
