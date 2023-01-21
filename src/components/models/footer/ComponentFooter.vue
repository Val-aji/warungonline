<template>
        <div class="componentFooter" :class="{'top86': cartWarung}" >
            <p class="hargaProdukFooter POPPINS">Rp{{"999.999.999".toLocaleString("ID-id")}}</p>

            <div class="containerButton">
                <button class="tombolTambah" v-if="cartWarung" > + </button>
                <button class="ROBOTO tombolPesan">Pesan <br />Sekarang</button>
                
            </div> 
            
        </div>    
</template>

<script>
    import "./index.css";

    export default {
        name: "ComponentFooter",
        data() {
            return {

            }
        },
        props: {
            data: Object,
            cartWarung: Boolean   
        }
    }
</script>

