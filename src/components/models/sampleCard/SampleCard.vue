<template>
    <div id="sampleCard">
        <p class="judulSampleCard ROBOTO">{{judulSample}}</p>
        <div class="samplesCard ">
            <div class="containerCard" v-for="product in products" :key="product.id">
                <div class="card" >
                    <img :src="product.gambar_produk.thumbnail" class="gambar" alt="Rinso Cair" />

                    <div class="centerCard">
                        <p class="namaCard HEEBO"> {{product.nama_produk}} </p>
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
            <div class="lihatSemua ROBOTO">
                <p @click="directKategori">
                    Lihat Semua
                </p>
            </div>
            
        </div>
    </div>
    
</template>


<script>
    import "./sampleCard.css"
    import {products} from "../../../data.js"

    export default {
        name: "SampleCard",
        data() {
            return {
                products
            }
        },
        methods: {
            directKategori() {
                console.log("redirect")
            }
        },
        beforeMount() {
            this.products = products.slice(0, 10)
        },
        props: {
            judulSample: String
        }
    }
</script>