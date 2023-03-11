 <template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Shooping</h3>
            <div class="secondContainer">
                <SearchWarung :tombolFilter="tombolFilter" @setFilterKategori="setFilterKategori" />
                <DarkMode />    
            </div>
            <div class="headerDesktop">
                <div class="header">
                    <IklanWarung />
                    <div class="footerHeader">
                        <KategoriHome @setFilterKategori="setFilterKategori" />
                        <div class="bottomFooter">
                            <SearchWarung />
                            <DarkMode />
                        </div>  
                    </div>
                </div>
            </div>
            
        </div>
        <div class="COMPONENT-BODY pt-17">
            <CardShooping :data="produk" :kategori="filterKategori" />
        </div>

        <div class="COMPONENT-BODY-DESKTOP">
            <CardShooping :data="produk" :kategori="filterKategori" />
            
        </div>

    </div>
    
</template>



<script>
    import NavigasiBar from '../models/navigasi/NavigasiBar.vue';
    import SearchWarung from "../models/search/SearchWarung.vue"
    
    import CardShooping from '../models/cardShooping/CardShooping.vue';
    import DarkMode from "../models/darkMode/DarkMode.vue"
    import KategoriHome from "../home/kategori/KategoriHome.vue"
    import IklanWarung from "../home/iklan/IklanHome.vue"
    import {instance} from "../../../config/logic.js";
    export default {
        name: "ShoopipngWarung", 
        data() {
            return {
                tombolFilter: true,
                filterKategori: [],
                products: [],
                produk: [],
                inputSearch: ""
            }
        },
        watch: {
            inputSearch(resNew) {
               
                const newProduk = this.products.slice().filter(item => {
                    const res = item.namaProduk.match(resNew)
                    console.log({res})
                    return res
                })
                
                this.produk = newProduk
                this.$router.replace("/Shooping")
            },
            filterKategori(resNew) {
                const newProduk = []
                resNew.map(item => {
                    this.products.slice().filter(itemProducts => {      
                        if(itemProducts.kategoriProduk.match(item)) {
                            newProduk.push(itemProducts)
                        }
                    })
                })
                this.produk = newProduk 
                this.$router.replace("/Shooping")
                
            },
            products(resNew) {
                this.produk = resNew.slice().map(item => {
                    const obj = {...item}
                    obj.gambarProduk = JSON.parse(item.
                    gambarProduk)
                    return obj
                })

                // this.produk = resNew.slice()
            }
        },
        async created(){
            try {
                const resultData = await  instance().get("/produk")
                this.products = resultData.data.data
                
            } catch (error) {
                console.log(error)
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
            const {kategori, inputUser} = this.$route.query

            if(kategori) {
                console.log({kategori})
                this.filterKategori = [kategori]
            }
            if(inputUser) {
               
                this.inputSearch = inputUser
                
            }
            

        },
        methods: {
            setFilterKategori(res) {
                console.log("from shooping")
                if(typeof res == "string") {
                
                    this.filterKategori = [res]
                } else {
                    this.filterKategori = [res]
                }
                
            },
            setInputSearch(res) {
                console.log({res})
                this.inputSearch = res  
                
            }
        }
}
</script>
