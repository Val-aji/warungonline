<template>
  <div id="CONTAINER-APP">
    <RouterView />
  </div>
  
</template>

<script>
import { RouterView } from "vue-router";
import "./index.css"
export default {
  components: {
    RouterView
  }
}
</script>
