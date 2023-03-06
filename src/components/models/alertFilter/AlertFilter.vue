<template>
    <div class="alertFilter">
        <div class="containerHeaderAlert">
            <p class="judulAlertFilter ROBOTO">Filter</p>
            <button class="tombolCloseAlert" v-html="CLOSE" @click="$emit('offAlert')"></button>
        </div>
        
        <ComponentAlert :datas="KATEGORIS" judul="Kategori" :methodsUser="userChecked" />
        <ComponentAlert :datas="HARGA" judul="Harga" :methodsUser="userChecked" />
    </div>
</template>

<script>
    import "./alertFilter.css"
    import {KATEGORIS, HARGA} from "../../config"
    import ComponentAlert from "./ComponentFilter.vue"
    import {CLOSE} from "../../icons/config.js"
    export default {
        name: "AlertFilter",
        data() {
            return {
                CLOSE,
                KATEGORIS,
                HARGA,
                checkedUser: {
                    kategori: [],
                    harga: []
                }
            }
        },
        mounted() {
            
        },
        components: {
            ComponentAlert
        },
        methods: {
            userChecked(type, result) {
                this.checkedUser[type] = [...this.checkedUser[type], result]
                console.log(result)
                console.log(this.checkedUser)
            }
        }

    }

</script>