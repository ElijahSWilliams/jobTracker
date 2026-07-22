

  export default function checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    } else {
      return res.json();
    }
  }   

