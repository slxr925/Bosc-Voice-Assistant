<template>
<view >
	<uni-nav-bar status-bar='false' @clickLeft="back('/pages/index/index')" left-icon="back" left-text="返回"  right-icon="more" title="上银生活助手"></uni-nav-bar>

	<view  class="flex-row-start margin-left margin-top one-show" >
		<view class="chat-img flex-row-center">
			<image style="height: ;eight: 75rpx;width: 75rpx;" src="/static/images/register/robot.png" mode="aspectFit"></image>
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
			<text style="color: #838383;font-size: 30rpx;margin-top: 5rpx;">猜你想问</text>	
			<image src="/static/images/index/问答.png" class="question"></image>
		</view>
		<view class="answerRight">
			<view v-for="(item,index) in questionList">
				<text @click="answer(item)" style="margin-top: 10rpx;color: #0A98D5;" :key="index" >{{item}}</text>	
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
    <view class="splitpart">
		<hr class="hrcss">
		<view class="fenge">
			<span class="history">以上为历史消息</span>
		</view>
		
	</view>
	<cul-chat anotherAvatar="/static/images/robt.png" meAvatar="/static/images/user/avatar.jpg" :question='question'  @submit="sendMsg">
		
	</cul-chat>
			
</view>
</template>

<script>
	
import culchat from "@/components/cul-chat/cul-chat"
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar"
import carousel from '@/components/vear-carousel/vear-carousel'
import face from "@/components/face/face"
import footbar from "@/components/fooBar/fooBar"
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
				question:'',
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
				
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
				 this.question=option.question; //打印出上个页面传递的参数。
		
			 },
			created(){
				//this.question=this.$route.query.question;
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
			sendMsg(message){
				let val=message.message;
				return message.callback(val+"："+"阿巴阿巴阿巴");
			},
		}
	}
</script>
<style>
	@import "/static/css/index-chat.css";
	.mainContent{
		
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
		margin-left: 115rpx;
	}
	.hrcss{
		width: 98%;
		border: #C0C0C0 dashed 1rpx;
		
	}
	.splitpart{
		margin-top: 50rpx;
		margin-bottom: 40rpx;
		width: 100%;
	}
	.fenge{
		position: relative;
		width: 100%;
	}
	.history{
		width: 178rpx;
		left:300rpx;
		background-color: #FFFFFF;
		position: absolute;
		top: -25rpx;
		color: #C0C0C0;
		font-size: 25rpx;
	}
	.question{
		width: 100%;
		height: 34%;
		margin-left:-10rpx; 
	}
</style>
