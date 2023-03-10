<template>
    <button class="tombolTambah" @click="insertKeranjang">
            +
    </button>
</template>

<script>
    import { instance, cekLogin } from "../../../../config/logic.js"

    export default {
        name: "TombolTambah",
        props: {
            data: Object
        },
        methods: {
            async insertKeranjang() {
                
                try {        
                    cekLogin(this.$router, this.$route.path)
                    
                                 
                    const email = localStorage.getItem("emailWarungonline")
                    const formData = new FormData()    
                    formData.append("tanggal", new Date().toLocaleString("id-ID", {timezone: "asia/jakarta"}))
                    formData.append("kodeProduk", this.data.kodeProduk),
                    formData.append("email", email)
                    
                    await instance().put("/clientProduk/keranjang", formData)
                    console.log("tambah keranjang sukses")
                } catch (error) {
                    console.log({error})
                    console.log("error")
                }
                
            }
        },
    }
</script>