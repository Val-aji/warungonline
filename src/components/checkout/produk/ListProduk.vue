<template>
    <div class="listProduk">
        <h3 class="judul POPPINS">3. List Produk</h3>
        <div class="cards">
            <div class="card" v-for="product in sampelListProduk" :key="product.id">
                <img :src="product.gambar_produk.thumbnail" :alt="product.nama_produk" />
                <div class="detail">
                    <p class="namaProduk HEEBO"> {{product.nama_produk}} </p>
                    
                    <div class="hargaProduk">
                        <p class="HIND HDTJ"> Harga </p>
                        <p class="titikDua"> : </p>
                        <span class="POPPINS"> Rp{{ product.harga_produk.toLocaleString("ID-id") }}</span>
                    </div>
                    
                    <div class="diskonProduk">
                        <p class="HIND HDTJ">Diskon </p>
                        <p class="titikDua"> : </p>
                        <span>{{product.diskon_produk}}%</span>
                    </div>
                    
                    
                    <div class="totalHarga">
                        <p class="HIND HDTJ">   </p>
                        <p class="titikDua">  </p>
                        <span class="POPPINS"> Rp{{ product.totalHarga_produk.toLocaleString("ID-id") }}</span>
                    </div>
                    
                    <div class="jumlah">
                        <p class="HIND HDTJ"> Jumlah </p>
                        <p class="titikDua"> : </p>
                        <span class="POPPINS"> 1 </span>
                    </div>
                    
                    <div class="subTotal">
                        <p class="ROBOTO">Subtotal</p>
                        <span class="POPPINS">Rp{{product.totalHarga_produk.toLocaleString("ID-id")}}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        
        
    </div>
</template>


<script>
    import "./index.css"
    import {sampelListProduk} from "../../../data"

    export default {
        name: "ListProduk",
        data() {
            return {
                sampelListProduk
            }
        }
    }


</script>


