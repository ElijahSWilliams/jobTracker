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

export function createJob(jobData, token) { 
/*   console.log("token", token) */
  return fetch(`${baseURL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }, 
    body: JSON.stringify(jobData)
  }).then((res) => {
    return checkResponse(res);
  })
} 

export function getJobs(token) {
  /* console.log("getJobs running");  */
  return fetch(`${baseURL}/jobs`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((res) => {
    return checkResponse(res);
  })
} 

export function deleteJob(jobID, token) {
  /* console.log(`jobID: ${jobID}, token: ${token}`) */ 
  return fetch(`${baseURL}/jobs/${jobID}`, { 
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((res) => {
    return checkResponse(res)
  })
} 

export function updateJob(jobID, updatedJob, token) {
  // 
  console.log(jobID)
  return fetch(`${baseURL}/jobs/${jobID}`, {
    method: "PATCH", 
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedJob) //send new info 
  })
  .then((res) => {
    return checkResponse(res);
  })
}