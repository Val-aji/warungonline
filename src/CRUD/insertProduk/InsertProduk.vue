<template>
    <div id="InsertProduk">
        <p class="judulInsert ROBOTO">Tambah Produk</p>
        <form method="POST" enctype="multipart/form-data" @submit.prevent="insertData" ref="formData" class="formInsert">
            <div class="container-input namaProduk">
                <label class="judulInput POPPINS" for="namaProduk">Nama Produk</label>
                <input type="text" required autocomplete class="inputUser ROBOTO" id="namaProduk" v-model.trim="namaProduk" @input="handleNamaProduk" />
            </div>
            
            <div class="container-input hargaProduk">
                <label class="judulInput POPPINS" for="hargaProduk">Harga Produk</label>
                <input type="text" required autocomplete class="inputUser ROBOTO" id="hargaProduk" v-model.trim="hargaProduk" @input="handleFormatHarga" />
            </div>

            <div class="container-input deskripsiProduk">
                <label class="judulInput POPPINS" for="deskripsiProduk">Deskripsi Produk</label>
                <textarea class="inputUser ROBOTO" required autocomplete id="deskripsiProduk" v-model="deskripsiProduk" @input="handleDeskripsiProduk" />
            </div>
            
            <div class="container-input diskonProduk">
                <label class="judulInput POPPINS" for="diskonProduk">Diskon Produk</label>
                <input type="number" required autocomplete class="inputUser ROBOTO" id="diskonProduk" v-model="diskonProduk" @input="handleDiskonProduk" :max="100" />
            </div>

            <div class="container-input totalHarga" >
                <label class="judulInput POPPINS" for="totalHarga">Total Harga </label>
                <input type="text" class="inputUser ROBOTO" required autocomplete id="totalHarga" readonly v-model="totalHarga" />
            </div>
            
            <div class="stokAndUkuran">
                <div class="container-input ukuranProduk">
                    <label class="judulInput POPPINS" for="ukuranProduk">Ukuran Produk</label>
                    <input type="text" class="inputUser ROBOTO" id="ukuranProduk" v-model="ukuranProduk" @input="handleUkuranProduk" required autocomplete />
                </div>

                <div class="container-input stokProduk">
                    <label class="judulInput POPPINS" for="stokProduk">Stok Produk</label>
                    <input type="number" class="inputUser ROBOTO" id="stokProduk" v-model="stokProduk" required autocomplete @input="handleStokProduk" :max="100"  />
                </div>
            </div>
            
            <div class="container-gambar gambarThumbnail" >
                <label class="judulInput POPPINS" for="gambarThumbnail">Gambar Thumbnail : </label>
                <input type="file" name="gambarThumbnail" class="inputUser ROBOTO" id="gambarThumbnail" ref="gambarThumbnail" @change="manipulasiGambar"  required autocomplete />
            </div>

            
            <div v-for="(template, index) in templateGambar" :key="index" class="container-gambar " :class="template.name">
                <label class="judulInput POPPINS" :for="template.name">{{template.text}} </label>
                <input type="file" :name="template.name" class="inputUser ROBOTO" :id="template.name" :ref="template.name" required autocomplete @change="manipulasiGambar" />
            </div>


            <button type="submit" class="tombolInsert HEEBO"  >Tambah Data</button> 
        </form>    
    </div>
</template>


