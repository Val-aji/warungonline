<template>
    <div id="sampleCard">
        <p class="judulSampleCard ROBOTO">{{judulSample}}</p>
        <div class="samplesCard ">
            <div class="containerCard" v-for="product in products" :key="product.id">
                <div class="card" >
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
                array: [1,2,3,4,5,6],
                gambar: 'https://picsum.photos/id/1005/600/200'
            }
        },
        methods: {
            directKategori() {
                console.log("redirect")
            }
        },
        beforeCreate() {
            this.products = products.slice(0, 10)
        },
        props: {
            judulSample: String
        }
    }
</script>