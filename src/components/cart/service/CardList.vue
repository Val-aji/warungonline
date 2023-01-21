<template>
    <div class="cardList">
        <div class="cards">
            <div v-for="product in products" class="card" :key="product.id" @click="clickProduk" >
                <div class="gambarAndCounter" >
                    <img :src="product.gambar_produk.thumbnail" :alt="product.nama_produk" />
                    <div class="counter">
                        <button class="aritmatika"> - </button>
                        <p class="jumlah">1</p>
                        <button class="aritmatika"> + </button>
                    </div>
                </div>
                
                <div class="detail">
                    <p class="namaProduk"> {{product.nama_produk}} </p>
                    <div class="hargaProduk">
                        <p 
                            v-if="product.diskon_produk > 0" 
                            class="hargaSebelumDiskon POPPINS"
                        > 
                                Rp{{product.harga_produk.toLocaleString("id-ID")}} 
                        </p>
                        
                        <p 
                            class="subtotal POPPINS"
                            :class="{'hargaDiskon' : product.diskon_produk > 0}"
                        > 
                               Rp{{product.totalHarga_produk.toLocaleString("id-ID")}} 
                        </p>
                    </div>
                    
                    <textarea type="text" class="deskripsiProduk HEEBO" disabled :value="product.deskripsi_produk" />
                </div>

                <div class="ceklis">
                    <input type="checkbox" class="check" :value="product.kode_produk" @change="handlePilihan" />
                    <button 
                        class="HIND"
                        @click="() => console.log(product.kode_produk)"
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


    export default {
        name: "CardList",
        data() {
            return {
                products
            }
        },
        mounted() {
            console.log(products[9].nama_produk.length)
        },
        methods: {

            handlePilihan(e) {
                const {checked, value} = e.target
                if(checked) {
                    console.log(value)
                }
            },
            clickProduk() {
            }
        },

    }
</script>