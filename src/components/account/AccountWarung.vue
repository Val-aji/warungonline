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
        <div class="COMPONENT-BODY P0">
            <ComponentHeader />
            <ComponentButton v-for="(button, index) in buttons " :text="button.name" :key="index" />
        </div>

        <div class="COMPONENT-BODY-DESKTOP ">
            <ComponentHeader />
            <ComponentButton v-for="(button, index) in buttons " :text="button.name" :key="index" />
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

    export default {
        name: "AccountWarung",
        components: {
            NavigasiBar,
            ComponentHeader,
            ComponentButton,
            SearchWarung,
            KategoriWarung,
            DarkMode,
            IklanWarung

        },
        setup() {
            const buttons = ref([
                {name: "Edit Profile"},
                {name: "Keranjang Belanja"},
                {name: "Hsitory Belanja"},
                {name: "Kelola Produk"},
                {name: "Pertanyaan sering muncul"},
                {name: "Ketentuan & Persyaratan"},
                {name: "Logout"}
            ])
            return {buttons}
        }
        
    }


</script>