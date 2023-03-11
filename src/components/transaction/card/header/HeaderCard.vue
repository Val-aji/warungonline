<template>
     <div class="header">

        <div class="containerTransaksi">
            <div class="headerTr">
                <p class="POPPINS tanggal">{{ data.tanggalPesanan }}</p>
                <p class="POPPINS kodePesanan">{{ data.kodePesanan }}</p>
            </div>
            <div class="headerTr">
                <p class="POPPINS namaLengkap">{{ data.namaLengkap }}</p>
                <p class="POPPINS nomorWhatsapp">{{ data.nomorWhatsapp }}</p>
            </div>
            <div class="POPPINS alamat">
                {{ data.alamat.toLowerCase() }}
            </div>
        </div>
        
                    
    </div>
</template>

<script>
    // import { sampelProduk } from "@/data";
    import "./index.css"
    export default {
        name: "HeaderCard",
        data() {
            return {
                
            }
        },
        props: {
            data: Object
        }
        
        
    }
</script>