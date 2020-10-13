<template>
	<view>
		<uni-nav-bar status-bar='false' @clickLeft="back('/pages/index/index')" left-icon="back" left-text="返回"  title="饮食推荐">
			<view slot="right" class='info'>
						   <navigator url="/pages/uni-feedback/uni-feedback" open-type="navigate">
					  <uni-icons  type="more" size="24" />
						   </navigator>
			</view>
		</uni-nav-bar>
		<view>
			<view class='title'>
				<text >根据您的需求为您推荐周一到周日的食堂菜单</text>
			</view>
			<view>
				<view class='card' v-for="(item, index) in list" :key="index"
					@tap="openDetail(index)" :ref="'collapse'+index" >
		            <view class='brief'>
						<view class='img_v'><image class='img' :src="item.img_url"></image></view>
						<view class='label'>
							
							<text>{{item.title}}</text>
						</view>
					</view>
					<view class='detail' v-if="nowindex===index">
						帆帆帆帆
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				nowindex: 0,
				list:[
					{
						img_url:'/static/diet/day/1.png',
						title:'周一',
						
					},
					{
						img_url:'/static/diet/day/2.png',
						title:'周二',
						
					},
					{
						img_url:'/static/diet/day/3.png',
						title:'周三',
						
					},
					{
						img_url:'/static/diet/day/4.png',
						title:'周四',
						
					},
					{
						img_url:'/static/diet/day/5.png',
						title:'周五',
						
					},
					{
						img_url:'/static/diet/day/6.png',
						title:'周六',
						
					},
					{
						img_url:'/static/diet/day/7.png',
						title:'周日',
						
					}
					]
			}
		},
		methods: {
            openDetail(index){
				this.nowindex=index;
			}
		}
	}
</script>

<style>
.title{
	font-size: 45upx;
	
	text-align: left;
	text-indent:2em;
}
.card{
	overflow: hidden;
	border-radius: 5px;
}
.img_v{
	margin: 50upx;
	width: 40%;
}
.img{
	width: 100%;
	
}
</style>
