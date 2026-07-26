import { baseURL } from "./Constants";
import checkResponse from "./Api";

export function signUp({ name, email, password }) {
  return fetch(`${baseURL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    return checkResponse(res);
  });
}

export function signIn({ email, password }) {
  return fetch(`${baseURL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return checkResponse(res);
  });
}

export function getCurrentUser(token) { //take in token
  return fetch(`${baseURL}/users/me`, { //make a fetch request 
    method: "GET", 
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  })
} 

export function createJob({company, position, dateAdded, status}, token) {
  return fetch(`${baseURL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }),then((res) => {
    return checkResponse(res);
  })
}