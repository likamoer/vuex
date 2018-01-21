export default {
	count:(state)=>{
		return state.count;
	},
	oddAdd:(state)=>{
		return state.count%2==0?'偶数':'奇数';
	}
}