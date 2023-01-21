<template>
    <p class="judulCard ROBOTO"> Produk Lainnya </p>
    <div id="CardsShooping">
        <div class="card" v-for="product in data" :key="product.id" value="tes" @click="()=> {cardShooping(product.kode_produk);}"  >
                <img :src="product.gambar_produk.thumbnail" class="gambar" alt="Rinso Cair" />

            <div class="centerCard">
                <p class="namaCard HIND"> {{product.nama_produk}} </p>
                <p class="deskripsiCard HIND"> {{product.deskripsi_produk}} </p>
            </div>

            <div class="footerCard">
                <div class="hargaCard">
                    <p class="hargaSebelumDiskon POPPINS" v-if="(product.diskon_produk > 0)" >Rp{{( product.harga_produk.toLocaleString("ID-id"))}} </p>
                    <p class="harga POPPINS" :class="{hargaSetelahDiskon: product.diskon_produk > 0}">Rp{{product.totalHarga_produk.toLocaleString("ID-id")}}</p>
                    
                </div>
                <button class="tombolPesan">
                    +
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import "./index.css";

    export default {
        name: "CardShooping",
        data() {
            return {
                cardHover: false
            }
        },
        props: {
            data: Object
        },
        methods: {
            cardShooping(kode_produk) {
                console.log(kode_produk)
            }
        },
        mounted() {
            // console.log(this.products)
        }
    }
</script>