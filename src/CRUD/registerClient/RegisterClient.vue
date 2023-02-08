
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
            <FormRegister />
        </div>

        <div class="COMPONENT-BODY-DESKTOP">
            <FormRegister />
        </div>
    </div>

</template>


<script>
        import NavigasiBar from '../../components/models/navigasi/NavigasiBar.vue';
        import SearchWarung from '../../components/models/search/SearchWarung.vue';
        import KategoriHome from '../../components/home/kategori/KategoriHome.vue';
        import DarkMode from '../../components/models/darkMode/DarkMode.vue';
        import IklanHome from '../../components/home/iklan/IklanHome.vue';
        import FormRegister from './FormRegister.vue';
        
        export default {
            name: "RegisterClient",
            data() {
                return {

                }
            },
            components: {
                NavigasiBar,
                SearchWarung,
                KategoriHome,
                DarkMode,
                IklanHome,
                FormRegister
            }
        }







</script>