 <template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Shooping</h3>
            <SearchWarung :tombolFilter="tombolFilter" />
        </div>
        <div id="ShoopingWarung">
            
            <CardShooping :data="produk" />

        </div>
    </div>
    
</template>



<script>
    import NavigasiBar from '../models/navigasi/NavigasiBar.vue';
    import SearchWarung from "../models/search/SearchWarung.vue"
    import {products} from "../../data.js"
    import CardShooping from '../models/cardShooping/CardShooping.vue';

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
            CardShooping
        },
        beforeMount() {
            this.produk = products
        }
}
</script>