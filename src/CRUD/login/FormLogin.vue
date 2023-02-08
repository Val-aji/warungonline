<template>
    <div id="LoginClient">
        <button class="login ROBOTO">Login</button>
        <button class="register ROBOTO">Daftar Baru</button>
    </div>
</template>

<script>
    export default {
        name: "FormLogin",
        methods: {
            login() {
                console.log("login")
            },
            register() {
                console.log("register");
            }
        }
    }
</script>