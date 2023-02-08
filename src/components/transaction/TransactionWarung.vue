<template>

    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Transaksi</h3>    
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
        <div class="COMPONENT-BODY ">
            <CardTransaksi />
            <TotalKeselurahan />

        </div>
        <div class="COMPONENT-BODY-DESKTOP">
            <CardTransaksi />
            <TotalKeselurahan />
        </div>
    </div>

</template>

<script>
    import NavigasiBar from '../models/navigasi/NavigasiBar.vue';
    import "./index.css"
    import CardTransaksi from './card/CardTransaksi.vue';
    import TotalKeselurahan from '../models/total/TotalKeselurahan.vue';
    import KategoriWarung from "../home/kategori/KategoriHome.vue";
    import IklanWarung from "../home/iklan/IklanHome.vue";
    import DarkMode from "../models/darkMode/DarkMode.vue"
    import SearchWarung from "../models/search/SearchWarung.vue"


    export default {
        name: "TransactionWarung",
        components: {
            NavigasiBar,
            CardTransaksi,
            TotalKeselurahan,
            KategoriWarung,
            DarkMode,
            IklanWarung,
            SearchWarung
        }
    }



</script>