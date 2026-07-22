import { baseURL } from "./Constants"; 
import checkResponse from "./Api"; 


export default function signUp({name, email, password}) {
    return fetch(`${baseURL}/signup`, {
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({name, email, password})
    }).then((res) => {
        return checkResponse(res);
    })
}