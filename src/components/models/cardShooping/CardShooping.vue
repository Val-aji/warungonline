<template>
    <div class="containerKosong" v-if="data.length <= 0">
        <p class="notData POPPINS" v-if="!data || data.length <= 0"> Produk tidak ditemukan! </p>
    </div>
    <p v-if="data.length > 0" class="judulCard ROBOTO"> Produk Lainnya </p>
    
    <div v-if="data || data.length > 0" id="CardsShooping">
        <div class="card" 
            v-for="product in data" 
            :key="product.id" 
            value="tes" 
            @click="(e) => cardShooping(e, product)"  
        >
                
            <img 
                :src="product.gambarProduk.thumbnail" 
                class="gambar" 
                :alt="product.namaProduk"
            />

            <div 
                class="centerCard">
                    <p class="namaCard HIND"> 
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
                
                <TombolTambah :data="product" />
            </div>
        </div>
    </div>
</template>

<script>
    
    import "./index.css";
    import TombolTambah from "../tombolTambah/TombolTambah.vue";

    export default {
        name: "CardShooping",
        data() {
            return {
                cardHover: false,
            }
        },
        props: {
            data: Object,
            kategori: Object
        },
        components: {
            TombolTambah
        },
        beforeMount() {
            console.log(this.data)
        },
        methods: {
            cardShooping(e, result) {
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
    }
</script>