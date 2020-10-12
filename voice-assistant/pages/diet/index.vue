<template>
	<view>		
	    <uni-nav-bar status-bar='false' @clickLeft="back('/pages/index/index')" left-icon="back" left-text="返回"  title="饮食">
			<view slot="right" class='info'>
						   <navigator url="/pages/uni-feedback/uni-feedback" open-type="navigate">
					  <uni-icons  type="more" size="24" />
						   </navigator>
			</view>
		</uni-nav-bar>
	<view class="all">
    <view class="page" >
	    <view class='infos'>
			<vrow class="row" >
				<vcol span="50"><view class="col title">基本信息</view></vcol>
				<vcol span="30" ></vcol>
				<vcol span="15" >
						<vrow style="justify-content:flex-end; ">
							<vcol span="10"><view class="col">返回</view></vcol>
							<vcol span="5"><view class="col"> <uni-icons  type="forward" size="24" /></view></vcol>                  
						</vrow>
				</vcol>
			</vrow>
			<vrow class="row" >
				<vcol span="24"><view class="col">阶段</view></vcol>
				<vcol span="24"><view class="col">目标体重</view></vcol>
				<vcol span="24"><view class="col">现在体重</view></vcol>
				<vcol span="24"><view class="col">BMI</view></vcol>
			</vrow>
			<vrow class="row" >
				<vcol span="24"><view class="col">减重</view></vcol>
				<vcol span="24"><view class="col">70kg</view></vcol>
				<vcol span="24"><view class="col">74kg</view></vcol>
				<vcol span="24"><view class="col">26.1</view></vcol>
			</vrow>
		</view>
    </view>
	    <view class="content">
        <view style="margin-top: -20upx;">
            <zzx-tabs :items="items" :current="current" @clickItem="onClickItem" ref="mytabs">
			</zzx-tabs>
        </view> 
        <view class='tabs' style="margin-top: 0upx;color:#999999;font-size: 24upx;height: 250upx;">
            <view v-show="current === 0" >
                <vrow  style="border: none;">
                	<vcol span="47">
						<view class="col">今天吃了<text class='cal'>{{cal1}}</text>卡路里</view>
						<view class="col">还能再吃<text class='cal'>{{cal2}}</text>卡路里</view>
					</vcol>
                	<vcol span="47">
						<view class="col">
							<view class='text'>拍照识别卡路里</view>
							<view class='camera' @click="openCamera">
								<image src="/static/images/diet/照相机.png"></image>
							</view>
						</view>
					</vcol>
                </vrow>

			</view>
            <view v-show="current === 1">
				<vrow class="row" >
					<vcol span="10"></vcol>
					<vcol span="70"><view class="col" style="color: #000000;font-size: 40upx;">2020/10/10菜单</view></vcol>
					<vcol span="10"></vcol>
				        
				</vrow>
               <vrow class="row" >
               	<vcol span="31"><view class="col">肉饼蒸蛋</view></vcol>
               	<vcol span="32"><view class="col">藤椒仔鸡</view></vcol>
               	<vcol span="31"><view class="col">干煎板鱼</view></vcol>
        
               </vrow>
               <vrow class="row" >
               	<vcol span="31"><view class="col">元宝大头虾</view></vcol>
               	<vcol span="32"><view class="col">夜开花炒面筋</view></vcol>
               	<vcol span="31"><view class="col">粟米炒鸡粒</view></vcol>
        
               </vrow>
			   <vrow class="row" >
			   	<vcol span="31"><view class="col">白菜梗炒素肠</view></vcol>
			   	<vcol span="32"><view class="col">老黄瓜烧开洋</view></vcol>
			   	<vcol span="31"><view class="col">咸菜百叶肉丝</view></vcol>
			           
			   </vrow>
            </view>
        </view>
