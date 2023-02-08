<template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <div class="container">
                <h3 id="judul" class="JUDUL">Detail Produk</h3>
                <button v-html="CLOSE"></button>
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
            
        </div>
        <div class="COMPONENT-BODY">
            <ComponentDetail :data="sampelProduk"/>
            <CardShooping :data="products" />
        </div>
        <div class="COMPONENT-BODY-DESKTOP">
            <ComponentDetail :data="sampelProduk"/>
            <CardShooping :data="products" />
        </div>
        <ComponentFooter :data="sampelProduk" />

    </div>

</template>


<script>

    import {sampelProduk} from "../../data.js";
    import { CLOSE } from "../icons/config";
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
                sampelProduk,
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
        mounted() {
            
        }

    }
</script>


