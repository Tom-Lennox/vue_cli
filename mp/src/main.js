// # ▼ component、グローバル登録する場合：
// 記：[main.js]
// 手：import, Vue.component
import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import router from "./router";

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber)

new Vue({
  router,
  // # ▼ .$mount('#app')の意味：el: '#app' と同じ

  // el: '#app' ⇒ .$mount('#app')
  // #app ⇒ [index.html, <!-- built files will be auto injected -->の部分で読み込まれる。]
  render: h => h(App),

  // # ▼ render関数：ES5, ES6の違い。下記と意味は同じ。
  // // '''
  // render: function(h) {
  //   return h(App)
  // }
  // or
  // render: function(createElement) {
  //   return createElement(App)
  // }
  // // '''

  // # ▼ 
  // render: h => h('div', 'こんにちは')
  // （ESLint, ※使用の際には「import App from './App.vue'」を削除のこと。）

  // # ▼ importされたファイルはobj形式である。
  // App ⇒ objを取る。
  // component ⇒ importされた時点でobj。
}).$mount('#app')
