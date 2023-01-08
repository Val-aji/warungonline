<template>
    <div id="CONTAINER-COMPONENT">
        <div class="containerSearch">
            <h3 id="judul" class="JUDUL">Detail Produk</h3>
            <SearchWarung :tombolFilter="false" :tombolClose="true" />
        </div>
        <div id="DetailProduk">
            
            <ComponentDetail :data="sampelProduk"/>
            <ComponentFooter :data="sampelProduk" />
            <CardShooping :data="products" />
        </div>
    </div>

</template>


<script>
    import "./index.css";
    import {sampelProduk} from "../../data.js";
    import ComponentDetail from "./detail/ComponentDetail.vue";
    import ComponentFooter from "./footer/ComponentFooter.vue";
    import CardShooping from "../models/cardShooping/CardShooping.vue";
    import {products} from "../../data.js"
    import SearchWarung from "../models/search/SearchWarung.vue";
    export default {
        name: "DetailProduk",
        data() {
            return {
                sampelProduk,
                products
            }
        },
        components: {
            ComponentDetail,
            ComponentFooter,
            CardShooping,
            SearchWarung
        },
        mounted() {
            console.log(sampelProduk)
        }

    }
</script>


