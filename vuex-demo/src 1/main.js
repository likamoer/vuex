import Vue from 'vue'
import App from './App.vue'
// 引入状态,方法,数据的集合文件
import store from './store.js'

// console.log(store)
new Vue({
	// 挂载文件
  store,
  el: '#app',
  render: h => h(App)
})
