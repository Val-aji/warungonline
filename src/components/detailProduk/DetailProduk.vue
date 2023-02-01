<template>
    <div id="CONTAINER-COMPONENT">
        <div class="containerSearch">
            <div class="container">
                <h3 id="judul" class="JUDUL">Detail Produk</h3>
                <button v-html="CLOSE"></button>
            </div>
            
            <div class="secondContainer">
                <SearchWarung :tombolFilter="false" />
                <DarkMode />
            </div>
            
        </div>
        <div id="DetailProduk">
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
            DarkMode
        },
        mounted() {
            
        }

    }
</script>