<script>
    import "./index.css"
    import { ref } from "vue"

    export default {
        name: "InsertProduk",
        data() {
            return {
                namaProduk: "",
                hargaProduk:   "",
                deskripsiProduk: "",
                diskonProduk: 0,
                stokProduk: 0,
                ukuranProduk: "",
                totalHarga: 0
            }
        },
        created() {
            const templateGambar = [
                {
                    name: "gambarSatu",
                    text: "gambar ke-1 : "
                },
                {
                    name: "gambarDua",
                    text: "gambar ke-2 : "
                }
            ]

            this.templateGambar = templateGambar
        },
        setup() {
            const allData = ref({})
            function setAttribut(element, properti, value) {
                element[properti] = value
            }
            return {allData, setAttribut}
        },  
        methods: {
            cekTrue() {
                for(let res in this.allData) {
                    if(!this.allData[res]) {
                        return false
                    }
                    return true
                }
            },
            handleNamaProduk() {
                const {namaProduk} = this
                if(namaProduk.length > 200) {
                    this.namaProduk = namaProduk.substr(0, namaProduk.length - 1)
                    this.setAttribut(this.allData, ["namaProduk"], false)
                } else {
                    this.setAttribut(this.allData, ["namaProduk"], namaProduk)
                }
            },
            handleFormatHarga() {
                const {hargaProduk} = this
                const integerHarga = parseInt(hargaProduk)
                
                // jika integer harga === NaN maka kosong
                if (isNaN(integerHarga)) {
                    this.hargaProduk = ""
                    this.setAttribut(this.allData, ["hargaProduk"], false)
                } else  if(isNaN(parseInt(hargaProduk.substr(-1)))) {
                    // jika user menginputkan string
                    this.hargaProduk = hargaProduk.substr(0, hargaProduk.length - 1)
                    this.setAttribut(this.allData, ["hargaProduk"], false)
                } else {
                    const filterHarga = parseInt(hargaProduk.replace(/[.]/g, ""))
                    const formatFilterHarga = filterHarga.toLocaleString("ID-id")
                    this.hargaProduk = formatFilterHarga
                    this.handleTotalHarga()
                    this.setAttribut(this.allData, ["hargaProduk"], filterHarga)
                }
                
            },
            handleDeskripsiProduk() {
                const {deskripsiProduk} = this
                if(deskripsiProduk.length > 1000) {
                    this.deskripsiProduk = deskripsiProduk
                    this.setAttribut(this.allData, ["deskripsiProduk"], false)
                } else {
                    this.setAttribut(this.allData, ["deskripsiProduk"], deskripsiProduk)
                }
            },
            handleDiskonProduk() {
                const {diskonProduk} = this
                if(diskonProduk > 100) {
                    this.diskonProduk = parseInt(this.diskonProduk.toString().substr(0, 2))
                    this.setAttribut(this.allData, "diskonProduk", false)
                } else if(diskonProduk < 0){
                    this.diskonProduk = parseInt(diskonProduk.toString(0, 1))
                    this.setAttribut(this.allData, "diskonProduk", false)
                } else {
                    this.setAttribut(this.allData, "diskonProduk", diskonProduk)
                    this.handleTotalHarga()
                }

            },
            handleTotalHarga() {
                
                if(!this.hargaProduk) {
                    this.totalHarga = 0
                    this.setAttribut(this.allData, ["totalHarga"], false)
                } else if(!this.allData.diskonProduk) { 
                    this.totalHarga = this.hargaProduk
                    this.setAttribut(this.allData, ["totalHarga"], false)
                } else {
                    let filterDiskon = this.allData.hargaProduk * this.allData.diskonProduk / 100
                    filterDiskon = this.allData.hargaProduk - filterDiskon
                    this.totalHarga = filterDiskon.toLocaleString("ID-id")
                    this.setAttribut(this.allData, ["totalHarga"], this.totalHarga)
                }
            },
            handleUkuranProduk() {
                if(!this.ukuranProduk) {
                    this.setAttribut(this.allData, ["ukuranProduk"], false)
                } else {
                    this.setAttribut(this.allData, ["ukuranProduk"], this.ukuranProduk)
                }
            },
            handleStokProduk() {
                this.setAttribut(this.allData, "stokProduk", this.stokProduk)
            },  
            insertData(e) {
                e.preventDefault()
                const splitNamaProduk = this.namaProduk.split(" ")
                const filterNamaProduk = splitNamaProduk.map(value => value.substring(0, 2).toUpperCase())

                const kodeProduk = filterNamaProduk.join("") + this.ukuranProduk.split(" ").join("")
                console.log(kodeProduk)
                const cek = this.cekTrue()
                if(cek) {
                    console.log("Insert Data Berhasil")
                } else {
                    console.log("gagal")
                }
            },
            manipulasiGambar() {
                console.log(new FormData)
                console.log(this.$refs.formData)
            }
        }
    }
</script>