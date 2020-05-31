<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ totalNumber }}</h2>
    <LikeNumber :total-number="totalNumber" test-props="" @my-click="totalNumber = $event"></LikeNumber>
    <LikeNumber :total-number="totalNumber" test-props="" @my-click="totalNumber = $event"></LikeNumber>
    <pre>{{ $data }}</pre>
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
