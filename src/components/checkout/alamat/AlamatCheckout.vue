<template>
    <div class="alamatCheckout">
        <h3 class="judul POPPINS">1. Alamat tempat tinggalmu</h3>

        <form method="post" enctype="multipart/form-data">
            
            <div class="namaPenerima container">
                <label for="namaPenerima" class="judul ROBOTO">Nama Penerima</label>
                <input type="text" id="namaPenerima" class="HEEBO" placeholder="Nama Lengkapmu" v-model="namaLengkap" :readOnly="!isUbah" />
            </div>
            
            <div class="nomorPenerima container">
                <label for="nomorPenerima" class="judul ROBOTO">Nomor Whatsapp</label>
                <input type="text" id="nomorPenerima" class="POOPINS" placeholder="Nomor Handponemu" @input="handelNomor" v-model="nomorWhatsapp" :readOnly="!isUbah"/>
            </div>
            
            <div 
                v-for="(item, index) in alamat" 
                :class="item.name" 
                class=" container "
                :key="index"
            >       
                    <label
                        :for="item.name"
                        class="judul ROBOTO"
                    >
                        {{ item.name }}
                    </label>
                    <select
                        :id="item.name"
                        @change="handleAlamat"
                           
                    >
                        <option 
                            v-for="list in item.data "
                            :readOnly="!isUbah"    
                            required
                            :key="list.id"
                            :value="JSON.stringify({id: list.id, name: list.name})"
                        >
                            {{ list.name }}
                        </option>
                    </select>
            </div>

            <div class="namaJalan container">
                <label for="namaJalan" class="judul ROBOTO">Nama Jalan</label>
                <textarea @input="handleNamaJalan"  v-model.trim="namaJalan" required  cols="20" id="namaJalan" rows="5" max="15" :readOnly="!isUbah"></textarea>
            </div>

            

            <button type="button" @click="handleTombolSave" class="HEEBO tombolUbah bg-ubah" v-if="!isUbah" >Ubah Alamat</button>
            <button type="submit" class="HEEBO tombolUbah " @click="handleTombolSave" v-else-if="isUbah" >Save Alamat</button>
        </form>

    </div>

</template>

<script>
    import "./index.css";
    import {ref} from "vue";
    import axios from "axios"
    import { instance } from "../../../../config/logic.js";
    export default {
        name: "AlamatCheckout",
        data() {
            return {
                alamatPembeli: [],
                namaJalan: "",
                namaLengkap: "",
                nomorWhatsapp: "",
                src: "https://www.google.co.id/maps/place/Bandung,+Kota+Bandung,+Jawa+Barat",
                isUbah: true
            }
        },
        setup() {
            const alamat = ref([])
            const setAlamat = (value) => {
                alamat.value = value
            }
            const setData = (index, value) => {
                alamat.value[index].data = value
            }

            return {alamat, setAlamat, setData}
        },
        beforeMount() {
            const config = ["provinsi", "kota/kabupaten", "kecamatan", "kelurahan"]

            const alamatFake = config.map((item, index) => {
                const obj = {
                    id: index,
                    name: item,
                    data: null,
                }
                return obj
            })
            this.setAlamat(alamatFake)


            // // set alamat
            axios.get("https://val-aji.github.io/api-wilayah-indonesia/api/provinces.json")
            .then(res => {
                this.setData(0, [
                    {name: "   PROVINSI   ", id: null}, 
                    ...res.data]
                )
            })
            .catch(err => console.log(err))
        },
        mounted() {
            const formData = new FormData()

            const email = localStorage.getItem("emailWarungonline")
            if(!email) {
                return false
            }
            formData.append("email", email)
            instance().post("/client/getIdentitas", formData)
            .then(res => {
                const {namaLengkap, nomorWhatsapp} = res.data.data
                this.namaLengkap = namaLengkap
                this.nomorWhatsapp = nomorWhatsapp
                
            })
            .catch(err => console.log(err))
        },
        methods: {
            handleNamaJalan() {
                const {namaJalan} = this
                if(namaJalan.length > 15) {
                    this.namaJalan = namaJalan.substr(0, 15)
                }
            },
            async handleAlamat(e) {
                
                const {id, value} = e.target
                this.isUbah = true
                this.$emit("setIsValid", false)
                const idAlamat = JSON.parse(value).id
                const namaAlamat = JSON.parse(value).name
                
                if(namaAlamat.trim().toLowerCase() === id) {
                        this.alamat.map((item, index) => {
                            if(index === 0) {
                                return false
                            } else {
                                this.setData(index, [{name: `   ${item.name.toUpperCase()}   `, id: null}])         
                            }
                            
                        })
                        this.alamatPembeli = []        
                        return false
                }
                

                if(id === "provinsi") {
                    
                    const data = await axios.get(`https://val-aji.github.io/api-wilayah-indonesia/api/regencies/${idAlamat}.json`) 
                    
                    
                    this.setData(1, [
                        {name: "    KOTA/KABUPATEN   ", id: null}, 
                        ...data.data]
                    )
                    this.alamatPembeli[0] = " "+ namaAlamat
                    
                }else if(id === "kota/kabupaten") {
                    const data = await axios.get(`https://val-aji.github.io/api-wilayah-indonesia/api/districts/${idAlamat}.json`)    
                    this.setData(2, [
                        {name: "    KECAMATAN   ", id: null}, 
                        ...data.data]
                    )
                    this.alamatPembeli[1] = " " + namaAlamat + " ,"
                } else if(id === "kecamatan") {
                    const data = await axios.get(`https://val-aji.github.io/api-wilayah-indonesia/api/villages/${idAlamat}.json`)    
                    this.setData(3,  [
                        {name: "    KELURAHAN   ", id: null}, 
                        ...data.data]
                    )
                    this.alamatPembeli[2] = " Kec." + namaAlamat + " ,"
                } else if(id === "kelurahan") {
                    
                    this.alamatPembeli[3] = " Kel." + namaAlamat + " ,"
                }
                else {
                    return false
                }
                
            },
            handelNomor(e) {
                const { value } = e.target
                const inputAngka = value.match(/\d+/g)
                
                if (!inputAngka) {
                    this.nomor = ""
                } else {
                    this.nomor = inputAngka.join("")
                }
                
            },
            handleTombolSave(e) {
                e.preventDefault()
                const {isUbah, namaJalan, nomorWhatsapp, namaLengkap} = this

                if(!namaJalan || namaJalan.length < 2 || !namaLengkap || namaLengkap.length < 3 || !nomorWhatsapp || nomorWhatsapp.length < 10) {
                    this.$emit("setIsValid", false)
                    return false
                }

                if(isUbah) {
                    const obj = {
                        alamat: this.alamatPembeli,
                        namaJalan: namaJalan,
                        namaLengkap: namaLengkap,
                        nomorWhatsapp: nomorWhatsapp
                    }
                    this.$emit('setDataAlamat', obj)   
                } else {
                    this.$emit("setIsValid", false)
                }
                
                this.isUbah = !isUbah
                
            }
        }
    }
</script>



