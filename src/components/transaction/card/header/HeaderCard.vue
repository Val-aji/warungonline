<template>
     <div class="header">

        <div class="kiri">
           <p class="POPPINS tanggal">{{data.tanggal_pesanan }}</p>
            <p class="POPPINS nama">{{ data.nama_penerima }}</p>
            <p class="POPPINS alamat">{{ data.alamat_penerima }}</p>
            <p class="POPPINS nomorHandphone">{{ data.nomorHandphone_penerima }}</p>
        </div>
                
        <div class="kanan">
            <p class="POPPINS kodePesanan">{{ data.kode_pesanan }}</p>
            <p class="POPPINS nama">{{ data.nama_penjual }}</p>
            <p class="POPPINS alamat">{{ data.alamat_penjual }}</p>
            <p class="POPPINS nomorHandphone">{{ data.nomorHandphone_penjual }}</p>
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