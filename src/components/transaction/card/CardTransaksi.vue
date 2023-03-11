<template>
    <div v-for="(data, index) in listPesanan"  class="cardTransaksi" :key="index">
        <div class="card">
           
            <HeaderCard :data="data" />            
           
            <div class="produk">
                <img 
                    v-for="item in data.listProduk" :key="item.id"
                    :src="item.gambarProduk.thumbnail" 
                    class="gambarProduk" 
                    :alt="item.namaProduk"
                >
                <!-- <div class="detail">
                    <p class="namaProduk"> 
                            {{ d.namaProduk   }}
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
                 -->
            </div>
            
            <!-- <div class="footer">
                    <p class="POPPINS">
                            @Rp{{ sampelProduk.subtotalProduk.toLocaleString("ID-id") }}
                    </p>
                    <div class="kanan">
                        <p class="jumlah">2x</p>
                        <p class="POPPINS subtotal">Rp{{ sampelProduk.subtotalProduk.toLocaleString("ID-id") }}
                        </p>    
                    </div>
                    
            </div>
         -->
        </div>
                
    </div>
</template>

<script>
    import { ref } from "vue"
    import "./index.css"
    import { sampelProduk } from "../../../data"
    import HeaderCard from "./header/HeaderCard.vue"
    import { instance } from "../../../../config/logic.js"
    export default {   
        name: "CardTransaksi",
        data() {
            return {
                sampelProduk,
                listPesanan: null
            }
        },
        async created() {
            try {
                const email = localStorage.getItem("emailWarungonline")
                const formData = new FormData()
                formData.append("email", email)
                const result = await instance().post("/kodePesanan/getTransaksi", formData)
                this.listPesanan = result.data.data
                console.log(this.listPesanan)
            } catch (error) {
                console.log({error})
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