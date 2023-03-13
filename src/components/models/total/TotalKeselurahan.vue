<template>
    <div v-if="jumlahProduk || subtotal" class="totalKeseluruhan">
        <div class="container kodePesanan">
            <p class="judul HIND">Kode Pesanan</p>
            <span class="ROBOTO kodePesanan"> {{ kodePesanan }}</span>
        </div>
        <div class="container subtotalJumlah">
            <p class="judul HIND">Subtotal Jumlah</p>
            <span class="POPPINS"> {{jumlahProduk}} </span>
        </div>
        
        <div class="container subtotalProduk">
            <p class="judul HIND">Subtotal Produk</p>
            <span class="POPPINS"> Rp{{subtotal.toLocaleString("ID-id")}} </span>
        </div>
        
        <div class="container ongkir">
            <p class="judul HIND">Biaya Pengiriman</p>
            <span class="POPPINS"> Rp0 </span>
        </div>
        
        <div class="container subtotal">
            <p class="judul ROBOTO">Subtotal</p>
            <span v-if="totalKeselurahan" class="POPPINS"> Rp{{totalKeselurahan.toLocaleString()}} </span>
        </div>
    </div>
</template>

<script>

    import "./index.css"

    export default {
        name: "TotalKeseluruhan",
        data() {
            return {
                totalKeselurahan: 0,
                ongkir: 0,

            }
        },
        props: {
            jumlahProduk: Number,
            subtotal: Number,
            kodePesanan: String
        },
        beforeMount() {
            try { 
                const total = this.ongkir + this.subtotal
                this.totalKeselurahan = total     
                // console.log(total)
            } catch (error) {
                this.$router.push("/Cart")
            }
            
        }
    };


</script>
