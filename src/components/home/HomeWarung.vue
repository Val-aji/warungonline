<template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 id="judul" class="JUDUL">Warungonline</h3>
            <div class="secondContainer">
                <SearchWarung :tombolFilter="tombolFilter" />
                <DarkMode />
            </div>
            
        </div>
        <div id="HomeWarung">
            <IklanWarung />
            <KategoriWarung />
            <SampleCard judulSample="Produk Promo" />
            <SampleCard judulSample="Produk Terlaris" />
            
        </div>
    </div>
    
</template>

<script>
    import NavigasiBar from '../models/navigasi/NavigasiBar.vue';
    import SearchWarung from "../models/search/SearchWarung.vue";
    import "./index.css";
    import IklanWarung from "./iklan/IklanHome.vue";
    import KategoriWarung from "./kategori/KategoriHome.vue"
    import SampleCard from '../models/sampleCard/SampleCard.vue';
    import DarkMode from "../models/darkMode/DarkMode.vue"
    export default {
        name: "HomeWarung",
        data() {
            return {
                tombolFilter: false,
            }
        },
        components: {
            NavigasiBar,
            SearchWarung,
            IklanWarung ,
            KategoriWarung,
            SampleCard,
            DarkMode
        }

    }
</script>

<style>
    #testingLogo > svg {
        color: blue;
        background-color: green;
    }
</style>