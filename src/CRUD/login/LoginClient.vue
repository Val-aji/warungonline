<template>
    <div id="CONTAINER-COMPONENT">
        <div class="containerSearch">
            <NavigasiBar />
            <h3 class="JUDUL">Masuk</h3>
        </div>
        
        <div id="LoginClient">
            <button class="login ROBOTO">Login</button>
            <button class="register ROBOTO">Daftar Baru</button>
        </div>
    </div>
</template>

<script>
import "./index.css"
import NavigasiBar from '../../components/models/navigasi/NavigasiBar.vue';

    export default {
    name: "LoginClient",
    data() {
        return {};
    },
    components: { 
        NavigasiBar 
    },
    methods: {
        login() {
            console.log("login")
        },
        register() {
            console.log("register");
        }
    }
};
</script>