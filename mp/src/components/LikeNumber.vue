<template>
  <div>
    <p>いいね({{ totalNumber }})</p>
    <p>半分({{ halfNum }})</p>
    <button @click="increment">+1</button>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  // props: ["totalNumber"],
  props: {
    totalNumber: {
      type: Number,
      required: true,
      default: function() {
        return {
          number: 5
        }
      }
    },
    testProps: {
      type: String
    }
  },
  // props: ["totalNumber", "testProps"],
  computed: {
    halfNum() {
      return this.totalNumber / 2
    }
  },
  // data() {
  //   return {
  //     number: 5
  //   }
  // },
  methods: {
    increment() {
      this.$emit('my-click', this.totalNumber + 1)
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
