<template>
	<view>
		<uni-nav-bar status-bar='false' @clickLeft="back('/pages/diet/index')" left-icon="back" left-text="返回"  title="饮食推荐">
			<view slot="right" class='info'>
						   <navigator url="/pages/uni-feedback/uni-feedback" open-type="navigate">
					  <uni-icons  type="more" size="24" />
						   </navigator>
			</view>
		</uni-nav-bar>
		<view>
			<view class='title'>
				<text>根据您的需求为您推荐周一到周日的食堂菜单</text>
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
						<vrow >
							<vcol span="30" v-for="(f, i) in item.food" :key="i" >
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
				nowindex: 0,
				list:[
					{
						img_url:'/static/diet/day/1.png',
						title:'周一',
						food:['xx','23','www','dds','dee'],
					},
					{
						img_url:'/static/diet/day/2.png',
						title:'周二',
						food:['xx','23','www','dds','dee'],
					},
					{
						img_url:'/static/diet/day/3.png',
						title:'周三',
						food:['xx','23','www','dds','dee'],
					},
					{
						img_url:'/static/diet/day/4.png',
						title:'周四',
						food:['xx','23','www','dds','dee'],
					},
					{
						img_url:'/static/diet/day/5.png',
						title:'周五',
						food:['xx','23','www','dds','dee'],
					},
					{
						img_url:'/static/diet/day/6.png',
						title:'周六',
						food:['xx','23','www','dds','dee'],
					},
					{
						img_url:'/static/diet/day/7.png',
						title:'周日',
						food:['xx','23','www','dds','dee'],
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
	border-radius: 20rpx;
		margin: 20upx;
	border :10rpx solid #D9D9D9;
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
		font-size: 35upx; 
	
	}
</style>