<!--         <vrow class="row" style="border-radius: 60upx;" >
         	<vcol span="10"></vcol>
         	<vcol span="70"><view class="col" style="font-size: 40upx;">更多</view></vcol>
         	<vcol span="10"></vcol>
         		
         </vrow> -->
	</view>
		<view class='card'>
			<vrow class="row" >
				<vcol span="50"><view class="col title">饮食方案</view></vcol>
				<vcol span="25" ></vcol>
				<vcol span="15" >
						<vrow style="justify-content:flex-end; ">
							<vcol span="10"><view class="col">更多</view></vcol>
							<vcol span="5"><view class="col"> <uni-icons  type="forward" size="24" /></view></vcol>                  
						</vrow>
				</vcol>
			</vrow>
			<view class='contents'>
				<text style='font-size: 40upx;'>经典均衡饮食</text>
				<p>
					<text>
					日常注意食物多样化，可以保证更全面的营养摄入。促进免疫系统良好运行。
				    </text>
				</p>
				<p>
					<text>
					推荐一天吃12样食物，一周吃25样食物。
				    </text>
				</p>
			</view>

		</view>
		<view class='card'>
			<vrow class="row" >
				<vcol span="60"><view class="col title">食堂热门菜品推荐</view></vcol>
				<vcol span="15" ></vcol>
				<vcol span="15" >
					<navigator url="/pages/diet/food" open-type="navigate">
						<vrow style="justify-content:flex-end; ">
							<vcol span="10"><view class="col">更多</view></vcol>
							<vcol span="5"><view class="col"> <uni-icons  type="forward" size="24" /></view></vcol>                  
						</vrow>
						</navigator>
				</vcol>
			</vrow>
			<view class='contents'>
				<vrow class="row" >
					<vcol span="40">
						<view class="col">
							<view class="wf-item-page">
								<image src="/static/diet/1.jpg" mode="widthFix" class="item-img" />
								<view class="item-info">
									<view class="info-nickname">xxx菜</view>
								</view>
							</view>
					</view>
					</vcol>
					<vcol span="40"><view class="col">
					<view class="wf-item-page">
						<image src="/static/diet/3.jpg"  mode="widthFix" class="item-img" />
						<view class="item-info">
							
							<view class="info-nickname">yyy菜</view>
						</view>
					</view>
					</view></vcol>		        
				</vrow>


			</view>
		</view>
	</view>
	</view>
	
</template>

<script>
	import vrow from '@/components/lml-layout/row.vue'
	import vcol from '@/components/lml-layout/col.vue'
    import zzxTabs from "@/components/zzx-tabs/zzx-tabs.vue"

export default {
    components: { vrow,vcol,zzxTabs },
    data() {
        return {

            items: ['饮食记录','今日菜单'],
            current: 0,
			cal1:0,
			cal2:0
        };
    },
    onLoad() {},
    methods: {
          onClickItem(e) {
            if (this.current !== e.currentIndex) {
                this.current = e.currentIndex;
            }
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
};
</script>

<style>
page{
    height: 100%;
}
.cont{
	margin: 20rpx;
}
.page{
   
    height: 100%;
}
.infos{
	margin: 5rpx;
	border: 2rpx solid #D9D9D9;
	border-radius: 20rpx;
}
.row{     
	/* background: #BBBBBB; */
	align-items:center;
	border-bottom :2rpx solid #D9D9D9;
}
.col{             
	display: flex;
	justify-content: center;        
	flex-wrap: wrap;
	align-items:center;
	border-radius: 20upx;
	
	font-size: 35upx; 

}
.title{
	align-items:center;
	margin: ;
	padding: 0 50upx;
	font-size: 40upx; 
	justify-content:flex-start;
}
.tabs{
	display: flex;
	align-items:center;
	margin: 20upx;
	border :2rpx solid #D9D9D9;
	border-radius: 20upx;
}
.cal{
	margin: 0 10upx;
	color: #000000;
}
.text{
	margin-bottom: -10upx;
}
.camera{
    margin-top: 20upx;
	display: flex;
	align-items:center;
	justify-content: center;  
	width: 100%;
}
.camera image{
	object-fit: cover;
	width: 70px;
	height: 55px;
}
.card{
	margin:20upx;
	border :2rpx solid #D9D9D9;
	border-radius: 20upx;
}
.contents{
	text-align: left;
	text-indent:2em;
    padding: 20upx;
	color: #666666;
}
	.wf-item-page{
		background: #fff;
		overflow: hidden;
		border-radius: 5px;
		width:100%
	}
	
	.item-img{
		width: 100%;
	}
	
	.item-info{
		display: flex;
		align-items: center;
		padding: 5px;
	}
	
	.info-avatar{
		width: 25px;
		height: 25px;
		border-radius: 50%;
		margin-right: 5px;
	}
	
	.info-nickname{
		font-size: 12px;
		color: #333;
	}
	.content{
		
		margin-left: auto;
		margin-right: auto;
		margin-top: 20rpx;
		padding-top: 20rpx;
		padding-bottom: 30rpx;	
		border-radius: 10rpx;
		background-color: #FFFFFF;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
	}
	.all{
		
	}
</style>
