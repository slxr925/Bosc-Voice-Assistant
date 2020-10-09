<template>
	<view class='face' @click="toCenter">
		<image class="avatar"  :src="headPicUrl"></image>
	</view>
</template>

<script>
	import facePic from "@/components/face/face.jpg"
	export default {
		props: {
			headPicUrl: {
				type: String,
				default: facePic
			},

		},	
		data() {
			return {
				
			};
		},
		methods:{
			toCenter(){
				if (getApp().globalData.login){
					this.back('/pages/user/user');
				}else{
					this.back('/pages/login/login');
				}
			}
		}
	}
</script>

<style>
	.face {
		padding: 1upx;
		border-radius: 100%;
		border: solid 1upx #fff;
		width: 10vw;
		height: 10vw;
	}
	.avatar {
		width: 10vw;
		height: 10vw;
		border-radius: 100%;
	}

</style>
