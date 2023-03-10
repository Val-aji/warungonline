<template>
    <div id="CONTAINER-COMPONENT" class="DETAIL-PRODUK">
        <NavigasiBar />
        <div class="containerSearch">
            <div class="container">
                <h3 id="judul" class="JUDUL">Detail Produk</h3>
                <button v-html="CLOSE" @click="handleSilang"></button>
            </div>
            
            <div class="secondContainer">
                <SearchWarung :tombolFilter="false" />
                <DarkMode />
            </div>

            <div class="headerDesktop">
                
                <div class="header">
                    <IklanWarung />
                    <div class="footerHeader">
                        <KategoriWarung />
                        <div class="bottomFooter">
                            <SearchWarung />
                            <DarkMode />
                        </div>  
                    </div>
                </div>
            </div>
            <ComponentFooter @handlePesan="handlePesan"
            :cartWarung="false" 
            :data="getData()" />    
        </div>
        <div class="COMPONENT-BODY pt-17">
            <ComponentDetail :data="getData()"  />
            <CardShooping :data="products" />
            
        </div>
        <div class="COMPONENT-BODY-DESKTOP">
            <ComponentDetail :data="getData()" />
            <CardShooping :data="products" />
            
        </div>
        

    </div>

</template>


<script>

    import { CLOSE } from "../icons/config.js";
    import ComponentDetail from "./detail/ComponentDetail.vue";
    import ComponentFooter from "../models/footer/ComponentFooter.vue";
    import CardShooping from "../models/cardShooping/CardShooping.vue";
    import {products} from "../../data.js"
    import DarkMode from "../models/darkMode/DarkMode.vue";
    import SearchWarung from "../models/search/SearchWarung.vue";
    import "./index.css"

    import "./index.css";
    import IklanWarung from "../home/iklan/IklanHome.vue";
    import KategoriWarung from "../home/kategori/KategoriHome.vue"
    import NavigasiBar from "../models/navigasi/NavigasiBar.vue"

    export default {
        name: "DetailProduk",
        data() {
            return {
                data: null,
                CLOSE,
                products
            }
        },
        components: {
            ComponentDetail,
            ComponentFooter,
            CardShooping,
            SearchWarung,
            DarkMode,
            KategoriWarung,
            IklanWarung,
            NavigasiBar
        },
        beforeMount() {
            try {
                const {state} = this.$route.query
                this.$router.replace("/detailProduk")
                if(!state) {
                    this.$router.push("/Shooping")
                    return false
                }
                const data = JSON.parse(state)
                this.data = data
            } catch (error) {
                this.$router.push("/Shooping")
                console.log({error})
            }
                
        },
        methods: {
            getData() {
                return this.data
            },
            handleSilang() {
                this.$router.push("/Shooping")
            },
            async handlePesan() {
                const resData = {
                    ...this.data,
                    subtotalAwal: this.data.subtotalProduk
                }
                this.$router.push({
                    path: "/Checkout",
                    query: {state: JSON.stringify({
                        data: [resData],
                        subtotal: this.data.subtotalProduk,
                        jumlahProduk: 1
                    })}
                })
                
            }
        }

    }
</script>


