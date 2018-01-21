<template>
  <div id="app">
    <h2>welcome to vuex-demo</h2>
    <input type="button" value="增加" @click='increment'>
    <input type="button" value="减少" @click='decrement'>
    <input type="button" value="在偶数时增加" @click='oddAdd'>
    <input type="button" value="点击异步" @click='clickaycns'>

    <div>
      现在的数字为:{{count}}
      <span>他现在是:{{getodd}}</span>
    </div>
  </div>
</template>

<script>
// vuex提供两个非常靠谱的方法
// mapGetters mapActions
import {mapGetters , mapActions} from 'vuex'
console.log(mapGetters)
  export default {
    computed:mapGetters([
      // 获取处理后的数据
      'count',
      'getodd'
      ]),
    methods:mapActions([
      // 发送处理事件
        'increment',
        'decrement',
        'oddAdd',
        'clickaycns'
      ])
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
