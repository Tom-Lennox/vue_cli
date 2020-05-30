<template>
  <div>
    <p>いいね({{ number }})</p>
    <button @click="increment">+1</button>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 5
    }
  },
  methods: {
    increment() {
      this.number += 1
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
