<template>
    <div class="cardList">
        <div class="cards">
            <div 
                v-for="(product, index) in produk" 
                class="card" 
                :key="index" 
                @click="clickProduk" 
            >
                <div class="gambarAndCounter" >
                    <img 
                        :src="product.gambarProduk.thumbnail" 
                        :alt="product.namaProduk" 
                    />
                    <div class="counter">
                        <button 
                            class="aritmatika" 
                            @click="() => handleKurang(index)"
                        > 
                            - 
                        </button>
                        <p 
                            class="jumlah"
                        >
                            {{product.jumlah}}
                        </p>
                        <button 
                            @click="() => handleTambah(index)" 
                            class="aritmatika"
                        > 
                            + 
                        </button>
                    </div>
                </div>
                
                <div class="detail">
                    <p 
                        class="namaProduk"
                    > 
                        {{product.namaProduk}} 
                    </p>

                    <div class="hargaProduk">
                        <p 
                            v-if="product.diskonProduk > 0" 
                            class="hargaSebelumDiskon POPPINS"
                        > 
                                Rp{{product.hargaProduk.toLocaleString("id-ID")}} 
                        </p>
                        
                        <p 
                            class="subtotal POPPINS"
                            :class="{'hargaDiskon' : product.diskonProduk > 0}"
                        > 
                               Rp{{product.subtotalProduk.toLocaleString("id-ID")}} 
                        </p>
                    </div>
                    
                    <textarea 
                        type="text" 
                        class="deskripsiProduk HEEBO" 
                        disabled 
                        :value="product.deskripsiProduk" 
                    />
                </div>

                <div class="ceklis">
                    <input 
                        type="checkbox" 
                        class="check" 
                        :checked="product.status"
                        @change="() => handlePilihan(index)" />
                    <button 
                        class="HIND"
                        @click="() => console.log(product.kodeProduk)"
                    > 
                        Tambah
                    </button>  
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    import "./index.css"
    import {products} from "../../../data.js"
    import { instance } from "../../../../config/logic.js"
    // import {useRouter} from "vue-router";

    export default {
        name: "CardList",
        data() {
            return {
                products,
                data: [],
                produk: []
            }
        },
        watch: {
            data(newData)  {    
                this.produk = newData
            }
        },  
        async created() {
            try {
                const email = localStorage.getItem("emailWarungonline")
                const formData = new FormData()
                formData.append("email", email)

                const result = await instance().post("/clientProduk/keranjang", formData)
                const cek = typeof result.data.data.keranjang == "string"
                const keranjang = cek ? JSON.parse(result.data.data.keranjang) : result.data.data.keranjang
                

                // get all data
                const allData = await instance().get("/produk")

                const newData = []
                keranjang.map(itemKeranjang => {
                    allData.data.data.slice().map(itemData => {
                        if(itemData.kodeProduk === itemKeranjang.kodeProduk) {
                           const obj = {
                            ...itemData,
                            jumlah: itemKeranjang.jumlah,
                            tanggal: itemKeranjang.tanggal,
                            subtotalAwal: itemData.subtotalProduk,
                            hargaAwal: itemData.hargaProduk,
                            status: false
                           } 
                           const {jumlah, gambarProduk} = obj
                           if(jumlah > 1) {
                                obj.hargaProduk *= obj.jumlah
                                obj.subtotalProduk *= obj.jumlah
                           }
                           
                           const newGambar = typeof gambarProduk == "string" ? JSON.parse(gambarProduk) : gambarProduk
                           
                           obj.gambarProduk = newGambar

                           newData.push(obj)
                        } else {
                            return
                        }
                    })    
                })
                this.data = newData
            } catch (error) {
                console.log({error})
            }
        },
        methods: {
            setHarga(index) {
                const {hargaAwal, subtotalAwal, jumlah} = this.produk[0]
                
                const setLocal = (properti, value) => {
                    this.produk[index][properti] = value
                }

                const valueHarga = hargaAwal * jumlah
                setLocal("hargaProduk", valueHarga)

                const valueSubtotal = subtotalAwal * jumlah
                setLocal("subtotalProduk", valueSubtotal)

            },
            handleTambah(index) {
                const {jumlah} = this.produk[index]
                if(jumlah >= 99) {
                    alert("maksimal pembelian 1 produk yaitu 100")
                    this.produk[index].jumlah = 99    
                } else {
                    this.produk[index].jumlah += 1
                    this.setHarga(index)
                    this.$emit("setSubtotal")
                }
            },
            handleKurang(index) {
                const {jumlah} = this.produk[index]
                if(jumlah <= 1) {
                    alert("minimal pembelian 1 produk yaitu 100")
                    this.produk[index].jumlah = 1    
                } else {
                    this.produk[index].jumlah -= 1
                    this.setHarga(index)
                    this.$emit("setSubtotal")
                }
            },
            handlePilihan(index) {
                console.log("tes")
                const {status} = this.produk[index]
                this.produk[index].status = !status

                const result = this.produk.slice().filter(item => item.status)
                this.$emit("setData", result)
                this.$emit("setSubtotal")
                
            }
            
        },

    }
</script>
