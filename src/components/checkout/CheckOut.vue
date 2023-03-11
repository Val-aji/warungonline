<template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Checkout</h3>
            
            <div class="secondContainer">
                <DarkMode />                
            </div>

            <div class="headerDesktop">
                <div class="header">
                    <IklanWarung />
                    <div class="footerHeader">
                        <KategoriWarung />
                        <div class="bottomFooter">
                            <SearchWarung />
                            <DarkMode />
                        </div>  
                    </div>
                </div>
            </div>
        </div>

        <div class="COMPONENT-BODY pt-10 pb-8">
            <AlamatCheckout :dataAlamat="alamat"  @setDataAlamat="setDataAlamat" @setIsValid="setIsValid"/>
            <ComponentPengiriman />
            <ListProduk :products="data" />
            <TotalKeseluruhan :subtotal="subtotal" :jumlahProduk="jumlahProduk" :kodePesanan="kodePesanan"/>
        </div>
        <div class="COMPONENT-BODY-DESKTOP">    
            <AlamatCheckout :dataAlamat="alamat" @setDataAlamat="setDataAlamat" @setIsValid="setIsValid" />
            <ComponentPengiriman />
            <ListProduk :products="data" />
            <TotalKeseluruhan :subtotal="subtotal" :jumlahProduk="jumlahProduk" :kodePesanan="kodePesanan" />
            
        </div>
        <ComponentFooter :cartWarung="true"  :data="sampelProduk" :subtotal="subtotal" @handlePesan="checkout" />
    </div>
</template>

<script>
import KategoriWarung from "../home/kategori/KategoriHome.vue";
import IklanWarung from "../home/iklan/IklanHome.vue";
import DarkMode from "../models/darkMode/DarkMode.vue"
import SearchWarung from "../models/search/SearchWarung.vue"
import "./CheckOut.css";
import {CLOSE} from "../icons/config.js"
import AlamatCheckout from "./alamat/AlamatCheckout.vue";
import ComponentPengiriman from "./pengiriman/ComponentPengiriman.vue";
import ListProduk from "./produk/ListProduk.vue";
import TotalKeseluruhan from "../models/total/TotalKeselurahan.vue"
import ComponentFooter from "../models/footer/ComponentFooter.vue";
import { sampelProduk } from "../../data";
import NavigasiBar from "../models/navigasi/NavigasiBar.vue";
import { cekLogin } from "../../../config/logic.js";
import {ref} from "vue"
import { instance } from "../../../config/logic.js";

export default {
    name: "CheckOut",
    data() {
        return {
            CLOSE,
            alamat: null,
            sampelProduk,
            data: null,
            subtotal: 0,
            jumlahProduk: 0,
            isValid: false,
        }
    },
    components: {
        AlamatCheckout,
        ComponentPengiriman,
        ListProduk,
        TotalKeseluruhan,
        ComponentFooter,
        KategoriWarung,
        DarkMode,
        SearchWarung,
        IklanWarung,
        NavigasiBar
    },
    setup() {
        const datetime = new Date().toLocaleString("ID-id", {timezone: "asia/jakarta"})
        const waktuLocal = datetime.replace(" ", "")
        const angkaAcak = Math.floor(Math.random() * 100)
        const kode = "FFBA" + waktuLocal + angkaAcak.toString()
        const kodePesanan = ref(kode)
        
        return {kodePesanan}
    },
    
    beforeMount() {
        cekLogin(this.$router, this.$router.path)
        try {
            const {data, subtotal, jumlahProduk} = JSON.parse(this.$route.query.state)
            
            if(!data || !subtotal) {
                this.$router.push("/Cart")
                return false
            } 
            this.$router.replace("/Checkout")

            this.data = data
            this.subtotal = subtotal
            this.jumlahProduk = jumlahProduk
            
        } catch (error) {
            
            this.$router.push("/Cart")
            console.log({error})
        }
    },  

    methods: {
        setIsValid(res) {   
            if(!res) {
                this.isValid = false
            }else {
                this.isVald = true
            }
        
        },
        setDataAlamat(res) {
            const {alamat} = res
            
            if(alamat.length < 4 || alamat[3].trim() === "KELURAHAN" || !alamat[3] || !alamat) {
                this.isValid = false
            } else {
                this.isValid = true
                this.alamat = res
            }
            
            
        },
        async checkout() {
            if(!this.isValid || !this.alamat) {
                alert("Masukkan alamat dengan benar")
                return false
            } 

            const email = localStorage.getItem("emailWarungonline")
            const datetime = new Date().toLocaleString("ID-id", {timezone: "asia/jakarta"})
            const dataPesanan = {
                metode: "COD",
                listProduk: this.data,
                subtotal: this.subtotal,
                jumlahProduk: this.jumlahProduk,
                identitasPenerima: {
                    namaLengkap: this.alamat.namaLengkap,
                    nomorWhatsapp: this.alamat.nomorWhatsapp,
                    alamat: this.alamat.alamat,
                    namaJalan: this.alamat.namaJalan
                }
            }

            const formData = new FormData()
            formData.append("email", email)
            formData.append("kodePesanan", this.kodePesanan)
            formData.append("tanggalPesanan", datetime)
            formData.append("dataTransaksi", JSON.stringify(dataPesanan))
            
            
            try {
                const result = await instance().put("/clientProduk/transaksi", formData)    
                console.log(result)
                alert("Pesanan berhasil di proses")
                this.$router.push("/Account")
            } catch (error) {
                console.log({error})
            }
            
        }
    }
}
</script>