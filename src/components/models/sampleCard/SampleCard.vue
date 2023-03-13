<template>
    <div id="sampleCard">
        <p class="judulSampleCard ROBOTO">{{judulSample}}</p>
        <div class="samplesCard " v-if="products.length > 0">
            <div class="containerCard" 
                v-for="product in products" :key="product.id" 
                @click="(e) => handleCard(e, product)"
            >
                <div class="card" >
                    <img 
                        :src="product.gambarProduk.thumbnail" 
                        class="gambar" 
                        alt="Rinso Cair" 
                    />

                    <div class="centerCard">
                        <p class="namaCard HEEBO">
                             {{product.namaProduk}} 
                        </p>
                        <p class="deskripsiCard HIND"> 
                            {{product.deskripsiProduk}} 
                        </p>
                    </div>

                    <div class="footerCard">
                        <div class="hargaCard">
                            <p 
                                class="hargaSebelumDiskon POPPINS" 
                                v-if="(product.diskonProduk > 0)" 
                            >
                                Rp{{( product.hargaProduk.toLocaleString("ID-id"))}} 
                            </p>

                            <p 
                                class="harga POPPINS" 
                                :class="{hargaSetelahDiskon: product.diskonProduk > 0}"
                            >
                                Rp{{product.subtotalProduk.toLocaleString("ID-id")}}
                            </p>
                            
                        </div>
                        <TombolTambah :data="product"/>
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
    import { instance } from "../../../../config/logic.js"
    import TombolTambah from "../tombolTambah/TombolTambah.vue"

    export default {
        name: "SampleCard",
        data() {
            return {
                products: []
            }
        },
        async created() {
            const result = await instance().get("/produk")
            this.products = result.data.data.length > 10 ? result.data.data.filter((item, index) => index < 10) : result.data.data.slice()
            
        },
        components: {
            TombolTambah
        },
        methods: {
            directKategori() {
                console.log("redirect")
            },
            handleCard(e, result) {
                if(e.target.className === "tombolTambah") {
                    return false
                }
                if(this.$route.path === "/detailProduk") {
                    this.$router.push("/Shooping")        
                }
                setTimeout(() => {
                    this.$router.push({
                    path: "/detailProduk",
                    query: {state: JSON.stringify(result)}
                })
                }, 100);
            },
        },
        props: {
            judulSample: String
        }
    }
</script>