<template>
    <div id="header">
        <div v-if="tombolClose" class="tombolClose" @click="onTombolClose" >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-backspace-reverse-fill" viewBox="0 0 16 16">
                <path d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2V3zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8l2.147-2.146z"/>
              </svg>
        </div>
        
        <div id="search">
            <input type="text"
             v-model="inputSearch" :placeholder= placeHolder 
             class="inputSearch">
            <button 
                v-if="!tombolClose"
                v-html="SEARCH" 
                class="logoSearch">
            </button>
        </div>
        <button  
            v-if="tombolFilter === true" 
            v-html="FILTER" 
            class="logoFilter"
            @click="onAlertFilter"
             >
            
        </button>

        
    </div>
    <AlertFilter v-if="alertFilter" @offAlert="onAlertFilter"/>
</template>

<script>
    import { SEARCH, FILTER } from "../../icons/config.js";
    import "./searchWarung.css";
    import AlertFilter from "../alertFilter/AlertFilter.vue";

    export default {
    name: "SearchWarung",
    data() {
        return {
            inputSearch: "",
            placeHolder: "",
            SEARCH,
            FILTER,
            alertFilter: false,
            destroyFilter: true,
            
        };
    },
    props: {
        tombolFilter: Boolean,
        tombolClose: Boolean,
        textPlaceHolder: String,
    },
    mounted() {
        if(!this.textPlaceHolder) {
            this.placeHolder = "cari kebutuhanmu disini..."
        } else {
            this.placeHolder = this.textPlaceHolder
        }
    },  
    components: { AlertFilter },
    methods: {
        onAlertFilter() {
            this.alertFilter = !this.alertFilter
        },
        onTombolClose() {
            console.log("Hello Tombol Close")
        }
    }
}
</script>