<template>
    
    <div class="containerAlert">
        <p class="judulAlert HEEBO"> {{judul}} </p>
        <div class="containerCheck">
            <p  v-for="(result, index) in datas" :key="index" 
                @click="() => {$emit('selected', index)}" 
                :value="result" 
                class=" userChecked HIND"
                :class="result.status ? ' activeFilter ' : '' "
            >    
                {{ result.nama }} 
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
                    harga: [],
                },
            }
        },
        props: {
            datas: Object,
            judul: String,
            methodsUser: Function
        }
    }
</script>