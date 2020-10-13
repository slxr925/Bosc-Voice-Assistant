<template>
	<view class="mainContent">
		<uni-nav-bar status-bar='false'  title="上银智能助理">
		   <view slot="left" class='info'>
				<face></face>
		   </view>
		   <view slot="right" class='info'>
			   <navigator url="/pages/uni-feedback/uni-feedback" open-type="navigate">
		   		  <uni-icons  type="more" size="24" />
			   </navigator>
		   </view>
		</uni-nav-bar>
		<view class="content">

		   <carousel :img-list="imgList" url-key="url" @selected="selectedBanner"/>
			
			<!-- 分类列表 -->
			<view class="category-list">
				<view
					class="category"
					v-for="(row, index) in categoryList"
					:key="index"
					
				>
				<navigator :url="row.url" open-type="navigate">
					<view class="img"><image :src="row.img"></image></view>
					<view class="text">{{ row.name }}</view>
				</navigator>
				</view>
			</view>
			
<!-- 		   <navigator url="/pages/chat/chat" open-type="navigate">
			   <button>聊天</button>
		   </navigator> -->

		
		</view>
		<view class="robotclass">
				<view  class="flex-row-start margin-left margin-top one-show" >
					<view class="chat-img flex-row-center">
						<image style="height: 75rpx;width: 75rpx;" src="/static/images/register/robot.png" mode="aspectFit"></image>
					</view>
					<view  class="flex"  style="width: 550rpx;">
						<view class="margin-left padding-chat flex-column-start" style="border-radius: 35rpx;background-color: #f9f9f9;">
							<text  style="word-break: break-all;" >您好!我是您的智能语音助理,请问有什么需要帮助的吗？</text>
							<!-- 消息模板 =>初次问候 -->
							

						</view>
					</view>
					
				</view>
				<view class="flex-column-start answercontent" >
					<view class="answerleft" style="margin-left: 13px;">
						<text style="color: #838383;font-size: 30rpx;margin-top: 5rpx;">猜你
						想问</text>	
						<image src="/static/images/index/问答.png">
							
						</image>
					</view>
					<view class="answerRight">
						<view v-for="(item,index) in questionList">
							<text @click="answer(item)" style="margin-top: 10rpx;color: #0A98D5;" 
					 :key="index" >{{item}}</text>	
					 <hr class="hrcss">
						</view>	
					<view class="flex-row-start  padding-top-sm">
						<text class="my-neirong-sm" style="font-size: 25rpx;">没有你想问的问题?</text>
						<text class="padding-left" style="color: #007AFF;" @click="changeQuestion">换一批</text>
				
					</view>
						<hr class="hrcss">
					<view class="flex-row-start  padding-top-sm">
						<text class="my-neirong-sm" style="font-size: 25rpx;">也可以在下方自由输入</text>
					</view>
					</view>	
				</view>
		</view>
        <footbar :urlList='urlList' :currentIndex='1' ></footbar>
		</view>
</template>

