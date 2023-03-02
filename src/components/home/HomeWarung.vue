<template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Warungonline</h3>
            <div class="secondContainer">
                <SearchWarung :tombolFilter="tombolFilter" />
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
        <div class="COMPONENT-BODY pt-17">
            <IklanWarung />
            <KategoriWarung />
            <SampleCard judulSample="Produk Promo" />
            <SampleCard judulSample="Produk Terlaris" />
            
        </div>

        <div class="COMPONENT-BODY-DESKTOP">
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

