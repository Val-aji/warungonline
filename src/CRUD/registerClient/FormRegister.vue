<template>
    <div id="RegisterClient">
        


        <p class="gagalRegistrasi HEEBO" v-if="registrasi" >Silahkan masukkan {{textGagal}} dengan benar </p>
        <form class="formRegister" @submit.prevent="register" >
             
            
            <div v-for="(element, index) in elements"
                class="container-input" 
                :class="element.name"
                :key="index"
            >
                <label 
                    class="judulInput POPPINS" 
                    :for="element.name"
                >
                    {{element.judul}}
                </label>
                <textarea
                    v-if="element.name === 'alamat'" 
                    :type="element.tipe" 
                    class="inputUser ROBOTO"
                    :class="element.name" 
                    v-model.trim="element.text" 
                    @input="element.myFunction"
                    autocomplete required 
                    :ref="element.name">
                </textarea>
                <input
                    v-else 
                    :type="element.tipe" 
                    class="inputUser ROBOTO"
                    :class="element.name" 
                    v-model.trim="element.text"
                    @input="element.myFunction"  
                    autocomplete required 
                    :ref="element.name" 
                />
                <p 
                    class="textWarning HEEBO " 
                    :class="{'none': element.none}"  
                    >
                        {{element.warning}}
                </p>
            </div>

            <button type="submit" class="tombolRegister HEEBO" >Registrasi</button>

        </form>
    </div>
</template>



