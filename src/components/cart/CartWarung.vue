<template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 id="judul" class="JUDUL">Keranjang Belanjamu</h3>
            <div class="secondContainer">
                <SearchWarung textPlaceHolder="cari list belanjamu disini ..." />
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
            
            <ComponentFooter :data="sampelProduk" :cartWarung="true" @handlePesan="handlePesan" :subtotal="subtotal" />
        </div>
        <div class="COMPONENT-BODY pt-17 containerCart">
            <CardList @setData="setData" @setSubtotal="setSubtotal"  />            
        </div>

        <div class="COMPONENT-BODY-DESKTOP">
            <CardList @setData="setData" @setSubtotal="setSubtotal"  />            
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
    import KategoriWarung from "../home/kategori/KategoriHome.vue";
    import IklanWarung from "../home/iklan/IklanHome.vue";
    import DarkMode from "../models/darkMode/DarkMode.vue"
    import {cekLogin} from "../../../config/logic.js"
    import {ref} from "vue"

    export default {
        name: "CartWarung",
        data() {
            return {
                sampelProduk
            }
        },
        setup() {
            const data = ref(null)
            const subtotal = ref(0)
            const setSubtotal = () => {
                if(!data.value) {
                    return false
                } else {
                    let total = 0
                    data.value.map(i => {
                        total += i.subtotalProduk
                    })
                    subtotal.value = total
                }
            }
            const setData = (result) => {
                data.value = result
            }
            
            return {data, setData, subtotal, setSubtotal}
        }, 
        components: {
            NavigasiBar,
            SearchWarung,
            CardList,
            ComponentFooter,
            DarkMode,
            IklanWarung,
            KategoriWarung
        },
        beforeMount() {
            cekLogin(this.$router, this.$router.path)
        },
        methods: {
            handlePesan() {
                const {data} = this
                if(!data || data.length <= 0) {
                    alert("harus memilih produk terlebih dahulu")
                    return false
                }
                this.$router.push({
                    path: "/Checkout",
                    query: {state: JSON.stringify({
                        data: this.data,
                        subtotal: this.subtotal,
                        jumlahProduk: this.data.length
                    })},
                    
                })
            }
        }
    }




</script>