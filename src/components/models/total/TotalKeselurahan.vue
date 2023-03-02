<template>
    <div v-if="data" class="totalKeseluruhan">
        <div class="container subtotalJumlah">
            <p class="judul HIND">Subtotal Jumlah</p>
            <span class="POPPINS"> {{data.jumlahProduk}} </span>
        </div>
        
        <div class="container subtotalProduk">
            <p class="judul HIND">Subtotal Produk</p>
            <span class="POPPINS"> Rp{{data.subtotal.toLocaleString()}} </span>
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
                totalKeselurahan: null,
                ongkir: 0
            }
        },
        props: {
            data: Object
        },
        beforeMount() {
            try {
                if(!this.data.subtotal || !this.data.jumlahProduk) {
                    this.$router.push("/Cart")    
                } else {
                    const total = this.ongkir + this.data.subtotal
                    this.totalKeselurahan = total     
                }
                
            } catch (error) {
                this.$router.push("/Cart")
            }
            
        }
    };


</script>
