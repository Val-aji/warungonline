<template>
    <div class="cardTransaksi">
        <div class="card">
           
            <HeaderCard :data="data"/>            
           
            <div class="produk">
                <img 
                    :src="sampelProduk.gambarProduk.thumbnail" 
                    class="gambarProduk" 
                    alt="gambar Produk"
                >
                <div class="detail">
                    <p class="namaProduk"> 
                            {{ sampelProduk.namaProduk   }}
                    </p>
                    <div class="harga">
                        <p 
                            class="hargaProduk POPPINS" 
                            :class="{'lineThrough': sampelProduk.diskonProduk > 0}" 
                        >
                                Rp{{ sampelProduk.hargaProduk.toLocaleString("ID-id") }} 
                        </p>
                        
                        <p 
                            class="subtotalProduk POPPINS" 
                            v-if="sampelProduk.diskonProduk > 0"
                        >
                                Rp{{ sampelProduk.subtotalProduk.toLocaleString("ID-id") }}
                        </p>
                    </div>
                    
                </div>
                
            </div>
            
            <div class="footer">
                    <p class="POPPINS">
                            @Rp{{ sampelProduk.subtotalProduk.toLocaleString("ID-id") }}
                    </p>
                    <div class="kanan">
                        <p class="jumlah">2x</p>
                        <p class="POPPINS subtotal">Rp{{ sampelProduk.subtotalProduk.toLocaleString("ID-id") }}
                        </p>    
                    </div>
                    
            </div>
        
        </div>
                
    </div>
</template>

<script>
    import { ref } from "vue"
    import "./index.css"
    import { sampelProduk } from "../../../data"
    import HeaderCard from "./header/HeaderCard.vue"
   
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
            
        }
    }
</script>