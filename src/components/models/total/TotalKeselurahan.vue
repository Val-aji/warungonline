<template>
    <div class="totalKeseluruhan">
        <div class="container subtotalJumlah">
            <p class="judul HIND">Subtotal Jumlah</p>
            <span class="POPPINS"> 3 </span>
        </div>
        
        <div class="container subtotalProduk">
            <p class="judul HIND">Subtotal Produk</p>
            <span class="POPPINS"> Rp10.000 </span>
        </div>
        
        <div class="container ongkir">
            <p class="judul HIND">Biaya Pengiriman</p>
            <span class="POPPINS"> Rp0 </span>
        </div>
        
        <div class="container subtotal">
            <p class="judul ROBOTO">Subtotal</p>
            <span class="POPPINS"> Rp199.999 </span>
        </div>
    </div>
</template>

<script>

    import "./index.css"

    export default {
        name: "TotalKeseluruhan",
        data() {
            return {

            }
        },
    };


</script>
