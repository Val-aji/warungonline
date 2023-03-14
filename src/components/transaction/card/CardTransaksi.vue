<template>
    <div class="navsTransaksi " >
        <button 
            class="navTransaksi HEEBO"
            :class="nav.status ? 'activeBorder' : '' " 
            v-for="(nav, index) in navs" :key="nav.id"
            @click="() => setNavs(index)"
            >
                {{nav.name}}
            </button>
    </div>
    
    <div class="kosongTer" v-if="listPesanan.length <= 0">
        <p class="HIND">Transaksimu masih kosong nih!</p>
        <button @click="redirect" class="POPPINS">yuk isi transaksimu biar gak kosong!</button>
    </div>
    <div v-for="(data, index) in listPesanan"  class="cardTransaksi" :key="index">
        <div class="card">
           
            <HeaderCard :data="data" />            
           
            <div class="produk">
                <img 
                    v-for="item in data.listProduk" :key="item.id"
                    :src="item.gambarProduk.thumbnail" 
                    class="gambarProduk" 
                    :alt="item.namaProduk"
                >                
            </div>
            
            <div class="footerTransaksi">
                <div class="POPPINS hargaFooter">
                    <p class="judul HIND">
                        Harga 
                    </p>Rp{{ data.subtotal.toLocaleString("ID-id") }}
                </div>
                <div class="HIND estimasi">
                    <p class="judul HEEBO">
                        Estimasi
                    </p>
                    {{ data.estimasi}}
                </div>
                <button 
                    @click="() => handleSukses(data.kodePesanan)"
                    class="pesananSelesai ROBOTO" 
                    v-if="data.status === 'antrian'"
                >
                    Pesanan Selesai
                </button>
                <div class="HIND estimasi" v-if="data.status !== 'antrian'">
                    <p class="judul HEEBO">
                        Tanggal Selesai
                    </p>
                    {{ data.tanggalBerakhir }}
                </div>
            </div>
        </div>
                
    </div>
</template>

<script>
    
    import "./index.css"
    import "./nav.css"
    import {ref} from "vue"
    import { sampelProduk } from "../../../data"
    import HeaderCard from "./header/HeaderCard.vue"
    import { instance } from "../../../../config/logic.js"

    export default {   
        name: "CardTransaksi",
        data() {
            return {
                sampelProduk,
                listPesanan: [],
                produk: []
            }
        },
        watch: {
            navs(newV) {
                const name = newV.slice().filter(i => i.status)[0].name
                this.listPesanan = this.produk.slice().filter(item => {
                    return item.status === name
                })
            }
        },
        setup() {
            const navs = ref([
                {id: 1, name: "antrian", status: true},
                {id: 2, name: "selesai", status: false},
            ])
            
            
            const setNavs = index => {
                const newNavs = navs.value.slice().map((item, i) => {
                    const newObj = {...item}
                    if(i === index) {
                        newObj.status = true
                        
                    } else {
                        newObj.status = false
                    }
                    return newObj
                })
                navs.value = newNavs
            }

            return {navs, setNavs }
        },
        async created() {
            try {
                const email = localStorage.getItem("emailWarungonline")
                const formData = new FormData()
                formData.append("email", email)
                const result = await instance().post("/kodePesanan/getTransaksi", formData)
                
                this.produk = this.listPesanan = result.data.data.slice()
                
                this.listPesanan = result.data.data.slice().filter(item => item.status === "antrian")
                
            } catch (error) {
                console.log({error})
            }
        },
        components: {
            HeaderCard,  
        },
        methods: {
            redirect() {
                this.$router.push("/Cart")
            },
            async handleSukses(value) {
                try {
                    const email = localStorage.getItem("emailWarungonline")
                    const formData = new FormData()
                    formData.append("email", email)
                    formData.append("kodePesanan", value)
                    await instance().put("/clientProduk/transaksi/selesai", formData)
                    alert("pesanan " + value + " Selesai ")
                    location.reload()
                } catch (error) {
                    console.log({error})
                }
                
            }
        }
        
    }
</script>