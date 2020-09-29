<template>
	
	<view class="content">
       <uni-nav-bar left-icon="person"  right-icon="more" title="上银生活助手"></uni-nav-bar>
       <carousel :img-list="imgList" url-key="url" @selected="selectedBanner"/>
        
       <navigator url="/pages/chat/chat" open-type="navigate">
           <button>聊天</button>
       </navigator>

	</view>
</template>


<script>
	 import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	 import carousel from '@/components/vear-carousel/vear-carousel'
	 
	export default {
		components: {
			uniNavBar,
			carousel,
				 
		},
		data() {
			return {
				title: 'Hello',
				imgList: [{
					   url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					   id: 1
				   },{
					   url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					   id: 2
				   },{
					   url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
					   id: 3
				   },{
					   url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					   id: 4
				   }]
			}
		},
		onLoad() {

		},
		methods: {
			selectedBanner(item, index) {
			    console.log('🥒', item, index)
			},
			//跳转
			linkTo( url,params) {
				params = params ||{};
				uni.navigateTo({
					url: url,
				});
			}

	
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
