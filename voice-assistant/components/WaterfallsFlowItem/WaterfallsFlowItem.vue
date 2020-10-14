<template>
	<view class="wf-item-page">
		<image :src="item.image" mode="widthFix" class="item-img" />
		<view class="item-info">
			<view class="info-nickname">{{item.nickName}}</view>
		</view>
		<view class="item-info">
			<view class="example-body">
				<uni-rate allow-half  size='18' :value="item.score" />
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				require:true
			}
		},
		    methods: {

		    }
	}
</script>

<style lang="scss" scoped>
	.wf-item-page{
		background: #fff;
		overflow: hidden;
		border-radius: 5px;
	}
	
	.item-img{
		width: 100%;
	}
	
	.item-info{
		display: flex;
		align-items: center;
		justify-content: center;  
		padding: 2px;
		
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
</style>
