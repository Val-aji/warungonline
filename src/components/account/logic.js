import axios from "axios";
import { urlAPI } from "../config/index.js";
import Cookies from "js-cookie";

export const handleTesting = async() => {
    console.log("Tes")
}

export const handleLogout = async(email) => {
    const formData = new FormData()
    formData.append("email", email)
    try {

        await axios.post(`${urlAPI}/client/logout`, formData)   
        Cookies.remove("tokenWarungonline")
        localStorage.removeItem("urlWarungonline")
        localStorage.removeItem("emailWarungonline")
        alert("logout berhasil")
        location.reload()
         
    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
    
}