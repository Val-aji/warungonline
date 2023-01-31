<template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 id="judul" class="JUDUL">Keranjang Belanjamu</h3>
            <div class="secondContainer">
                <SearchWarung textPlaceHolder="cari list belanjamu disini ..." />
                <DarkMode />
            </div>
            
            <ComponentFooter :data="sampelProduk" :cartWarung="true" />
        </div>
        <div id="CartWarung">
            <CardList />            
        </div>
    </div>
</template>


<script>
    import { sampelProduk } from '../../data.js';
    import NavigasiBar from '../models/navigasi/NavigasiBar.vue';
    import SearchWarung from '../models/search/SearchWarung.vue';
    import CardList from './service/CardList.vue';
    import ComponentFooter from "../models/footer/ComponentFooter.vue"
    import "./index.css"
    import DarkMode from "../models/darkMode/DarkMode.vue"

    export default {
        name: "CartWarung",
        data() {
            return {
                sampelProduk
            }
        },
        components: {
            NavigasiBar,
            SearchWarung,
            CardList,
            ComponentFooter,
            DarkMode
        }
    }




</script>