<script>
    import "./index.css";
    import { ref } from "vue";
    export default {
        name: "RegisterClient",
        data() {
            return {
                
                registrasi: false,
                textGagal: "Registrasi Gagal"
            }
        },
        setup() {
            const items = ["Nama-Lengkap", "Email-", "Password-", "Konfirm-Password", "Alamat-", "Phone-"]
            const element = {}
            let nameCamelCase;
            
            for (const item of items) {
                const splitItem = item.split("-")
                let tipe = "text"

                nameCamelCase = splitItem[0].substr(0, 1).toLowerCase() + splitItem[0].substr(1, splitItem[0].length) + splitItem[1]
                
                if(nameCamelCase === "password" || nameCamelCase === "konfirmPassword") {
                    tipe = "password"
                }   
                   
                const obj = {
                    name: nameCamelCase,
                    text: "",
                    judul: splitItem.join(" "),
                    tipe,
                    warning: "",
                    none: true,
                }
                
                element[nameCamelCase] = obj 
            }

            const elements = ref(element)
            
            const setElementFunction = (properti, value) => {
                element[properti] = value
            }
            
            return {elements, setElementFunction}
        
        },
        mounted() {
                  
            
        },
        methods: {
            validasiNamaLengkap() {
                console.log("tes")
            },
            // validasiNamaLengkap() {
            //     console.log("tes")
            //     const {namaLengkap} = this.elements.value
            //     if(namaLengkap.length > 75) {
            //         this.setAttribut(this.namaLengkapWarning, "none", false)
            //         this.setAttribut(this.onAllTrue, "namaLengkap", false)
            //     } else {
            //         this.setAttribut(this.namaLengkapWarning, "none", true)
            //         this.setAttribut(this.onAllTrue, "namaLengkap", true)
            //     }

            // },
            // validasiEmail() {
            //     this.email = this.email.replace(/,/g, ".")
            //     const {email} = this
            //     const addEmail = email.search(/@gmail.com/)
            //     const length = 10

            //     if((addEmail === -1 || addEmail < 3) && email.length > 0 || email.length !== addEmail + length) {

            //       this.setAttribut(this.emailWarning, "none", false)
            //       this.setAttribut(this.onAllTrue, "email", false)
                
            //     } 
            //     else if(addEmail !== -1) {
                  
            //       this.setAttribut(this.emailWarning, "none", true)
            //       this.setAttribut(this.onAllTrue, "email", true)

            //     } else {
                  
            //       this.setAttribut(this.emailWarning, "none", true)
            //       this.setAttribut(this.onAllTrue, "email", false)
                
            //     }
                
                
            // },
            // validasiPassword() {
            //     const {password} = this
            //     const cekNumber = password.search(/[0-9]/)

            //     if(password.length < 8 || cekNumber === -1) {

            //         this.setAttribut(this.passwordWarning, "text", "Password minimal 8 karakter dan dicampur dengan angka")
            //         this.setAttribut(this.passwordWarning, "none", false)
            //         this.setAttribut(this.onAllTrue, "password", false)
                
            //     } 
            //     else if(password.length > 50) {
                
            //         this.setAttribut(this.passwordWarning, "text", "password Maksimal 50 Karakter")
            //         this.setAttribut(this.passwordWarning, "none", false)
            //         this.setAttribut(this.onAllTrue, "password", true)
                
            //     } 
            //     else {
                
            //         this.setAttribut(this.passwordWarning, "none", true)
            //         this.setAttribut(this.onAllTrue, "password", true)
                
            //     }
            // }, 
            // validasiKonfirmPassword() {
            //     const {konfirmPassword} = this
            //     if(konfirmPassword !== this.password) {
            //         this.setAttribut(this.konfirmPasswordWarning, "none", false)
            //         this.setAttribut(this.onAllTrue, "konfirmPassowrd", false)
            //     } else {
            //         this.setAttribut(this.konfirmPasswordWarning, "none", true)
            //         this.setAttribut(this.onAllTrue, "konfirmPassowrd", true)
            //     }
                
            // },
            // validasiAlamat() {
            //     const {alamat} = this
            //     if(alamat.length < 30) {
            //         this.setAttribut(this.alamatWarning, "none", false)
            //         this.setAttribut(this.onAllTrue, "alamat", false)
            //     } else {
            //         this.setAttribut(this.alamatWarning, "none", true)
            //         this.setAttribut(this.onAllTrue, "alamat", true)
            //     }

            // },
            // validasiPhone() {
            //     const {nomorHandphone} = this
                
            //     let filterPhone = nomorHandphone.replace(/-/g, "")
            //     const angka = nomorHandphone.match(/[\d]/g)
                
            //     if(!angka) {
            //         this.nomorHandphone = ""
            //         this.setAttribut(this.onAllTrue, "phone", false)
            //     } else if(filterPhone !== angka.join("")) {
            //         this.nomorHandphone = nomorHandphone.substr(0, nomorHandphone.length - 1)
            //         filterPhone = this.nomorHandphone.substr(0, this.nomorHandphone.length)
            //         this.setAttribut(this.phoneWarning, "text", "Nomor Telepon tidak valid")
            //         this.setAttribut(this.phoneWarning, "none", false)
            //         this.setAttribut(this.onAllTrue, "phone", false)

            //     } else if(filterPhone.length >= 11 && filterPhone.length <= 15) {
            //         this.setAttribut(this.onAllTrue, "phone", true)
            //         this.setAttribut(this.phoneWarning, "none", true)
            //     } else if(filterPhone.length > 15) {
            //         this.setAttribut(this.phoneWarning, "text", "Nomor telepon harus kurang dari 15")
            //         this.setAttribut(this.phoneWarning, "none", false)
            //         this.setAttribut(this.onAllTrue, "phone", false)
            //     }
            // },  
            async register(e) {
                e.preventDefault
                const cekTrue = this.checkAllTrue(this.onAllTrue)
                if(cekTrue === true) {
                    console.log("Registrasi Berhasil")
                    try {
                            await fetch("http://localhost:3000/client/register", {
                            method: "POST",
                            body: JSON.stringify({
                                nama_lengkap: this.namaLengkap,
                                alamat: this.alamat,
                                nomor_handphone: this.nomorHandphone.replace(/-/g, ""),
                                password: this.password,
                                email: this.email

                            }),
                            header: {
                                'Content-Type': 'Application/json'
                            }
                        })
                        this.nomorHandphone = ""
                        this.password = ""
                        this.konfirmPassword = ""
                        this.alamat = ""
                    
                    } catch (error) {
                            console.log(error)
                    }



                } else {
                    this.registrasi = true
                    if(cekTrue === "konfirmPassword") {
                         return this.textGagal = "Password"
                    } else if(cekTrue === "namaLengkap") {
                        return this.textGagal = "Nama Lengkap"
                    } else if(cekTrue === "phone") {
                        return this.textGagal = "Nomor Handphone"

                    }  
                    else {
                        return this.textGagal = cekTrue
                    }

                }
                                    
            }  
        },
    }
</script>