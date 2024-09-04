import axios from "axios";

const URL="http://localhost:5000/users"



export const addUser=async (user)=>{
    const res = await axios.post(URL,user)
    return res.data
}

export const checkUser= async (username,password)=>{
    const res = await axios.get(`${URL}?username=${username}&password=${password}`)
    return res.data.length > 0;
}