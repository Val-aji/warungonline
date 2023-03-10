<template>
    <div class="alertFilter">
        <div class="containerHeaderAlert">
            <p class="judulAlertFilter ROBOTO">Filter</p>
            <button class="tombolCloseAlert" v-html="CLOSE" @click="$emit('offAlert')"></button>
        </div>
        
        <ComponentAlert :datas="kategori" judul="Kategori" :methodsUser="userChecked" @selected="selectedKategori" />
        <ComponentAlert :datas="harga" judul="Harga" :methodsUser="userChecked" @selected="selectedHarga" />

        <button class="submit ROBOTO">Pilih</button>
    </div>
</template>

<script>
    import "./alertFilter.css"
    import {KATEGORIS} from "../../config"
    import ComponentAlert from "./ComponentFilter.vue"
    import {CLOSE} from "../../icons/config.js"
    import {ref} from "vue"
    export default {
        name: "AlertFilter",
        data() {
            return {
                CLOSE,
                KATEGORIS,
                checkedUser: {
                    kategori: [],
                    harga: []
                }
            }
        },
        setup() {
            const harga = ref([
                {id: 1, nama: "Termurah", status: false},
                {id: 2, nama: "Termahal", status: false},
                {id: 3, nama: "Diskon", status: false}
            ])

            const setHarga = (index) => {
                harga.value[index].status = !harga.value[index].status
            }

            const newKategori = KATEGORIS.data.map((item, index) => {
                const obj = {
                    id: index + 1,
                    nama: item,
                    status: false
                }
                return obj
            })

            const kategori = ref(newKategori)
            const setKategori = (index) => {
                kategori.value[index].status = !kategori.value[index].status
            }
            return {harga, setHarga, kategori, setKategori}
        },
        components: {
            ComponentAlert
        },
        methods: {  
            selectedKategori(index) {
                this.setKategori(index)
                
            },  
            selectedHarga(index) {
                this.setHarga(index)
                
            },
            userChecked(type, result) {
            
                this.checkedUser[type] = [...this.checkedUser[type], result]
                console.log(result)
                console.log(this.checkedUser)
            }
        }

    }

</script>