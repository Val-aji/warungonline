<template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Checkout</h3>
            
            <div class="secondContainer">
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

        <div class="COMPONENT-BODY pt-8">
            <AlamatCheckout />
            <ComponentPengiriman />
            <ListProduk :products="data" />
            <TotalKeseluruhan :data="subtotal" />
        </div>
        <div class="COMPONENT-BODY-DESKTOP">    
            <AlamatCheckout />
            <ComponentPengiriman />
            <ListProduk :products="data" />
            <TotalKeseluruhan :data="subtotal" />
            
        </div>
        <ComponentFooter :data="sampelProduk" />
    </div>
</template>

<script>
import KategoriWarung from "../home/kategori/KategoriHome.vue";
import IklanWarung from "../home/iklan/IklanHome.vue";
import DarkMode from "../models/darkMode/DarkMode.vue"
import SearchWarung from "../models/search/SearchWarung.vue"
import "./CheckOut.css";
import {CLOSE} from "../icons/config.js"
import { alamat } from "../../data";
import AlamatCheckout from "./alamat/AlamatCheckout.vue";
import ComponentPengiriman from "./pengiriman/ComponentPengiriman.vue";
import ListProduk from "./produk/ListProduk.vue";
import TotalKeseluruhan from "../models/total/TotalKeselurahan.vue"
import ComponentFooter from "../models/footer/ComponentFooter.vue";
import { sampelProduk } from "../../data";
import NavigasiBar from "../models/navigasi/NavigasiBar.vue";
import { cekLogin } from "../../../config/logic.js";

export default {
    name: "CheckOut",
    data() {
        return {
            CLOSE,
            alamat,
            sampelProduk,
            data: null,
            subtotal: null
        }
    },
    components: {
        AlamatCheckout,
        ComponentPengiriman,
        ListProduk,
        TotalKeseluruhan,
        ComponentFooter,
        KategoriWarung,
        DarkMode,
        SearchWarung,
        IklanWarung,
        NavigasiBar
    },
    beforeMount() {
        cekLogin(this.$router, this.$router.path)
        try {
            const data = JSON.parse(this.$route.query.state).data
            const subtotal = JSON.parse(this.$route.query.state).subtotal

            if(!data || !subtotal) {
                this.$router.push("/Cart")
                return false
            }
            this.data = data
            this.subtotal = subtotal
            this.$router.replace("/Checkout")
            
        } catch (error) {
            console.log(this.$route.query)
            this.$router.push("/Cart")
        }

    },
}
</script>