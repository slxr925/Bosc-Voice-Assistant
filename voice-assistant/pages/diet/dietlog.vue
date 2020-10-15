<template>
	<view>
		<uni-nav-bar status-bar='false' @clickLeft="back('/pages/index/index')" left-icon="back" left-text="返回"  title="饮食轨迹">
			
			<view slot="right" class='info'>
				<navigator url="/pages/uni-feedback/uni-feedback" open-type="navigate">
					<uni-icons  type="more" size="24" />
				</navigator>
			</view>
		</uni-nav-bar>
		<view>
			<vrow class="row" >
				<vcol span="5"><view class="col"></view></vcol>
				<vcol span="30"><view class="col">{{value[0]}}</view></vcol>
				<vcol span="5"><view class="col">-</view></vcol>
				<vcol span="30"><view class="col">{{value[1]}}</view></vcol>
			    <vcol span="30"><view class="col"><button type="primary" size="mini" @click="isShow=true">选择时间</button></view></vcol>
			</vrow>
			<view class="content">
				<time-line :time_line_list='time_line_list' ref="timeline" location="center" title="我的饮食记录"></time-line>
			</view>
		</view>
		<rangeDatePick 
		    :show="isShow"
		    start="1980-01-01"
		    end="2050-12-01"
		   :value='value'
            @change="change"
			@cancel="isShow=true"
		    themeColor="#4C83D6"
		    fields="day"
		></rangeDatePick>
	</view>
</template>

<script>
	import rangeDatePick from '@/components/pyh-rdtpicker/pyh-rdtpicker.vue';
	import vrow from '@/components/lml-layout/row.vue'
	import vcol from '@/components/lml-layout/col.vue'
	import timeLine from '../../components/xuan-timeLine/xuan-timeLine.vue'
	export default {
		components: {rangeDatePick, vrow,vcol,timeLine},

		data() {
			return {
				value:['2020-09-20','2020-10-15'],
				isShow:false,
				time_line_list:	[		
					{
						title:'2020-10-15',
						title_span:'卡路里：1832',
						content:'苹果、酸奶、小炒肉、西红柿炒蛋'
					},
					{
						title:'2020-10-15',
						title_span:'卡路里：1832',
						content:'苹果、酸奶、小炒肉、西红柿炒蛋'
					},
					{
						title:'2020-10-15',
						title_span:'卡路里：1832',
						content:'苹果、酸奶、小炒肉、西红柿炒蛋'
					},
					{
						title:'2020-10-15',
						title_span:'卡路里：1832',
						content:'苹果、酸奶、小炒肉、西红柿炒蛋'
					},
					{
						title:'2020-10-15',
						title_span:'卡路里：1832',
						content:'苹果、酸奶、小炒肉、西红柿炒蛋'
					},
					{
						title:'2020-10-15',
						title_span:'卡路里：1832',
						content:'苹果、酸奶、小炒肉、西红柿炒蛋'
					},
					]
			}
		},
		onPageScroll() {
		if(this.isclick){
		    this.timer();
		    this.$refs.timeline.getScroll();
		}
		},
		methods: {
			change(value){
				this.isShow=false;
				this.value=value
				// console.log(value)
			},
			timer(){
			    if(this.time>0){
			        this.isclick=false;
			        this.time--;
			        setTimeout(this.timer,1)
			    }
			    else{
			        this.isclick=true;
			        this.time=10
			    }
			}
		}
	}
</script>

<style>
.row{     
	/* background: #BBBBBB; */
	align-items:center;
	border-bottom :2rpx solid #D9D9D9;
	
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
