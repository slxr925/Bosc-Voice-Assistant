<script>
	import Vue from 'vue'
	Vue.prototype.back=function(path){
		 uni.redirectTo({
			 url:path
		 });
	 }
	
	export default {
		globalData: {  
            login: false,
			serive:{
				//url:'http://192.168.43.198:8081'
				url:'http://49.235.152.129:18081'
			},

        },  
		
		onLaunch: function() {
			console.log('App Launch')
			uni.onTabBarMidButtonTap(function(e){
				uni.showToast({
					title:'点我干嘛',
					duration: 1500,
					icon:'none'
				});
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '/common/uni.css';
	@import "/common/css/iconfont.css";

</style>
