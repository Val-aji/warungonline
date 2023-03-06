<template>
    <div className="FormLogin">
        <div id="Layout" :class="{'none': isLogin}">
            <button class="login ROBOTO" @click="login">Login</button>
            <button class="register ROBOTO">Daftar Baru</button>
        </div>

        <form method="POST" ref="formLogin" @submit.prevent="handleLogin" v-if="isLogin" class="loginClient">
            <span className="tombolClose" @click="() => this.isLogin = false" v-html="CLOSE"></span>
            <p v-if="isError" className="pesanError HEEBO"> {{ pesanError }}</p>
            
            <div class="container email">
                <label class="judul HIND">Email atau Nomor Handphone</label>
                <input name="username" placeholder="email atau nomor handphone" v-model="username" class="POPPINS" type="text" />
            </div>

            <div class="container password">
                <label  class="judul HIND">Password</label>
                <input v-model="password" placeholder="password" type="password" name="password" autocomplete class="POPPINS" />
            </div>

            <button type="submit"  className="ROBOTO tombolLogin">Login</button>
        </form  >
    </div>
    
</template>

<script>
    import axios from "axios"
    import { urlAPI } from "../../components/config/index.js"
    import Cookies from "js-cookie";
    import {CLOSE} from "../../components/icons/config.js"

    export default {

        name: "FormLogin",
        data() {
            return {
                isLogin: false,
                isRegister: false,
                isError: false,
                pesanError: "",
                username: null,
                password: "",
                CLOSE
            }
        },
        methods: {
            login() {
                this.isLogin = true
                
            },
            register() {
                console.log("register");
            },
            async handleLogin() {
                const formLogin = new FormData(this.$refs.formLogin)
                
                const username = formLogin.get("username").trim()
                const password = formLogin.get("password").trim()
                
                try {
                    const result = await axios.post(`${urlAPI}/client/login`, {email: username, password}, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }})

                    const {data} = result
                    
                    if(data.status === 404 || data.status === 401 || !data) {
                        this.isError = false
                        this.pesanError = data.message
                        setTimeout(() => {
                            this.isError = true
                        }, 300)
                        
                        
                        
                    } else if(data.status === 200) {
                        this.error = false
                        
                        alert("Login Berhasil")
                        const {token} = data.data
                        Cookies.set("tokenWarungonline", token)

                        const url = localStorage.getItem("urlWarungonline")
                        localStorage.setItem("emailWarungonline", data.data.email)
                        
                        if(!url || url == "undefined") {
                            this.$router.push("/Account")
                            localStorage.removeItem("urlWarungonline")
                        } else {
                            localStorage.removeItem("urlWarungonline")
                            this.$router.push(url)
                        }
                        
                    }
                } catch (error) {
                    setTimeout(() => {
                        this.isError = true  
                    }, 300)
                    const {status} = error.response
                    if(status == 401) {
                        this.pesanError = "Password salah!"
                    } else if(status == 404) {
                        this.pesanError = "Email tidak ditemukan"
                    }
                }

            }
        }
    }
</script>