<script>
	 import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar"
	 import carousel from '@/components/vear-carousel/vear-carousel'
	 import face from "@/components/face/face"
     import footbar from "@/components/fooBar/fooBar"
	 import culchat from "@/components/cul-chat/cul-chat"

	 export default {
		components: {
			uniNavBar,
			carousel,
			face,
			footbar,
			culchat,
		
		},
		data() {
			return {
				auiToast: {
					msg: '网络连接错误，请稍后再试',
					icon: '',
					location: 'bottom',
					direction: 'col',
					duration: 2000,
				},
				questionList:[
					'今天中午食堂有什么菜',
					'班车时刻表',
				],
				questions:[
					'食堂今日的菜单？',
					'今天食堂的水果是什么',
					'今天中午吃什么',
					'今天有什么青菜',
					'食堂今天早上有面条吗？',
					'食堂下周菜单里有炒饭吗？ ',
					'面条是不是5元。',
					'面条的价格是多少？ ',
					'面条多少钱？ ',
					'我想吃面条菜，什么时候有这个菜',
					'晚上班车几点',
					'早上班车几点',
					'班车在哪里上车  ',
					'班车可以到哪里',
					'晚上9点下班还有班车吗 ',
					'9号线班车中间停其他地铁站吗？',
					'今晚x号线有班车吗  ',
					'x号线班车在哪个门坐  ',
					'x号线班车到哪个地铁站'
				],
				urlList:[
					{url:'/pages/index/index',src:'/static/footBar/主页.png'},
					{url:'/pages/chat/chat',src:'/static/footBar/语音.png'},
					{url:'/pages/user/user',src:'/static/footBar/个人信息.png'}
				],
				title: 'Hello',
				imgList: [{
					   url: '/static/images/index/1.jpg',
					   id: 1
				   },{
					   url: '/static/images/index/2.jpg',
					   id: 2
				   },{
					   url: '/static/images/index/3.jpg',
					   id: 3
				   }],
				   // 分类菜单
				   categoryList: [
				   	{ id: 1, name: '饮食健康', img: '/static/images/index/饮食.png',url:'/pages/diet/index'},
				   	{ id: 2, name: '班车时刻', img: '/static/images/index/班车.png', url:'/pages/car/car'},
				   	{ id: 3, name: '设备报修', img: '/static/images/index/报修.png' },
				   	{ id: 4, name: '今日要闻', img: '/static/images/index/新闻.png',url:'/pages/new/index'},
				   	{ id: 5, name: '金融知识', img: '/static/images/index/知识.png',url:'/pages/jingrong/jingrong'},
				   	{ id: 6, name: '等多服务', img: '/static/images/index/更多.png' },
				   ],
			}
		},
		onLoad() {

		},
		methods: {
			changeQuestion(){
                
				let max=this.questions.length;
				this.questionList=[];
				let index=-1;
				for (let i=0;i<2;i++){
					index=Math.floor(Math.random() * (max  + 1)) ;
					this.questionList.push(this.questions[index]);
				}
				
				
			},
			answer(text){
				this.back('/pages/chat/chat?question='+text)
			},
			selectedBanner(item, index) {
			    console.log('🥒', item, index)
			},



	
		}
	}
</script>

<style>
	@import "/static/css/index-chat.css";
	.mainContent{
		background-color: #E5E5E5;
		padding-bottom: 130rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

.category-list {
	width: 95%;
	margin: 0 4%;
	padding: 0 0 30upx 0;
	border-bottom: solid 2upx #f6f6f6;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	
	border-radius: 10rpx;
	background-color: #FFFFFF;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
	margin-top: 15rpx;
	}
	.category{
		width: 33%;
		margin-top: 30upx;
		display: flex;
		flex-wrap: wrap;
		display: flex;
		justify-content: center;
		}
		.img {
			width: 100%;
			display: flex;
			justify-content: center;

			}
			image {
				width: 9vw;
				height: 9vw;
			}
		.text {
			margin-top: 16upx;
			width: 100%;
			display: flex;
			justify-content: center;
			font-size: 24upx;
			color: #3c3c3c;
		}

	.robotclass{
		width: 95%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20rpx;
		padding-top: 20rpx;
		padding-bottom: 30rpx;	
		border-radius: 10rpx;
		background-color: #FFFFFF;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
	}
	.answercontent{
		color: #2fa39b;
		margin-left: 40rpx;
		margin-right: 40rpx;
		margin-top: 30rpx;
		background-color: #f9f9f9;
		position: relative;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
	}
	.answerleft{
		width: 80rpx;
		height: 100%;
		position: absolute;
		border-right: #C0C0C0 dashed 1rpx;
	}
	.answerRight{
		margin-left: 105rpx;
	}
	.hrcss{
		width: 98%;
		border: #C0C0C0 dashed 1rpx;
		
	}
	
</style>
