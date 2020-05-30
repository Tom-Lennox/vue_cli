<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>
<script>
import LikeHeader from "./components/LikeHeader.vue"
export default {
  components: {
    // // # ▼ es5
    // LikeHeader: LikeHeader
    // # ▼ es6
    LikeHeader
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
