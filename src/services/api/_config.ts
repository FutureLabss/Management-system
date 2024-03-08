
import axios from 'axios'
const BASE_URL = "https://flab-mangement.onrender.com"

axios.defaults.baseURL = BASE_URL

axios.defaults.withCredentials=false;

export  function setToken(token: string |null): void{
    if(token){
        axios.defaults.headers.common.Authorization = token? `Bearer ${token}` : "";
    }

}