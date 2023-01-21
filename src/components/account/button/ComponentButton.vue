<template>
    <div class="componentButton">
        <button class="text ROBOTO"> {{text}} </button>
    </div>
</template>

<script>
    import "./index.css"

    export default {
        name: "ComponentButton",
        data() {
            return {
                
            }
        },
        props: {
            text: String
        }
    }
</script>