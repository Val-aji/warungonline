import Cookies from "js-cookie";
import axios from "axios"
import { urlAPI } from "../src/components/config/index.js";

export const cekLogin = async(router, path) => {
    const token = Cookies.get("tokenWarungonline")
    const email = localStorage.getItem("emailWarungonline")
    if(!token || !email) {
        localStorage.setItem("urlWarungonline", path)
        router.push("/login")
        return false
    }

    const formData = new FormData()
    formData.append("email", email)
    try {
        const result = await axios.post(`${urlAPI}/client/token`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        const tokenDB = result.data.data.token
        
        if(!token || token !== tokenDB) {
            if(!path) {
                console.log("tes")
                localStorage.setItem("urlWarungonline", "/Account")
            } else {
                localStorage.setItem("urlWarungonline", path)
            }
            
            router.push("/login")
        }
    } catch (error) {
        console.log(error)        
    }
    
}





export const instance = () => {
    return axios.create({
        baseURL: urlAPI,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}