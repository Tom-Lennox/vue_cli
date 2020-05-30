<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ totalNumber }}</h2>
    <LikeNumber :total-number="6"></LikeNumber>
    <LikeNumber :total-number="6"></LikeNumber>
  </div>
</template>
<script>
import LikeHeader from "./components/LikeHeader.vue"
export default {
  data() {
    return {
      totalNumber: 10
    }
  },
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
