<template>
    <div class="darkMode">
        <p class="HIND">Dark Mode</p>
        <!-- toggle of  -->
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-toggle-off " viewBox="0 0 16 16" @click="handleToggle" id="offDark" :class="{'none': offDark}">
                <path @click="handleToggle" id="offDark" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
        </svg>

        <!-- ON DARK  -->
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16" @click="handleToggle" id="onDark" :class="{'none': !offDark}">
                <path @click="handleToggle" id="onDark" d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
            </svg>
    </div>
</template>

<script>
    import "./index.css"
    export default {
        name: "DarkMode",
        data() {
            return {
                offDark: false,
            }
        },
        beforeMount() {
            const darkModeClient = localStorage.getItem("darkModeWarungonline")
            if(darkModeClient === "true") {
                this.offDark = true
                document.documentElement.setAttribute("data-theme", "dark")
            }
        },
        methods: {
            handleToggle(e) {
                let newTheme; 
                const {id} = e.target
                // const theme = document.documentElement.getAttribute("data-theme")
                
                if(id === "offDark") {
                    localStorage.setItem("darkModeWarungonline", true) 
                    this.offDark = !this.offDark  
                    newTheme = "dark"
                } else {
                    localStorage.setItem("darkModeWarungonline", false)
                    this.offDark = !this.offDark  
                    newTheme = "light"
                }

                document.documentElement.setAttribute("data-theme", newTheme)
            }
        }
    }

</script>


<style>

</style>
