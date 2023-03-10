<template>

    <div class="KategoriHome">
        <p class="judulKategori ROBOTO">Kategori</p>
        <div class="logoKategori">

            <LogoSusu @handleLogo="handleLogo" />
            <LogoSnack @handleLogo="handleLogo" />
            <LogoBiskuit @handleLogo="handleLogo" />
            <LogoBumbu @handleLogo="handleLogo" />
            <LogoIndomie @handleLogo="handleLogo" />
            <LogoPencuciPiring @handleLogo="handleLogo" />
            <LogoPerawatanDiri @handleLogo="handleLogo" />
            <LogoSnack />
        </div>    
    </div>  


    

</template>

<script>

    import LogoSusu from "../logo/LogoSusu.vue";
    import LogoSnack from "../logo/LogoSnack.vue";
    import LogoBiskuit from "../logo/LogoBiskuit.vue";
    import LogoBumbu from "../logo/LogoBumbu.vue";
    import LogoIndomie from "../logo/LogoIndomie.vue";
    import LogoPencuciPiring from '../logo/LogoPencuciPiring.vue';
    import LogoPerawatanDiri from '../logo/LogoPerawatanDiri.vue';
    import "./index.css";
    
    export default {
        name: "KategoriHome",
        methods: {
            handleLogo(res) {
                const {path} = this.$route
                if(path === "/Shooping") {
                    this.$emit("setFilterKategori", res)
                }
                this.$router.push({
                    path: "/Shooping",
                    query: {kategori: res}
                })
            }
        },
        components: {
            LogoSusu,
            LogoSnack,
            LogoBiskuit,
            LogoBumbu,
            LogoIndomie,
            LogoPencuciPiring,
            LogoPerawatanDiri
         }
    }
</script>

