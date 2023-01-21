<template>

    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Transaksi</h3>
        </div>
        <div id="TransactionWarung">
            <CardTransaksi />
        </div>
    </div>

</template>

<script>
    import NavigasiBar from '../models/navigasi/NavigasiBar.vue';
    import "./index.css"
    import CardTransaksi from './card/CardTransaksi.vue';
    
    export default {
        name: "TransactionWarung",
        components: {
            NavigasiBar,
            CardTransaksi
        }
    }



</script>