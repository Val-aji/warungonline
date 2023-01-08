<template>
    <div id="RegisterClient">
        <p class="judulRegister ROBOTO">Registrasi</p>
        
        <p class="gagalRegistrasi HEEBO" v-if="registrasi" >Silahkan masukkan {{textGagal}} dengan benar </p>
        <form class="formRegister" @submit.prevent="register" >
            <div class="container-input namaLengkap">
                <label class="judulInput POPPINS" for="namaLengkap">Nama Lengkap</label>
                <input type="text" class="inputUser ROBOTO" id="namaLengkap"  v-model.trim="namaLengkap" @input="validasiNama" autocomplete required ref="namaLengkap" />
                <p class="textWarning HEEBO " :class="{'none': namaLengkapWarning.none}"  >{{namaLengkapWarning.text}}</p>
            </div>

            <div class="container-input email">
                <label class="judulInput POPPINS" for="email">Email</label>
                <input type="text" class="inputUser ROBOTO" id="email" v-model.trim="email" @input="validasiEmail" autocomplete required ref="email" />
                <p class="textWarning HEEBO " :class="{'none': emailWarning.none}"   >{{emailWarning.text}}</p>
            </div>

            <div class="container-input password">
                <label class="judulInput POPPINS" for="password"> Password </label>
                <input type="password" class="inputUser ROBOTO" id="password" v-model="password"  @input="validasiPassword" autocomplete required ref="password" />
                <p class="textWarning HEEBO" :class="{'none': passwordWarning.none}"  >{{passwordWarning.text}}</p>
            </div>

            <div class="container-input konfirmPassword">
                <label class="judulInput POPPINS" for="konfirmPassword"> Konfirm Password </label>
                <input type="password" class="inputUser ROBOTO" id="konfirmPassword" v-model="konfirmPassword" @input="validasiKonfirmPassword" autocomplete required ref="konfirmPassword" />
                <p class="textWarning HEEBO " :class="{'none': konfirmPasswordWarning.none}"  >{{konfirmPasswordWarning.text}}</p>
            </div>

            <div class="container-input alamat">
                <label class="judulInput POPPINS" for="alamat"> Alamat  Rumah</label>
                <textarea class="inputUser ROBOTO" @input="validasiAlamat" id="alamat" ref="alamat" v-model.trim="alamat"  autocomplete required />
                <p class="textWarning HEEBO " :class="{'none': alamatWarning.none}"  >{{alamatWarning.text}}</p>
            </div>

            <div class="container-input phone">
                <label class="judulInput POPPINS" for="phone"> Nomor Handphone </label>
                <input type="text" class="inputUser ROBOTO" id="phone" v-model.trim="nomorHandphone" @input="validasiPhone" autocomplete required ref="phone" />
                <p class="textWarning HEEBO " :class="{'none': phoneWarning.none}"   >{{phoneWarning.text}}</p>
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
                namaLengkap: "",
                alamat: "",
                email: "",
                password: "",
                konfirmPassword: "",
                nomorHandphone: "",
                registrasi: false,
                textGagal: "Registrasi Gagal"
            }
        },
        setup() {
            
            const onAllTrue = ref({})
            const emailWarning = ref({text: "Email tidak valid", none: true})
            const namaLengkapWarning = ref({text: "Karakter harus kurang dari 7", none: true})
            const passwordWarning = ref({text: "Password terlalu lemah", none: true})
            const konfirmPasswordWarning = ref({text: "password tidak cocok", none: true})
            const alamatWarning = ref({text: "Karakter harus lebih dari 30", none: true})
            const phoneWarning = ref({text: "harus memasukkan angka", none: true})

            const setAttribut = (tag, attribute, value) => { 
                 tag[attribute] = value
            }

            return {emailWarning, namaLengkapWarning, passwordWarning, konfirmPasswordWarning, alamatWarning, phoneWarning, onAllTrue, setAttribut}
        
        },
        methods: {
            checkAllTrue(objs) {
                for(const obj in objs ) {
                    if(objs[obj] !== true) {
                        return obj;
                    }
                }
                return true
            },
            validasiNama() {
                const {namaLengkap} = this
                if(namaLengkap.length > 75) {
                    this.setAttribut(this.namaLengkapWarning, "none", false)
                    this.setAttribut(this.onAllTrue, "namaLengkap", false)
                } else {
                    this.setAttribut(this.namaLengkapWarning, "none", true)
                    this.setAttribut(this.onAllTrue, "namaLengkap", true)
                }

            },
            validasiEmail() {
                this.email = this.email.replace(/,/g, ".")
                const {email} = this
                const addEmail = email.search(/@gmail.com/)
                const length = 10

                if((addEmail === -1 || addEmail < 3) && email.length > 0 || email.length !== addEmail + length) {

                  this.setAttribut(this.emailWarning, "none", false)
                  this.setAttribut(this.onAllTrue, "email", false)
                
                } 
                else if(addEmail !== -1) {
                  
                  this.setAttribut(this.emailWarning, "none", true)
                  this.setAttribut(this.onAllTrue, "email", true)

                } else {
                  
                  this.setAttribut(this.emailWarning, "none", true)
                  this.setAttribut(this.onAllTrue, "email", false)
                
                }
                
                
            },
            validasiPassword() {
                const {password} = this
                const cekNumber = password.search(/[0-9]/)

                if(password.length < 8 || cekNumber === -1) {

                    this.setAttribut(this.passwordWarning, "text", "Password minimal 8 karakter dan dicampur dengan angka")
                    this.setAttribut(this.passwordWarning, "none", false)
                    this.setAttribut(this.onAllTrue, "password", false)
                
                } 
                else if(password.length > 50) {
                
                    this.setAttribut(this.passwordWarning, "text", "password Maksimal 50 Karakter")
                    this.setAttribut(this.passwordWarning, "none", false)
                    this.setAttribut(this.onAllTrue, "password", true)
                
                } 
                else {
                
                    this.setAttribut(this.passwordWarning, "none", true)
                    this.setAttribut(this.onAllTrue, "password", true)
                
                }
            }, 
            validasiKonfirmPassword() {
                const {konfirmPassword} = this
                if(konfirmPassword !== this.password) {
                    this.setAttribut(this.konfirmPasswordWarning, "none", false)
                    this.setAttribut(this.onAllTrue, "konfirmPassowrd", false)
                } else {
                    this.setAttribut(this.konfirmPasswordWarning, "none", true)
                    this.setAttribut(this.onAllTrue, "konfirmPassowrd", true)
                }
                
            },
            validasiAlamat() {
                const {alamat} = this
                if(alamat.length < 30) {
                    this.setAttribut(this.alamatWarning, "none", false)
                    this.setAttribut(this.onAllTrue, "alamat", false)
                } else {
                    this.setAttribut(this.alamatWarning, "none", true)
                    this.setAttribut(this.onAllTrue, "alamat", true)
                }

            },
            validasiPhone() {
                const {nomorHandphone} = this
                
                let filterPhone = nomorHandphone.replace(/-/g, "")
                const angka = nomorHandphone.match(/[\d]/g)
                
                if(!angka) {
                    this.nomorHandphone = ""
                    this.setAttribut(this.onAllTrue, "phone", false)
                } else if(filterPhone !== angka.join("")) {
                    this.nomorHandphone = nomorHandphone.substr(0, nomorHandphone.length - 1)
                    filterPhone = this.nomorHandphone.substr(0, this.nomorHandphone.length)
                    this.setAttribut(this.phoneWarning, "text", "Nomor Telepon tidak valid")
                    this.setAttribut(this.phoneWarning, "none", false)
                    this.setAttribut(this.onAllTrue, "phone", false)

                } else if(filterPhone.length >= 11 && filterPhone.length <= 15) {
                    this.setAttribut(this.onAllTrue, "phone", true)
                    this.setAttribut(this.phoneWarning, "none", true)
                } else if(filterPhone.length > 15) {
                    this.setAttribut(this.phoneWarning, "text", "Nomor telepon harus kurang dari 15")
                    this.setAttribut(this.phoneWarning, "none", false)
                    this.setAttribut(this.onAllTrue, "phone", false)
                }
            },  
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
        mounted() {
                
        },
    }
</script>