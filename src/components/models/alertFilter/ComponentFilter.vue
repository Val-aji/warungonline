<template>
    <div class="containerAlert">
        <p class="judulAlert HEEBO"> {{judul}} </p>
        <div class="containerCheck">
            <p  v-for="(result, index) in datas.
                data" :key="index" 
                @click="() => methodsUser(datas.type, result)" 
                :value="result" class="userChecked">    
                {{ result }} 
            </p>
        </div>
     
    </div>

</template>

<script>

    export default {
        name: "ComponentAlert",
        data() {
            return {
                checked: {
                    kategori: [],
                    harga: []
                }
            }
        },
        props: {
            datas: Object,
            judul: String,
            methodsUser: Function
        }
    }
</script>