<template>
    <div id="CONTAINER-COMPONENT">
        <div class="containerSearch">
            <h3 class="JUDUL">Checkout</h3>
            <button class="tombolClose" v-html="CLOSE"></button>
        </div>
        <div id="COMPONENT-BODY">
            <AlamatCheckout />
            <ComponentPengiriman />
            <ListProduk />
            <TotalKeseluruhan />
            <ComponentFooter :data="sampelProduk" />
        </div>
    </div>
</template>

<script>
import "./CheckOut.css";
import {CLOSE} from "../icons/config.js"
import { alamat } from "../../data";
import AlamatCheckout from "./alamat/AlamatCheckout.vue";
import ComponentPengiriman from "./pengiriman/ComponentPengiriman.vue";
import ListProduk from "./produk/ListProduk.vue";
import TotalKeseluruhan from "../models/total/TotalKeselurahan.vue"
import ComponentFooter from "../models/footer/ComponentFooter.vue";
import { sampelProduk } from "../../data";

export default {
    name: "CheckOut",
    data() {
        return {
            CLOSE,
            alamat,
            sampelProduk
        }
    },
    components: {
        AlamatCheckout,
        ComponentPengiriman,
        ListProduk,
        TotalKeseluruhan,
        ComponentFooter
    }
}
</script>