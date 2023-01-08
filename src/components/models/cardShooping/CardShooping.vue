<template>
    <p class="judulCard ROBOTO"> Produk Lainnya </p>
    <div id="CardsShooping">
        <div class="card" v-for="product in products" :key="product.id" value="tes" @click="()=> {cardShooping(product.kode_produk);}"  >
                <img :src="product.gambar_produk[0]" class="gambar" alt="Rinso Cair" />

            <div class="centerCard">
                <p class="namaCard"> {{product.nama_produk}} </p>
                <p class="deskripsiCard HIND"> {{product.deskripsi_produk}} </p>
            </div>

            <div class="footerCard">
                <div class="hargaCard">
                    <p class="hargaSebelumDiskon" v-if="(product.diskon > 0)" >Rp{{( product.harga_produk)}} </p>
                    <p class="harga" :class="{hargaSetelahDiskon: product.diskon > 0}">Rp10000</p>
                    
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
        beforeCreate() {
            this.products = this.data
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