<template>
    <div class="containerFirst">
        <div :style="{overflowX: 'auto', padding: '5px 0'}">
            <div class="componentGambar">
                <div class="containerGambarDetail" v-for="(resultGambar,index) in data.gambar_produk"  :key="index">
                    <img :src="resultGambar" :alt="resultGambar.nama_produk"  class="gambarDetail"  />
                    
                </div>
            </div>
        </div>
        <div class="describeDetail">
            <div class="headerDescribe">
                <p class="namaProduk"> {{data.nama_produk}} </p>
                <div class="containerHargaProduk">
                    <p class="hargaSebelumDiskon" v-if="(data.diskon > 0)" >Rp{{( data.harga_produk)}} </p>
                    <p @click="tes" class="hargaProduk ROBOTO" :class="{hargaSetelahDiskon: data.diskon > 0}">Rp100.0000</p>
                    
                </div>    
            </div>
            <p class="deskripsiProduk POPPINS" :class="{height100}" @click="onHeight" > 
                 {{data.deskripsi_produk}} 
            </p>
            <p :style="{textAlign: 'center', marginTop: '30px', color: 'purple'}">--------------------------------------</p >
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
        methods: {
            tes(e) {
                console.log(e.target)
            },
            onHeight() {
                this.height100 = !this.height100
            }
        }
    }
</script>