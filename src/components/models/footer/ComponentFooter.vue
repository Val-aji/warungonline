<template>
        <div v-if="data" class="componentFooter" :class="{'top86': cartWarung}" >
            <p class="hargaProdukFooter POPPINS">
                Rp{{ !cartWarung ? data.subtotalProduk.toLocaleString() : subtotal.toLocaleString()}}
            </p>

            <div class="containerButton">
                <TombolTambah v-if="!cartWarung" :data="data" />
                <button @click="$emit('handlePesan')" 
                class="ROBOTO tombolPesan"
                
                >Pesan <br />Sekarang</button>
                
            </div> 
            
        </div>    
</template>

<script>
    import "./index.css";
    import TombolTambah from "../tombolTambah/TombolTambah.vue";

    export default {
        name: "ComponentFooter",
        props: {
            data: Object,
            cartWarung: Boolean,
            subtotal: Number,

        },
        components: {
            TombolTambah
        }
    }
</script>

