 <template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Shooping</h3>
            <div class="secondContainer">
                <SearchWarung :tombolFilter="tombolFilter" @setFilterKategori="setFilterKategori"
                @setInputSearch="setInputSearch" />
                <DarkMode />    
            </div>
            <div class="headerDesktop">
                <div class="header">
                    <IklanWarung />
                    <div class="footerHeader">
                        <KategoriHome @setFilterKategori="setFilterKategori" />
                        <div class="bottomFooter">
                            <SearchWarung @setInputSearch="setInputSearch" />
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
                    const res = item.namaProduk.toLowerCase().match(resNew.toLowerCase())
                    
                    return res
                })
                
                this.produk = newProduk
                
                this.$router.replace("/Shooping")
            },
            filterKategori(resNew) {
                const newProduk = []
                
                let i = 0
                while(i < resNew.length) {
                    const item = resNew[i]
                    
                    this.products.slice().filter(itemProducts => {      
                        if(itemProducts.kategoriProduk.match(item)) {
                            
                            newProduk.push(itemProducts)
                        }
                    })
                    i += 1
                }
                
                this.produk = newProduk 
                this.$router.replace("/Shooping")
            },
        },
        async created(){
            try {
                const resultData = await  instance().get("/produk")
                const {kategori, inputUser} = this.$route.query

                this.products = resultData.data.data.slice().map(item => {
                    const obj = {...item}
                    obj.gambarProduk = item.
                    gambarProduk
                    return obj
                })
                if(kategori) {
                    this.filterKategori = [kategori]
                    this.produk = resultData.data.data.slice().filter(item => item.kategoriProduk === kategori)
                }
                if(inputUser) {
                    
                    const newResilt  = resultData.data.data.slice().filter(item => item.namaProduk.toLowerCase().match(inputUser.toLowerCase()))
                    this.produk = newResilt
                    
                }
                if(!kategori && !inputUser) {
                    this.produk = resultData.data.data.slice()
                }
                
                
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
        methods: {
            setFilterKategori(res) {
                
                if(typeof res == "string") {
                    this.filterKategori = [...res]
                } else {
                    this.filterKategori = [...res]
                }
                
            },
            setInputSearch(res) {
                this.inputSearch = res  
                                
            }
        }
}
</script>
