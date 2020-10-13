<template>
    <view>
		<uni-nav-bar status-bar='false' @clickLeft="back('/pages/index/index')" left-icon="back" left-text="返回"  title="金融知识">
			<view slot="right" class='info'>
						   <navigator url="/pages/uni-feedback/uni-feedback" open-type="navigate">
					  <uni-icons  type="more" size="24" />
						   </navigator>
			</view>
		</uni-nav-bar>
		<view :style='{"margin-top":statusBarHeight}' >
			
        <web-view :webview-styles='webviewStyles' src="http://www.xyxjl.cn/jinrong/"></web-view>
		</view>
    </view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		data() {
			return {
				statusBarHeight:'20px',
				webviewStyles: {
				                    progress: {
				                        color: 'white',
										marginTop:'20px',
										top:'20px'
				                    }
				                }
			}
		},
		onLoad(){
			//console.log(this.statusBarHeight)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
