<template>
    <div v-if="products" class="listProduk">
        <h3 class="judul POPPINS">3. List Produk</h3>
        <div class="cards">
            <div class="card" v-for="product in products" :key="product.id">
                <img :src="product.gambarProduk.thumbnail" :alt="product.namaProduk " />
                <div class="detail">
                    <p class="namaProduk HEEBO"> {{product.namaProduk}} </p>
                    <div class="hargaProduk">
                        <p class="HIND HDTJ"> Harga </p>
                        <p class="titikDua"> : </p>
                        <span class="POPPINS"> Rp{{ product.hargaProduk.toLocaleString("ID-id") }}</span>
                    </div>
                    
                    <div class="diskonProduk">
                        <p class="HIND HDTJ">Diskon </p>
                        <p class="titikDua"> : </p>
                        <span>{{product.diskonProduk}}%</span>
                    </div>
                    
                    
                    <div class="totalHarga">
                        <p class="HIND HDTJ">   </p>
                        <p class="titikDua">  </p>
                        <span class="POPPINS"> Rp{{ product.subtotalAwal.toLocaleString("ID-id") }}</span>
                    </div>
                    <div class="jumlah">
                        <p class="HIND HDTJ"> Jumlah </p>
                        <p class="titikDua"> : </p>
                        <span class="POPPINS"> {{ product.jumlah }} </span>
                    </div>
                    
                    <div class="subTotal">
                        <p class="ROBOTO">Subtotal</p>
                        <span class="POPPINS">Rp{{product.subtotalProduk.toLocaleString("ID-id")}}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        
        
    </div>
</template>


<script>
    import "./index.css"
    
    export default {
        name: "ListProduk",
        
        props: {
            products: Object
        },
        beforeMount() {
            
        }
    }


</script>


