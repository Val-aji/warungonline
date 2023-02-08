<template>
        <div id="InsertProduk">
            <p class="error POPPINS" v-if="error">{{ textError }}</p>
            <form ref="formData" class="form" @submit.prevent="handleInsertData">
                <div 
                    class="container" 
                    v-for="(item,index) in cekAllTrue" 
                    :key="index"
                >
                        <label 
                            :for="item.name" 
                            class="judulInput ROBOTO"
                        >
                                {{ item.judul }}
                        </label>
                        
                        <textarea 
                            v-if="item.name === 'DeskripsiProduk'" 
                            :id="item.nama"
                            min="10"
                            max="3000"
                            class="HEEBO" 
                            cols="20"
                            :class="item.name"
                            rows="5"
                            v-model.trim="item.text"
                            @input="item.myFunction"
                            required autocomplete
                        >
                        </textarea>
                        
                        
                        <select  
                            v-else-if="item.name === 'KategoriProduk'"
                            :id="item.name"
                            class="HEEBO"
                            :class="item.name"
                            @change="item.myFunction"
                        >
                            <option 
                                v-for="(item1, index1) in item.data" 
                                :value="item1"
                                :key="index1"
                                :selected="index1 === 0"
                            >
                                    {{ item1 }}
                            </option>
                            
                        </select>
                        
                        <input
                            v-else-if="item.tipe === 'file'" 
                            :type="item.tipe" 
                            class="ROBOTO gambar " 
                            :class="item.name"
                            :id="item.name"
                            :name="item.judul"
                            required autocomplete
                            @change="item.myFunction"
                        />
                        
                        <input
                            v-else 
                            :type="item.tipe" 
                            class="ROBOTO" 
                            :class="item.name"
                            :id="item.name"
                            required autocomplete
                            v-model.trim="item.text"
                            @input="item.myFunction"
                            :readonly="item.name === 'SubtotalProduk'"
                        />
                        <p v-if="item.error"
                            class="pesanError POPPINS"
                        >
                            {{ item.pesanError }}
                        </p>
                        
                </div>
                
                <button type="submit ROBOTO">Tambah Produk</button>
            </form>
        </div>

    
</template>


<script>
    import "./index.css"    
    import { ref } from "vue"
    import axios from "axios"

