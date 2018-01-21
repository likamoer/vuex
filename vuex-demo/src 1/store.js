import Vue from 'vue'
import Vuex from 'vuex'
// 初始化vuex
Vue.use(Vuex);
// 状态管理的数据中心
const state = {
	count:10,
};
// 对事件处理数据的集合中心
const mutations = {
	increment(state){//处理数据(状态变化的)
		state.count++;
	},
	decrement(state){
		state.count--;
	}
};
// 对提交事件进行处理的控制中心
const actions = {
	increment:({commit})=>{

		commit('increment')
	},
	decrement:({commit})=>{
		commit('decrement')
	},
	oddAdd:({commit,state})=>{
		// 在actions里面进行一些逻辑的操作,对事件进行筛选控制;
		if(state.count%2==0){
			
			commit('increment')
		}
	},
	clickaycns:({commit})=>{
		// 点击异步,封装一个promise函数,进行异步操作
		return new Promise((resolve)=>{
			setTimeout(function(){
				commit('increment')
			},1000)
		})
	}
};
// 获取处理后的数据集合中心
const getters = {
	count(state){
		return state.count;
	},
	getodd(state){
		return state.count%2==0?'偶数':'奇数';
	}
}
// 需要导出store对象
export default new Vuex.Store({
	actions,
	getters,
	mutations,
	state
})