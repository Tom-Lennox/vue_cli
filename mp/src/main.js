import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // # ▼ 
  // el: '#app' ⇒ .$mount('#app')
  // #app ⇒ [index.html, <!-- built files will be auto injected -->の部分で読み込まれる。]
  render: h => h(App),
  // # ▼ 
  // render関数：ES5, ES6の違い。下記と意味は同じ。
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
  // （ESLint, 使用の際には「import App from './App.vue'」を削除のこと。）
  // # ▼ 
  // App ⇒ objを取る。
  // component ⇒ importされた時点でobj。
}).$mount('#app')