export default {
    name: "FormInsert",
    data() {
        return {
            error: false,
            textError: "Register tidak valid!"
        }
    },
    setup() {
        const cekAllTrue = ref({})
        const setVariabel = (variabel, properti, value) => {
            if (!properti) {
                cekAllTrue.value[variabel] = value    
                
            } else {
                cekAllTrue.value[variabel][properti] = value
            }
        }
        return {
            cekAllTrue,
            setVariabel,
        }
    },
    beforeMount() {
        const items = ["Nama-Produk", "Kategori-Produk", "Harga-Produk", "Deskripsi-Produk", "Diskon-Produk", "Subtotal-Produk", "Gambar-Thumbnail", "Gambar-Satu", "Gambar-Dua"]
        
        for (const item of items) {
            let tipe = "text"
            const splitItem = item.split("-")
            let namaFunction = "handle" + splitItem.join("")
            
            if (item === "Stok-Produk" || item === "Diskon-Produk") {
                tipe = "number"
            } else if (splitItem[0] === "Gambar") {
                tipe = "file"   
                namaFunction = "handle"+splitItem[0]
            }
            
            const obj = {
                judul: splitItem.join(" "),
                name: splitItem.join(""),
                tipe,
                text: "",
                error: false,
                pesanError: "",
                myFunction: this[namaFunction],
            }
            if (item === "Kategori-Produk") {
                const listKategori = ["--- KATEGORI PRODUK ---","Susu Cair", "Snack", "Logo Biskuit", "Pelengkap Makanan", "Makanan Instant", "Pencuci Piring", "Perawatan Diri", "Snack"]
                obj["data"] = listKategori
                obj["error"] = true
            }
            this.setVariabel(item, false, obj)   
        }
        
    },
    methods: {
        handleNamaProduk() {
            //setup awal input
            const namaVar = "Nama-Produk"
            const namaProduk = this.cekAllTrue[namaVar]
            const {length} = namaProduk.text 
            const setLocal = (value = true, properti = "error") => {
                this.setVariabel(namaVar, properti, value)
            }
            if (length < 10) {   
                setLocal("Nama Produk Minimal 10 Karakter", "pesanError")
                setLocal()
            } else if (length > 80) {
                setLocal()
                setLocal("Nama Produk Maksimal 80 Karakter", "pesanError")
            } else {
                setLocal(false)
            }   
        },
        handleHargaProduk() {
            //setup awal
            const namaVar = "Harga-Produk"
            const hargaProduk = this.cekAllTrue[namaVar]
            const diskonProduk = this.cekAllTrue["Diskon-Produk"]
            const {text} = hargaProduk
            const setLocal = (value = true, properti = "error") => {
                this.setVariabel(namaVar, properti, value)
            }
            const setInput = (variabel, value) => {
                this.setVariabel(variabel, "text", value)
            }
            
            const angkaInput = text.match(/[\d+]/g)
            if (!angkaInput) {
                setLocal()
                setLocal("Hanya dapat memasukkan angka","pesanError")
                setLocal("", "text")
            } else {
                const formatAngkaInput = parseInt(angkaInput.join(""))
                const newInput = "Rp"+formatAngkaInput.toLocaleString("id-ID")
                setLocal(newInput, "text")
                setLocal(false)
                
                if (isNaN(diskonProduk.text)) {
                    setInput("Subtotal-Produk", "Rp0")    
                } else {
                    const aritmatika = formatAngkaInput - (formatAngkaInput * diskonProduk.text / 100)
                    const newInputSub = "Rp"+aritmatika.toLocaleString("id-ID")
                    
                    setInput("Subtotal-Produk", newInputSub)    
                }
            }
        },
        handleKategoriProduk(e) {
            const {value} = e.target
            const namaVar = "Kategori-Produk"
            const kategoriProduk = this.cekAllTrue[namaVar]
            const setLocal = (value=true, properti="error") => this.setVariabel(namaVar, properti, value)
            
            setLocal(value, "text")
            if(!kategoriProduk.text) {
                console.log("Gagal")
                setLocal("Kategori Produk tidak boleh kosong", "pesanError")
            } else {
                setLocal(false)
            }
        },
        handleDiskonProduk() {
            const namaVar = "Diskon-Produk"
            const diskonProduk = this.cekAllTrue[namaVar]
            const hargaProduk = this.cekAllTrue["Harga-Produk"].text
            const {text} = diskonProduk
            const setLocal = (value = true, properti = "error") => this.setVariabel(namaVar, properti, value)
            const setInput = (variabel, value) => this.setVariabel(variabel, "text", value)
            const setSubtotal = () => {
                const filterHarga = parseInt(hargaProduk.replace(/[Rp|.]/g, ""))
                if (isNaN(filterHarga)) {
                    setInput("Subtotal-Produk", "Rp0")    
                } else {
                    const aritmatika = filterHarga - (filterHarga * diskonProduk.text / 100)
                    const newInput = "Rp"+aritmatika.toLocaleString("id-ID")
                    
                    setInput("Subtotal-Produk", newInput)    
                }
            }
            
            if (text > 100) {
                setLocal()
                setLocal("Diskon maksimal 100", "pesanError")
                const filterDiskon = text.toString().substr(0, 2)
                setLocal(filterDiskon, "text")
                setSubtotal()
                setLocal(false)
            } else {
                setLocal(false)
                setSubtotal()
                
            }
        },
        handleDeskripsiProduk() {
            const namaVar = "Deskripsi-Produk"
            const deksirpsiProduk = this.cekAllTrue[namaVar]
            const {text} = deksirpsiProduk
            const {length} = text
            const setLocal = (value=true, properti="error") => this.setVariabel(namaVar, properti, value)
            
            if(length < 10) {
                setLocal()
                setLocal("Maksimal 10 karakter!", "pesanError")
            } else if(length > 300) {
                setLocal()
                setLocal("Maksimal 3000 Karakter!", "pesanError")
                setLocal(text.substr(0, length - 1 ) ,"text")
            } else {
                setLocal(false)
            }
            
        },
        handleSubtotalProduk() {
            console.log("hello")
        },
        handleGambar(e) {
            const {files, name} = e.target
            const file = files[0]
            const namaVar = name.split(" ").join("-")
            const setLocal = (value=true, properti="error") => this.setVariabel(namaVar, properti, value)
            
            // maks 3mb
            const ukuran = 3000000
            const allowExt = [".png", ".jpg", ".jpeg"]
            const extFile = file.name.substr(file.name.search(/\./)).toLowerCase()
            
            if(file.size > ukuran) {
                setLocal()
                setLocal("Gambar Maksimal 3MB", "pesanError")
            } else if(!allowExt.includes(extFile)) {
                setLocal()
                setLocal("Gambar tidak ditemukan!", "pesanError")
            } else {
                setLocal(false)
                setLocal(file, "text")
            }

            
        },
        handleInsertData(e) {
            e.preventDefault()
            const setLocal = (value) => {
                this.error = true
                this.textError = "Masukkan " + value + " dengan benar! " 
            }
            const {cekAllTrue} = this
            const formData = new FormData(this.$refs.formData)
            
            for (const key in cekAllTrue) {
                const item = cekAllTrue[key]
                if(item.error) {
                    setLocal(item.judul)
                    alert("Insert Data Gagal")
                    return false
                }
                formData.append(item.name, item.text)
            }
            axios.post("http://localhost:3000/produk", formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            }).then(res => {
                console.log(res)
                alert("Insert Data Berhasil")
            }).catch(err => {
                console.log(err)
                console.log(err.message)
                alert("Insert Gagal")
            })
            
            
        }
    },
}
</script>





