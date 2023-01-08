<template>
    <div class="alertFilter">
        <p class="judulAlertFilter ROBOTO">Filter</p>

        <ComponentAlert :datas="KATEGORIS" judul="Kategori" :methodsUser="userChecked" />
        <ComponentAlert :datas="HARGA" judul="Harga" :methodsUser="userChecked" />
    </div>
</template>

<script>
    import "./alertFilter.css"
    import {KATEGORIS, HARGA} from "../../config"
    import ComponentAlert from "./ComponentFilter.vue"

    export default {
        name: "AlertFilter",
        data() {
            return {
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