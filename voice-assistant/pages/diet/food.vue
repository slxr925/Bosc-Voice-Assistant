<template>
	<view>
	    <uni-nav-bar status-bar='false' @clickLeft="back('/pages/index/index')" left-icon="back" left-text="返回"  title="饮食">
			<view slot="right" class='info'>
						   <navigator url="/pages/uni-feedback/uni-feedback" open-type="navigate">
					  <uni-icons  type="more" size="24" />
						   </navigator>
			</view>
		</uni-nav-bar>
		<uni-search-bar placeholder="输入菜名" :radius="100" @confirm="search"></uni-search-bar>
	<view class="page">
		<WaterfallsFlow :wfList='list' @itemTap="itemTap" />
	</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import WaterfallsFlow from '../../components/WaterfallsFlow/WaterfallsFlow.vue'
	
	export default {
		components:{
			WaterfallsFlow,
			 uniSearchBar
		},
		data() {
			return {
				list:[],
				requiredData:[
					{
						image:'/static/diet/1.jpg',
						sorce:5,
						nickName:'rFonz'
					},
					{
						image:'/static/diet/2.jpg',
						sorce:5,
						nickName:'rFonz'
					},
					{
						image:'/static/diet/3.jpg',
						sorce:5,
						nickName:'rFonz'
					},
					{
						image:'/static/diet/4.jpg',
						sorce:5,
						nickName:'dds'
					},
					{
						image:'/static/diet/5.jpg',
						sorce:4,
						nickName:'rFonz'
					},					{
						image:'/static/diet/6.jpg',
						sorce:3.5,
						nickName:'小炒肉'
					}
				]
			}
		},
		onLoad() {
			// 模拟请求数据
			setTimeout(()=>{
				this.list = this.requiredData;
			},1000)
		},
		onReachBottom(){
			// 模拟触底刷新
			setTimeout(()=>{
				this.requiredData.push(...this.list);
			},1000)
		},
		onPullDownRefresh(){
			// 模拟上拉刷新
			setTimeout(()=>{
				const newList = this.requiredData.reverse();
				this.list = newList;
				uni.stopPullDownRefresh();
			},1000)
		},
		methods:{
			itemTap(item){
				console.log(item);
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.page{
		min-height: 100vh;
		background: #eee;
	}
</style>
