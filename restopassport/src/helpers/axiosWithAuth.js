import axios from "axios";

export default function axiosWithAuth() {
  const token = localStorage.getItem("token");

  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }, 
    // baseURL: "https://build-restaurant-passport.herokuapp.com"
  });

  return instance;
}
