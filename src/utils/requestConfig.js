import { API_KEY } from "./constants";

let myHeaders = new Headers();
myHeaders.append("Authorization", API_KEY);

export const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
