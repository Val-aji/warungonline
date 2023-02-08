<template>
    <div id="CONTAINER-COMPONENT">
        <div class="containerSearch">
            <NavigasiBar />
            <h3 class="JUDUL">Login</h3>

            <div class="headerDesktop">
                <div class="header">
                    <IklanHome />
                    <div class="footerHeader">
                        <KategoriHome />
                        <div class="bottomFooter">
                            <SearchWarung />
                            <DarkMode />
                        </div>  
                    </div>
                </div>
            </div>

        </div>
        
        <div class="COMPONENT-BODY">
            <FormLogin />
        </div>
        <div class="COMPONENT-BODY-DESKTOP">
            <FormLogin />
        </div>
    </div>
</template>

<script>
        import "./index.css"
        import NavigasiBar from '../../components/models/navigasi/NavigasiBar.vue';
        import SearchWarung from '../../components/models/search/SearchWarung.vue';
        import KategoriHome from '../../components/home/kategori/KategoriHome.vue';
        import DarkMode from '../../components/models/darkMode/DarkMode.vue';
        import IklanHome from '../../components/home/iklan/IklanHome.vue';
        import FormLogin from "./FormLogin.vue";
    
    export default {
    name: "LoginClient",
    data() {
        return {};
    },
    components: { 
        NavigasiBar,
        KategoriHome,
        DarkMode,
        SearchWarung,
        IklanHome,
        FormLogin 
    }
};
</script>