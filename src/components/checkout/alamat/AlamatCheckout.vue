<template>
    <div class="alamatCheckout">
        <h3 class="judul POPPINS">1. Alamat tempat tinggalmu</h3>

        <form method="post" enctype="multipart/form-data" @submit.prevent="saveAlamat" >
            
            <div class="namaPenerima container">
                <label for="namaPenerima" class="judul ROBOTO">Nama Penerima</label>
                <input type="text" id="namaPenerima" class="HEEBO" placeholder="Testing" />
            </div>
            
            <div class="nomorPenerima container">
                <label for="nomorPenerima" class="judul ROBOTO">Nomor Whatsapp</label>
                <input type="text" id="nomorPenerima" class="POOPINS" placeholder="Testing" @input="handelNomor" v-model="nomor" />
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
                        required
                    >
                        <option 
                            v-for="list in item.data "
                            :key="list.id"
                            :value="JSON.stringify({id: list.id, name: list.name})"
                        >
                            {{ list.name }}
                        </option>
                    </select>
            </div>

            <div class="namaJalan container">
                <label for="namaJalan" class="judul ROBOTO">Nama Jalan</label>
                <textarea @input="handleNamaJalan"  v-model.trim="namaJalan" cols="20" id="namaJalan" rows="5" max="15" ></textarea>
            </div>

            

            <button type="submit" class="HEEBO tombolUbah">Ubah Alamat</button>
        </form>

    </div>

</template>

<script>
    import "./index.css";
    import {ref} from "vue";
    import axios from "axios"
    export default {
        name: "AlamatCheckout",
        data() {
            return {
                provinsi: null,
                kota: null,
                kecamatan: null,
                kelurahan: null,
                namaJalan: "",
                nomor: "",
                src: "https://www.google.co.id/maps/place/Bandung,+Kota+Bandung,+Jawa+Barat"
                
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
        methods: {
            handleNamaJalan() {
                const {namaJalan} = this
                if(namaJalan.length > 15) {
                    this.namaJalan = namaJalan.substr(0, 15)
                }
            },
            async handleAlamat(e) {
                const {id, value} = e.target
                const idAlamat = JSON.parse(value).id
                const namaAlamat = JSON.parse(value).name

                if(id === "provinsi") {
                    const data = await axios.get(`https://val-aji.github.io/api-wilayah-indonesia/api/regencies/${idAlamat}.json`)    
                    this.setData(1, [
                        {name: "    KOTA/KABUPATEN   ", id: null}, 
                        ...data.data]
                    )
                    this.provinsi = namaAlamat
                }else if(id === "kota/kabupaten") {
                    const data = await axios.get(`https://val-aji.github.io/api-wilayah-indonesia/api/districts/${idAlamat}.json`)    
                    this.setData(2, [
                        {name: "    KECAMATAN   ", id: null}, 
                        ...data.data]
                    )
                    this.kota = namaAlamat
                } else if(id === "kecamatan") {
                    const data = await axios.get(`https://val-aji.github.io/api-wilayah-indonesia/api/villages/${idAlamat}.json`)    
                    this.setData(3,  [
                        {name: "    KELURAHAN   ", id: null}, 
                        ...data.data]
                    )
                    this.kecamatan = namaAlamat
                } else if(id === "kelurahan") {
                    this.kelurahan = namaAlamat
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

                // console.log(inputAngka.join(""))

                
            },
            saveAlamat(e) {
                console.log(e.preventDefault)
            }
        }
    }
</script>



