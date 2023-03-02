<template>
    <div class="componentPengiriman">
        <h3 class="judul POPPINS">2. Metode Pengiriman</h3>
        <div class="pengiriman">
            <select @change="handleMetode" id="pengiriman" class="HEEBO">
                <option value="pickup">Ambil di toko (Pick Up)</option>
                <option value="COD">Cash On Delivery (COD)</option>
            </select>
        </div>
    </div>

</template>

<script>
    import "./index.css"
    export default {
        name:"ComponentPengiriman",
        data() {
            return {
                metode: ""
            }
        },
        methods: {
            handleMetode(e) {
                this.metode = e.target.value
                console.log(this.metode)
            }
        }
    }
</script>