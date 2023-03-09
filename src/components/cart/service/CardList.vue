<template>
    <div class="cardList">
        <div class="cards">
            <div 
                v-for="(product, index) in newProduk" 
                class="card" 
                :key="index" 
                @click="clickProduk" 
            >
                <div class="gambarAndCounter" >
                    <img 
                        :src="product.gambarProduk.thumbnail" 
                        :alt="product.namaProduk" 
                    />
                    <div class="counter">
                        <button 
                            class="aritmatika" 
                            @click="() => handleKurang(index)"
                        > 
                            - 
                        </button>
                        <p 
                            class="jumlah"
                        >
                            {{product.jumlah}}
                        </p>
                        <button 
                            @click="() => handleTambah(index)" 
                            class="aritmatika"
                        > 
                            + 
                        </button>
                    </div>
                </div>
                
                <div class="detail">
                    <p 
                        class="namaProduk"
                    > 
                        {{product.namaProduk}} 
                    </p>

                    <div class="hargaProduk">
                        <p 
                            v-if="product.diskonProduk > 0" 
                            class="hargaSebelumDiskon POPPINS"
                        > 
                                Rp{{product.hargaProduk.toLocaleString("id-ID")}} 
                        </p>
                        
                        <p 
                            class="subtotal POPPINS"
                            :class="{'hargaDiskon' : product.diskonProduk > 0}"
                        > 
                               Rp{{product.subtotalProduk.toLocaleString("id-ID")}} 
                        </p>
                    </div>
                    
                    <textarea 
                        type="text" 
                        class="deskripsiProduk HEEBO" 
                        disabled 
                        :value="product.deskripsiProduk" 
                    />
                </div>

                <div class="ceklis">
                    <input 
                        type="checkbox" 
                        class="check" 
                        :checked="product.status"
                        @change="() => handlePilihan(index)" />
                    <button 
                        class="HIND"
                        @click="() => console.log(product.kodeProduk)"
                    > 
                        Tambah
                    </button>  
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    import "./index.css"
    import {products} from "../../../data.js"
    import {ref} from "vue";
    // import {useRouter} from "vue-router";

    export default {
        name: "CardList",
        data() {
            return {
                products
            }
        },
        setup() {
            const listHargaProduk = []
            const cekProduk = products.map(item => {
                const status = false;
                const objHarga = {
                    namaProduk: item.namaProduk,
                    hargaProduk: item.hargaProduk,
                    subtotalProduk: item.subtotalProduk
                }
                listHargaProduk.push(objHarga)
                return {...item, status, jumlah: 1, subtotalAwal: item.subtotalProduk}
            })
            const newProduk = ref(cekProduk)

            const setStatus = (index) => {
                // newProduk.value[index].status = !newProduk[index].status
                newProduk.value[index].status = !newProduk.value[index].status
            }

            const setJumlah = (index, value) => {
                newProduk.value[index].jumlah += value

                const {jumlah} = newProduk.value[index]
                
                if(jumlah <= 0) {
                    newProduk.value[index].jumlah = 1
                } else if(jumlah > 100) {
                    alert("maksimal jumlah pembelian 100")
                    newProduk.value[index].jumlah = 100    
                } else {
                    const {namaProduk} = newProduk.value[index]
                    const currentData = listHargaProduk.filter(i => i.namaProduk === namaProduk)

                    newProduk.value[index].hargaProduk = currentData[0].hargaProduk * jumlah

                    newProduk.value[index].subtotalProduk = currentData[0].subtotalProduk * jumlah
                }
            }
            return {newProduk, setStatus, setJumlah}
        },
        methods: {
            handlePilihan(index) {
                this.setStatus(index)
                const products = this.newProduk.filter(i => i.status)
                this.$emit("setData", products)
                this.$emit("setSubtotal")

            },
            handleTambah(index) {
                this.setJumlah(index, 1)
                this.$emit("setSubtotal")
            },
            handleKurang(index) {
                this.setJumlah(index, -1)
                this.$emit("setSubtotal")
            }
            
        },

    }
</script>