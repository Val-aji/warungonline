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
        <div class="COMPONENT-BODY pt-8 TRANSAKSI">
            <CardTransaksi />
            <TotalKeselurahan />

        </div>
        <div class="COMPONENT-BODY-DESKTOP TRANSAKSI">
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
    import { cekLogin } from '../../../config/logic.js';
    
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
        },
        created() {
            cekLogin(this.$router, this.$route.path)
        }
    }



</script>