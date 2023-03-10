<template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Akun Kamu</h3>

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
        <div class="COMPONENT-BODY">
            <ComponentHeader />
            <ComponentButton v-for="(button, index) in buttons " :text="button.name" :key="index" 
            @myFunction="button.myFunction" />
        </div>

        <div class="COMPONENT-BODY-DESKTOP ">
            <ComponentHeader />
            <ComponentButton v-for="(button, index) in buttons" :text="button.name" :key="index" @myFunction="button.myFunction" />
        </div>

    </div>
</template>

<script>
    import ComponentButton from "./button/ComponentButton"
    import ComponentHeader from "./header/ComponentHeader.vue"
    import NavigasiBar from '../models/navigasi/NavigasiBar.vue';
    import "./index.css"
    import { ref } from "vue";
    import KategoriWarung from "../home/kategori/KategoriHome.vue";
    import IklanWarung from "../home/iklan/IklanHome.vue";
    import DarkMode from "../models/darkMode/DarkMode.vue"
    import SearchWarung from '../models/search/SearchWarung.vue';
    import {handleLogout, handleTesting} from "./logic.js"
    import { cekLogin } from "../../../config/logic.js";

    export default {
        name: "AccountWarung",
        
        components: {
            NavigasiBar,
            ComponentHeader,
            ComponentButton,
            SearchWarung,
            KategoriWarung,
            DarkMode,
            IklanWarung,
            

        },
        setup() {
            const email = localStorage.getItem("emailWarungonline")
            // const handleLogout = () => {
            //     console.log("tess")
            // }
            const buttons = ref([
                {name: "Tambah Produk", myFunction: () => redirectInsert()},
                {name: "Edit Profile", myFunction: handleTesting},
                {name: "Keranjang Belanja", myFunction: handleTesting},
                {name: "Hsitory Belanja", myFunction: handleTesting},
                {name: "Kelola Produk", myFunction: handleTesting},
                {name: "Pertanyaan sering muncul", myFunction: handleTesting},
                {name: "Ketentuan & Persyaratan", myFunction: handleTesting},
                {name: "Logout", myFunction: () => handleLogout(email)}
            ])
            
            return {buttons}
        },
        beforeMount() {
            cekLogin(this.$router, this.$route.path)
            
        },
        methods: {
            redirectInsert() {
               this.$router.push("/insertProduk")
            }
        }
    }


</script>
