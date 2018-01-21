import {
	INCREMENT
} from './types.js'

const state = {
	count:10
};

const mutations = {
	[INCREMENT](state){
		state.count++;
	}
}
import getters from './getters.js'

export default{
	state,
	mutations,
	getters
}