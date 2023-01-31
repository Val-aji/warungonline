<template>
  <div id="CONTAINER-APP">
    <RouterView />
  </div>
  
</template>

<script>
import { RouterView } from "vue-router";
import "./index.css"
console.log(document.documentElement.getAttribute("data-theme"))

export default {
  components: {
    RouterView
  }
}
</script>
