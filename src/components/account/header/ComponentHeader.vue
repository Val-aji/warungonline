<template>
    <div class="componentHeader">
        <div class="container">
            <img class="gambarAccount" :src="sampelAccount.gambar_account" alt="gambar Profile" />
            <h3 class="namaLengkap HEEBO">{{sampelAccount.namaLengkap_accout}}</h3>
        </div>
    </div>
</template>

<script>
    import "./index.css"
    import { sampelAccount } from "../../../data";
    export default {
        name: "ComponentHeader",
        data() {
            return {
                sampelAccount
            }
        }
    }
</script>