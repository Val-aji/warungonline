<template>
    <div class="alertFilter">
        <div class="containerHeaderAlert">
            <p class="judulAlertFilter ROBOTO">Filter</p>
            <button class="tombolCloseAlert" v-html="CLOSE" @click="$emit('offAlert')"></button>
        </div>
        
        <ComponentAlert :datas="kategori" judul="Kategori" @selected="selectedKategori" />
        <ComponentAlert :datas="harga" judul="Harga" @selected="selectedHarga" />

        <button @click="handlePilihan" class="submit ROBOTO">Pilih</button>
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
            const setKategoriTrue = (index, value) => {
                kategori.value[index].status = value
            }
            
            return {harga, setHarga, kategori, setKategori, setKategoriTrue}
        },
        components: {
            ComponentAlert
        },
        methods: {  
            selectedKategori(index) {
                
                if(index === this.kategori.length - 1) {
                    if(this.kategori[7].status === true) {
                        
                        this.setKategoriTrue(7, false)
                    } else {
                        this.kategori.slice().map((item, index) => {
                            
                          this.setKategoriTrue(index, true)  
                          return
                        })
                    }
                    
                } else {
                    this.setKategori(index)
                }
                
            },  
            selectedHarga(index) {
                this.setHarga(index)
                                
            },
            handlePilihan() {
                
                const obj = {
                    harga: [],
                    kategori: []
                }
                this.kategori.map(item => {
                    if(item.status) {
                        obj.kategori.push(item.nama)
                    } else {
                        return
                    }
                }),
                this.harga.map(item => {
                    if(item.status) {
                        obj.harga.push(item.nama)
                    } else {
                        return
                    }
                })
                
            
                this.$emit("setFilterKategori", obj)
                    
            }
        }

    }

</script>