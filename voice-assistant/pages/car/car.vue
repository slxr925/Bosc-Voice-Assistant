<template>
	<view>
		<uni-nav-bar status-bar='false' @clickLeft="back('/pages/index/index')" left-icon="back" left-text="返回"  title="班车">
			<view slot="right" class='info'>
				<navigator url="/pages/uni-feedback/uni-feedback" open-type="navigate">
					<uni-icons  type="more" size="24" />
				</navigator>
			</view>
		</uni-nav-bar>
		<view class='title'>
			班车安排如下
		</view>
		<view class='card'>
			<vrow class="row tablehead">
				<vcol span="18"><view class="col ">2号线</view></vcol>
				<vcol span="22"><view class="col">出发</view></vcol>
				<vcol span="22"><view class="col">到达</view></vcol>
				<vcol span="16"><view class="col">首班车</view></vcol>
				<vcol span="16"><view class="col">某班车</view></vcol>
			</vrow>
			<vrow class="row " >
				<vcol span="18"><view class="col">上班</view></vcol>
				<vcol span="22"><view class="col">地铁2号线 张江高科站</view></vcol>
				<vcol span="22"><view class="col">张江园区北门</view></vcol>
				<vcol span="16"><view class="col">7:10</view></vcol>
				<vcol span="16"><view class="col">8:00</view></vcol>
			</vrow>
			<vrow class="row " >
				<vcol span="18"><view class="col">下班</view></vcol>
				<vcol span="22"><view class="col">张江园区北门</view></vcol>
				<vcol span="22"><view class="col">地铁2号线 广兰路站</view></vcol>
				<vcol span="16"><view class="col">17:00</view></vcol>
				<vcol span="16"><view class="col">18:20</view></vcol>
			</vrow>
		</view>
		<view class='card'>
			<vrow class="row tablehead" >
				<vcol span="18"><view class="col">9号线</view></vcol>
				<vcol span="22"><view class="col">出发</view></vcol>
				<vcol span="22"><view class="col">到达</view></vcol>
				<vcol span="16"><view class="col">首班车</view></vcol>
				<vcol span="16"><view class="col">某班车</view></vcol>
			</vrow>
			<vrow class="row" >
				<vcol span="18"><view class="col">上班</view></vcol>
				<vcol span="22"><view class="col">地铁9号线 民雷路站</view></vcol>
				<vcol span="22"><view class="col">张江园区北门</view></vcol>
				<vcol span="16"><view class="col">7:35</view></vcol>
				<vcol span="16"><view class="col">8:15</view></vcol>
			</vrow>
			<vrow class="row" >
				<vcol span="18"><view class="col">下班</view></vcol>
				<vcol span="22"><view class="col">张江园区西门</view></vcol>
				<vcol span="22"><view class="col">地铁9号线 民雷路站</view></vcol>
				<vcol span="16"><view class="col">17:00</view></vcol>
				<vcol span="16"><view class="col">18:20</view></vcol>
			</vrow>
		</view>
		<view class='card'>
			<vrow class="row tablehead" >
				<vcol span="18"><view class="col">12号线</view></vcol>
				<vcol span="22"><view class="col">出发</view></vcol>
				<vcol span="22"><view class="col">到达</view></vcol>
				<vcol span="16"><view class="col">首班车</view></vcol>
				<vcol span="16"><view class="col">某班车</view></vcol>
			</vrow>
			<vrow class="row" >
				<vcol span="18"><view class="col">上班</view></vcol>
				<vcol span="22"><view class="col">地铁12号线 金京路站</view></vcol>
				<vcol span="22"><view class="col">张江园区北门</view></vcol>
				<vcol span="16"><view class="col">7:25</view></vcol>
				<vcol span="16"><view class="col">8:05</view></vcol>
			</vrow>
			<vrow class="row" >
				<vcol span="18"><view class="col">下班</view></vcol>
				<vcol span="22"><view class="col">张江园区西门</view></vcol>
				<vcol span="22"><view class="col">地铁12号线 金京路站</view></vcol>
				<vcol span="16"><view class="col">17:00</view></vcol>
				<vcol span="16"><view class="col">18:20</view></vcol>
			</vrow>
		</view>
		<view class="title">定时班车</view>
		<view class='card'>
			<!-- <vrow class="row" > -->
			<!-- 	<vcol span="20" class="banche"><view class="col">定时班车</view></vcol>
				<vcol span="72"> -->
					<vrow class="row tablehead" >
						<vcol span="20"><view class="col">发车</view></vcol>
						<vcol span="20"><view class="col">到达</view></vcol>
						<vcol span="54"><view class="col">到达时间</view></vcol>
					</vrow>
					<vrow class="row" >
						<vcol span="20"><view class="col">张江园区北门</view></vcol>
						<vcol span="20"><view class="col">地铁2号线 广兰路站</view></vcol>
						<vcol span="54">
							<vrow class="row" >
								<vcol span="34"><view class="col">周一 周三 周五</view></vcol>
								<vcol span="20"><view class="col">11:45 19:00 20:00 20:40 20:45</view></vcol>
							</vrow>
							<vrow class="row" >
								<vcol span="16"><view class="col">周二 周四</view></vcol>
								<vcol span="16"><view class="col">11:45 19:00 20:00</view></vcol>
							</vrow>
						</vcol>

					</vrow>
					<vrow class="row" >
						<vcol span="20"><view class="col">张江园区北门</view></vcol>
						<vcol span="20"><view class="col">地铁9号线 民雷路站 地铁12号线 金京路站</view></vcol>
						<vcol span="32">
							<vrow class="row" >
								<vcol span="16"><view class="col">周一 周三 周五</view></vcol>
								<vcol span="16"><view class="col">20:40 20:45</view></vcol>
							</vrow>
							<vrow class="row" >
								<vcol span="16"><view class="col">周二 周四</view></vcol>
								<vcol span="16"><view class="col">21:20</view></vcol>
							</vrow>
						</vcol>
					
					</vrow>
					<vrow class="row" >
						<vcol span="20"><view class="col">地铁2号线 张江高科站</view></vcol>
						<vcol span="20"><view class="col">张江园区北门</view></vcol>
						<vcol span="32">
							<vrow class="row" >
								<vcol span="16"><view class="col">周一 周二 周三 周四 周五</view></vcol>
								<vcol span="16"><view class="col">12:45</view></vcol>
							</vrow>

						</vcol>
					
					<!-- </vrow> -->
				<!-- </vcol> -->
			</vrow>


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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.title{
	/* text-indent:1em; */
	padding-top: 10rpx;
	padding-left: 21rpx;
	color: #666666;
	font-size: 40upx;
}
.card{
	margin:20upx;
	border :2rpx solid #D9D9D9;
	border-radius: 20upx;
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
.tablehead{
	background-color: #0077EE;
	border-radius: 20upx;
	color: #F7F7F7;
}
.banche{
	background-color: #007AFF;
}
</style>
