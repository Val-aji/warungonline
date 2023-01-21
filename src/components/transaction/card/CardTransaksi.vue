<template>
    <div class="cardTransaksi">
        <div class="card">
           
            <HeaderCard :data="data"/>            
           
            <div class="produk">
                <img :src="sampelProduk.gambar_produk.thumbnail" class="gambarProduk" alt="">
                <div class="detail">
                    <p class="namaProduk"> {{ sampelProduk.nama_produk   }}</p>
                    <div class="harga">
                        <p 
                            class="hargaProduk POPPINS" 
                            :class="{'lineThrough': sampelProduk.diskon_produk > 0}" 
                        >
                                Rp{{ sampelProduk.harga_produk.toLocaleString("ID-id") }} 
                        </p>
                        
                        <p 
                            class="subtotalProduk POPPINS" 
                            v-if="sampelProduk.diskon_produk > 0"
                        >
                                Rp{{ sampelProduk.totalHarga_produk.toLocaleString("ID-id") }}
                        </p>
                    </div>
                    
                </div>
                
            </div>
            
            <div class="footer">
                    <p class="POPPINS">@Rp{{ sampelProduk.totalHarga_produk.toLocaleString("ID-id") }}</p>
                    <div class="kanan">
                        <p class="jumlah">2x</p>
                        <p class="POPPINS subtotal">Rp{{ sampelProduk.totalHarga_produk.toLocaleString("ID-id") }}</p>    
                    </div>
                    
            </div>
        
            
            <TotalKeselurahan />
        
        </div>
        
        
    </div>
</template>

<script>
    import { ref } from "vue"
    import "./index.css"
    import { sampelProduk } from "../../../data"
    import HeaderCard from "./header/HeaderCard.vue"
    import TotalKeselurahan from "../../models/total/TotalKeselurahan.vue"
    export default {   
        name: "CardTransaksi",
        data() {
            return {
                sampelProduk
            }
        },
        setup() {
            const data = ref({
                tanggal_pesanan: "12 Januari 2023",
                nama_penerima: "Ahmad Syarifuddin Ala Bele",
                alamat_penerima: "Jl Jogjakarta, Kuningan, Jawa Tengah.",
                nomorHandphone_penerima: "08123456789",
                kode_pesanan: "1BSJBWJFV1231VSD",
                alamat_penjual: "Jl Malioboro kuningan, Jakarta Utara, DKI Jakarta Indonesia",
                nama_penjual: "Andi",
                nomorHandphone_penjual: "08123456789"
            }) 
            return {data}
        },
        components: {
            HeaderCard,
            TotalKeselurahan
        }
    }
</script>