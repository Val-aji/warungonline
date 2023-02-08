 <template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Shooping</h3>
            <div class="secondContainer">
                <SearchWarung :tombolFilter="tombolFilter" />
                <DarkMode />    
            </div>
            <div class="headerDesktop">
                <div class="header">
                    <IklanWarung />
                    <div class="footerHeader">
                        <KategoriHome />
                        <div class="bottomFooter">
                            <SearchWarung />
                            <DarkMode />
                        </div>  
                    </div>
                </div>
            </div>
            
        </div>
        <div class="COMPONENT-BODY">
            <CardShooping :data="produk" />
        </div>

        <div class="COMPONENT-BODY-DESKTOP">
            <CardShooping :data="produk" />
            
        </div>

    </div>
    
</template>



<script>
    import NavigasiBar from '../models/navigasi/NavigasiBar.vue';
    import SearchWarung from "../models/search/SearchWarung.vue"
    import {products} from "../../data.js"
    import CardShooping from '../models/cardShooping/CardShooping.vue';
    import DarkMode from "../models/darkMode/DarkMode.vue"
    import KategoriHome from "../home/kategori/KategoriHome.vue"
    import IklanWarung from "../home/iklan/IklanHome.vue"

    export default {
        name: "ShoopipngWarung", 
        data() {
            return {
                tombolFilter: true
            }
        },
        components: {
            NavigasiBar,
            SearchWarung,
            KategoriHome,
            IklanWarung,
            CardShooping,
            DarkMode
        },
        beforeMount() {
            this.produk = products
        }
}
</script>