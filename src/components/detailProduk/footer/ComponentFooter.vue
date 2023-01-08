<template>
        <div class="componentFooter" >
            <p class="hargaProdukFooter POPPINS">Rp{{data.harga_produk}}</p>

            <div class="containerButton">
                <button class="tombolTambah"> + </button>
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
            data: Object   
        }
    }
</script>

