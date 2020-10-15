<template>
	<view class="xx">
		<uni-nav-bar status-bar='false' @clickLeft="back('/pages/diet/index')" left-icon="back" left-text="返回"  title="饮食推荐">
			<view slot="right" class='info'>
						   <navigator url="/pages/uni-feedback/uni-feedback" open-type="navigate">
					  <uni-icons  type="more" size="24" />
						   </navigator>
			</view>
		</uni-nav-bar>
		<view class="all">
			<view  class="flex-row-start margin-left margin-top one-show" >
				<view class="chat-img flex-row-center">
					<image style="height: ;eight: 75rpx;width: 75rpx;" src="/static/images/register/robot.png" mode="aspectFit"></image>
				</view>
				<view  class="flex"  style="width: 550rpx;">
					<view class="margin-left padding-chat flex-column-start" style="border-radius: 35rpx;background-color: #f9f9f9;">
						<text  style="word-break: break-all;" >我可以根据您的需求和饮食习惯为您推荐每天的最佳饮食组合</text>
						<!-- 消息模板 =>初次问候 -->		
					</view>
				</view>
			</view>

			<view>
				<view class='card' v-for="(item, index) in list" :key="index"
					@tap="openDetail(index)" :ref="'collapse'+index" >
		            <view class='brief'>
						<view class='img_v'>
							<image mode="widthFix" class='img' :src="item.img_url"></image>
							<text>{{item.title}}食谱</text>
						</view>
					</view>
					<view class='detail' v-if="nowindex===index">
						<vrow class="vrow"  v-for="(f1, i) in item.food" :key="i">
							<vcol style="background-color: #0099FF; border-radius: 10px;width: 100%;">
								<view class="col title" style="color: #FFFFFF;margin-left: -40px;">套餐{{i+1}}</view>
							</vcol>
							<vcol span="30" v-for="(f, i) in f1" :key="i" >
								<view class="col" style="color: #8F8F94;">
									<text>
										{{f}}
									</text>
								</view>
							</vcol>
							                
						</vrow>


					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import vrow from '@/components/lml-layout/row.vue'
	import vcol from '@/components/lml-layout/col.vue'
	export default {
		components: { vrow,vcol },
		data() {
			return {
				global:getApp().globalData,
				nowindex: 0,
				list:[]
				// list:[
				// 	{
				// 		img_url:'/static/diet/day/1.png',
				// 		title:'周一',
				// 		food:[['xx','23','www','dds','dee']],
				// 	},
				// 	{
				// 		img_url:'/static/diet/day/2.png',
				// 		title:'周二',
				// 		food:[['xx','23','www','dds','dee']],
				// 	},
				// 	{
				// 		img_url:'/static/diet/day/3.png',
				// 		title:'周三',
				// 		food:[['xx','23','www','dds','dee']],
				// 	},
				// 	{
				// 		img_url:'/static/diet/day/4.png',
				// 		title:'周四',
				// 		food:[['xx','23','www','dds','dee']],
				// 	},
				// 	{
				// 		img_url:'/static/diet/day/5.png',
				// 		title:'周五',
				// 		food:[['xx','23','www','dds','dee']],
				// 	},
				// 	{
				// 		img_url:'/static/diet/day/6.png',
				// 		title:'周六',
				// 		food:[['xx','23','www','dds','dee']],
				// 	},
				// 	{
				// 		img_url:'/static/diet/day/7.png',
				// 		title:'周日',
				// 		food:[['xx','23','www','dds','dee']],
				// 	}
				// 	]
			}
		},
		created(){
			// if (this.global.login==false){
				
			// 	uni.redirectTo({
			// 	    url: '/pages/login/login'
			// 	});
			// 	return;
			// }
			var url=this.global.serive.url;
				self=this;
				
				uni.request({
						url: url+"/dailyfood/recommand/"+self.global.user.userId,
				
					 //    header: {
						// 	'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
						// },
						dataType:'json',
						method:'get',
						success: (res) => {
							
							console.log(res.data);
							let code=res.data['code'];
							if (code==200||code=='200'){

								self.list=self.init(res.data.data)
							}else{
							uni.showToast({
							    title: '加载失败',
							    duration: 2000,
								icon:'none'						
							});							}
							
						},
						fail(){
							uni.showToast({
							    title: '加载失败',
							    duration: 2000,
								icon:'none'						
							});
						}
					});
		},
		methods: {
			init(data){
				let dict={
					'星期一':'/static/diet/day/1.png',
					'星期二':'/static/diet/day/2.png',
					'星期三':'/static/diet/day/3.png',
					'星期四':'/static/diet/day/4.png',
					'星期五':'/static/diet/day/5.png',
					'星期六':'/static/diet/day/6.png',
					'星期日':'/static/diet/day/7.png'
				};
				let items=[]
				for (let key in dict) {
					if (data.hasOwnProperty(key)){
					　　let item = dict[key];
				         
					    let l=[]
						for (let k in data[key]){
							l.push(data[key][k][1])
						}
						items.push({
							img_url:item,
							title:key,
							food:l,
						})
					}
				
				}
				return items
			},
            openDetail(index){
				this.nowindex=index;
			}
		}
	}
</script>

<style>
	@import "/static/css/index-chat.css";
.title{
	font-size: 40upx;
	
	text-align: left;
	text-indent:2em;
}
.card{
	overflow: hidden;
	border-radius: 20rpx;
	margin: 20upx;
	border :10rpx solid #0099FF;
	
	border-bottom: none;

	/* margin-bottom: 10upx; */
}
.img_v{
	
	display: flex;
	align-items:center;
	font-size:50upx ;
	color: #3F536E;
}
	.img{
		margin: 50upx;
		width: 12%;
	}
	.row{
		/* background: #BBBBBB; */
		align-items:center;
		/* border-bottom :2rpx solid #D9D9D9; */
		
	}
	.col{             
		display: flex;
		align-items:center;
		justify-content: center;        
	
		border-radius: 20upx;
		flex-wrap: wrap;
		font-size: 30upx; 
	
	}
	.xx{
		background-color: #E5E5E5;
	}
	.all{
		margin-top: 10px;
		margin-left: auto;
		margin-right: auto;
		width: 94%;
		border-radius: 20upx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
		border :3rpx solid #E5E5E5;
		box-shadow: 0 3px 6px rgba(204, 204, 204, 1.0);
	}
	.vrow{
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10px;
		width: 92%;
		border-radius: 20upx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
		border :3rpx solid #0099FF;
		box-shadow: 0 3px 6px rgba(50, 161, 246, 1.0);
	}
</style>
