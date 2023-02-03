import { BASE_URL } from "./url";
import axios from "axios";
import queryString from "query-string";
// use to get data from server with query string
export const getData = async (url, queryObj) => {
  const query = queryString.stringify(queryObj);
  const response = await axios.get(`${url}?${query}`).then((res) => {
    return res
  });
  return response
};
