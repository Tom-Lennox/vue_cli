<template>
  <div>
    <LikeHeader header-text="hello">
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <p>default slot</p>
      <template v-slot:number>
        <h2>{{ totalNumber }}：slot実験用</h2>
      </template>
      <template v-slot:[dou]>
        <p>動的なslot</p>
      </template>
    </LikeHeader>
    <h2>{{ totalNumber }}</h2>
    <LikeNumber :total-number="totalNumber" test-props="" @my-click="totalNumber = $event"></LikeNumber>
    <LikeNumber :total-number="totalNumber" test-props="" @my-click="totalNumber = $event"></LikeNumber>
    <pre>{{ $data }}</pre>
    <!-- <button @click="currentComponent = 'Home'">home</button>
    <button @click="currentComponent = 'About'">about</button>
    <Home v-if="currentComponent === 'Home'"></Home>
    <About v-if="currentComponent === 'About'"></About> -->

    <button @click="currentComponent = 'Home'">home</button>
    <button @click="currentComponent = 'About'">about</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <hr>
    <p>s9</p>
    <p>s10</p>
  </div>
</template>
<script>
import LikeHeader from "./components/LikeHeader.vue"
import Home from "./components/Home"
import About from "./components/About"
export default {
  data() {
    return {
      totalNumber: 10,
      dou: "douteki",
      currentComponent: "Home",
    }
  },
  components: {
    // // # ▼ es5
    // LikeHeader: LikeHeader
    // # ▼ es6
    LikeHeader,
    Home,
    About
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
