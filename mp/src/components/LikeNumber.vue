<template>
  <div>
    <p>いいね({{ totalNumber }})</p>
    <button @click="increment">+1</button>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  props: ["totalNumber"],
  // data() {
  //   return {
  //     number: 5
  //   }
  // },
  methods: {
    increment() {
      this.totalNumber += 1
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
