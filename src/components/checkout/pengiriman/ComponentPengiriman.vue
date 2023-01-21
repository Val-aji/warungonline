<template>
    <div class="componentPengiriman">
        <h3 class="judul POPPINS">2. Metode Pengiriman</h3>
        <div class="pengiriman">
            <select id="pengiriman" class="HEEBO">
                <option value="PickUp">Ambil di toko (Pick Up)</option>
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

            }
        }
    }
</script>