<template>
    <div id="CONTAINER-COMPONENT">
        <NavigasiBar />
        <div class="containerSearch">
            <h3 class="JUDUL">Akun Kamu</h3>
        </div>
        <div id="AccountWarung">
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

    export default {
        name: "AccountWarung",
        components: {
            NavigasiBar,
            ComponentHeader,
            ComponentButton
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