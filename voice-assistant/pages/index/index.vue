<template>
	<view>
		<uni-nav-bar status-bar='false'  title="上银生活助手">
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
		<view>
				<view  class="flex-row-start margin-left margin-top one-show" >
					<view class="chat-img flex-row-center">
						<image style="height: 75rpx;width: 75rpx;" src="/static/images/robt.png" mode="aspectFit"></image>
					</view>
					<view  class="flex"  style="width: 500rpx;">
						<view class="margin-left padding-chat flex-column-start" style="border-radius: 35rpx;background-color: #f9f9f9;">
							<text  style="word-break: break-all;" >你好?我是上行员工助理,请问有什么问题可以帮助您?</text>
							<!-- 消息模板 =>初次问候 -->
							<view class="flex-column-start"  style="color: #2fa39b;">
								<text style="color: #838383;font-size: 30rpx;margin-top: 5rpx;">你可以这样问我:</text>
								<text @click="answer(item)" style="margin-top: 10rpx;" 
								v-for="(item,index) in questionList" :key="index" >{{item}}</text>
								<view class="flex-row-start  padding-top-sm">
									<text class="my-neirong-sm" style="font-size: 25rpx;">没有你要的答案?</text>
									<text class="padding-left" style="color: #007AFF;" @click="changeQuestion">换一批</text>
								</view>
								<view class="flex-row-start  padding-top-sm">
									<text class="my-neirong-sm" style="font-size: 25rpx;">也可以在下方输入你想问的问题</text>
								</view>
							</view>

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
					{url:'/pages/index/index',src:'/static/footBar/home.jpg'},
					{url:'/pages/chat/chat',src:'/static/footBar/voice.jpg'},
					{url:'/pages/user/user',src:'/static/footBar/user.jpg'}
				],
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
				   }],
				   // 分类菜单
				   categoryList: [
				   	{ id: 1, name: '新闻', img: '/static/img/category/1.png',url:'/pages/new/index' },
				   	{ id: 2, name: '家电', img: '/static/img/category/2.png' },
				   	{ id: 3, name: '服饰', img: '/static/img/category/3.png' },
				   	{ id: 4, name: '日用', img: '/static/img/category/4.png' },
				   	{ id: 5, name: '蔬果', img: '/static/img/category/5.png' },
				   	{ id: 6, name: '运动', img: '/static/img/category/6.png' },

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
            openCamera(){
				uni.chooseImage({
				    count: 6,
				    sizeType: ['original', 'compressed'],
				    sourceType: ['camera','album'],
				    success: function(res) {
				        // 预览图片
				        uni.previewImage({
				            urls: res.tempFilePaths,
				            longPressActions: {
				                itemList: ['发送给朋友', '保存图片', '收藏'],
				                success: function(data) {
				                    console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				                },
				                fail: function(err) {
				                    console.log(err.errMsg);
				                }
				            }
				        });
				    }
				    });
				
			}


	
		}
	}
</script>

<style>
	@import "/static/css/index-chat.css";
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
	width: 92%;
	margin: 0 4%;
	padding: 0 0 30upx 0;
	border-bottom: solid 2upx #f6f6f6;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	}
	.category{
		width: 33%;
		margin-top: 50upx;
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

	
</style>
