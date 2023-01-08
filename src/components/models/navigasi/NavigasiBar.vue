<template>
    <div id="NavigasiBar">
        <div class="navs">
            <router-link v-for="(navbar,index) in navbars" :to="navbar.path" :key="index" class="nav" >
                <span class="logoNavbar" v-html="navbar.template"></span>
                <p class="fontNavbar">{{navbar.name}}</p>
            </router-link>
        </div>

    </div>
</template>

<script>
    // ICONS
    import navbars from "./config.js";
    import "./index.css"
    
    export default {
        name: "NavigasiBar",
        data() {
            return {
                navbars
            }
        }
    }
</script>