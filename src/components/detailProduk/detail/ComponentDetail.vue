<template>
    <div class="containerFirst">
        <div :style="{overflowX: 'auto', padding: '5px 0'}">
            <div class="componentGambar">
                <div class="containerGambarDetail">
                    <img 
                        :src="data.gambar_produk.thumbnail" 
                        :alt="data.nama_produk"  
                        class="gambarDetail"  
                    />
                    
                </div>
            </div>
        </div>
        <div class="describeDetail">
            <div class="headerDescribe">
                <p class="namaProduk HEEBO"> 
                    {{data.nama_produk}} 
                </p>
                
                <div class="containerHargaProduk">
                    <p class="hargaProduk POPPINS" v-if="(data.diskon_produk > 0)">
                        Rp{{( data.harga_produk.toLocaleString("ID-id"))}} 
                    </p>
                    <p 
                        class="totalHarga POPPINS" :class="{hargaSetelahDiskon: data.diskon_produk > 0}"
                    >
                            Rp{{data.totalHarga_produk.toLocaleString("ID-id")}}
                    </p>
                    
                </div>    
            </div>
            <p 
                class="deskripsiProduk POPPINS" 
                :class="{height100}" 
                @click="onHeight" 
            > 
                 {{data.deskripsi_produk}} 
            </p>
            <p 
                :style="{textAlign: 'center', marginTop: '30px', color: 'purple'}"
            >
                --------------------------------------
            </p>
        </div>
    </div>
    

</template>

<script>
import "./index.css";
    export default {
        name: "ComponentDetail",
        data() {
            return {
                height100: true
            }
        },
        props: {
            data: Object
        },
        mounted() {
            console.log(this.data.nama_produk.length)
        },
        methods: {
            onHeight() {
                this.height100 = !this.height100
            }
        }
    }
</script>