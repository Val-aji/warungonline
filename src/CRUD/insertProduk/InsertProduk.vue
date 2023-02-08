<template>
    <div class="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Insert Produk</h3>

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
            <FormInsert />
        </div>
        
        <div class="COMPONENT-BODY-DESKTOP ">
            <FormInsert />
        </div>

    </div>

</template>

<script>
    import NavigasiBar from '../../components/models/navigasi/NavigasiBar.vue';
    import SearchWarung from '../../components/models/search/SearchWarung.vue';
    import KategoriHome from '../../components/home/kategori/KategoriHome.vue';
    import DarkMode from '../../components/models/darkMode/DarkMode.vue';
    import IklanHome from '../../components/home/iklan/IklanHome.vue';
    import FormInsert from './FormInsert.vue';
 
    export default {
        name: "InsertProduk",
        data() {
            return {

            }
        },
        components: {
            NavigasiBar,
            FormInsert,
            KategoriHome,
            DarkMode,
            SearchWarung,
            IklanHome,
            
}
    }
</script>