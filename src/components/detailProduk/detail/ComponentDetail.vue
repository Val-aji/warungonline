<template>
    <div v-if="data" class="containerFirst">
        <div 
            :style="{overflowX: 'auto', padding: '5px 0'}"
        >
            <div class="componentGambar">
                <div    
                    class="containerGambarDetail"
                >
                    <img 
                        :src="data.gambarProduk.thumbnail" 
                        :alt="data.namaProduk"  
                        class="gambarDetail"  
                    />
                    
                </div>
            </div>
        </div>
        <div class="describeDetail">
            <div class="headerDescribe">
                <p class="namaProduk HEEBO"> 
                    {{data.namaProduk}} 
                </p>
                
                <div
                    class="containerHargaProduk"
                >
                    <p 
                        class="hargaProduk POPPINS" 
                        v-if="(data.diskonProduk > 0)"
                    >
                        Rp{{( data.hargaProduk.toLocaleString("ID-id"))}} 
                    </p>
                    <p 
                        class="totalHarga POPPINS" :class="{hargaSetelahDiskon: data.diskonProduk > 0}"
                    >
                            Rp{{data.subtotalProduk.toLocaleString("ID-id")}}
                    </p>
                    
                </div>    
            </div>
            <p 
                class="deskripsiProduk POPPINS" 
                :class="{height100}" 
                @click="onHeight" 
            > 
                 {{data.deskripsiProduk}} 
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
        methods: {
            onHeight() {
                this.height100 = !this.height100
            }
        }
    }
</script>