<template>
	<view>
		<uni-nav-bar status-bar='false' @clickLeft="back('/pages/index/index')" left-icon="back" left-text="返回"  right-icon="more" title="个人中心"></uni-nav-bar>
	
	<view class="user">
		<!-- 头部 --> 
		<view class="user-wrap">
			<view class="info">
				<image class="avatar" mode="aspectFill" :src="userInfo.headPicUrl"></image>
				<view class="nickname">{{ userInfo.nickName }}</view>
			</view>
		</view>

	<!-- 	订单状态
		<view class="order-status">
			<view class="status-wrap">
				单元格
				<view class="cell">
					<view class="cell-left">
						<image class="cell-icon" src="/static/images/user/icon-order.png" mode="aspectFill"></image>
						<view class="cell-text">全部订单</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>

				订单状态
				<view class="status-list">
					<view class="status-item" hover-class="btn-hover" v-for="(item, index) in orderStatusList" :key="index">
						<view class="item-icon" :class="item.icon"></view>
						<view class="item-text">{{ item.name }}</view>
					</view>
				</view>
			</view>
		</view>

		滑动导航
		<view style="border-radius: 20rpx; overflow: hidden; margin: 0 20rpx;">
			<com-nav :list="list" :col="4"></com-nav>
		</view>
 -->
		<!-- 用户功能 -->
		<view class="com-item">
			<view class="com-wrap">
				<view class="cell" v-for="(item, index) in userList" :key="index">
					<view class="cell-left">
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					<view class="uservalue">{{item.value}}</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view>
		</view>

		<!-- 用户服务 -->
		<view class="com-item">
			<view class="com-wrap">
				<view class="cell" v-for="(item, index) in serverList" :key="index">
					<view class="cell-left">
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
import comNav from './components/com-nav.vue'
export default {
	components: {
		comNav
	},
	data() {
		return {
			userInfo: {
				headPicUrl: '/static/images/user/avatar.jpg',
				nickName: '上行小美'
			},
			userList: [
				{
					title: '昵称',
					icon: '/static/images/user/昵称.png',
					path: 'address-list',
					value: '上行小美'
				},
				{
					title: '性别',
					icon: '/static/images/user/性别.png',
					path: 'collect-list',
					value: '女'
				},
				{
					title: '年龄',
					icon: '/static/images/user/年龄.png',
					path: 'browse-list',
					value: '18'
				},
								{
					title: '身高',
					icon: '/static/images/user/身高.png',
					path: 'address-list',
					value: '175 cm'
				},
				{
					title: '体重',
					icon: '/static/images/user/体重.png',
					path: 'collect-list',
					value: '50 kg'
				},
			],
			serverList: [
				{
					title: '饮食目标',
					icon: '/static/images/user/饮食目标.png',
					path: 'kefu'
				},
				{
					title: '饮食偏好',
					icon: '/static/images/user/饮食偏好.png',
					path: 'help',
					value: '增重'
				},
				{
					title: '手机',
					icon: '/static/images/user/手机.png',
					text: '1.0.0',
					value: '13066666666'
				},
				{
					title: '邮箱',
					icon: '/static/images/user/邮箱.png',
					path: 'kefu',
					value: 'shxm@bosc.cn'
				}
			]
		};
	}
};
</script>

<style lang="scss">
page {
	background: #f2f2f2;
}
.btn-hover {
	background: #f2f2f2 !important;
}
.user {
	.user-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 45vw;
		padding: 5rpx;
		z-index: 9;
		border-radius: 0 0 20% 20%;
		background: url('/static/images/user/userback.png') no-repeat;
		background-size: cover;
		.setting {
			color: #fff;
			position: absolute;
			top: 100rpx;
			left: 60rpx;
			font-size: 50rpx;
		}
		.info {
			position: absolute;
			text-align: center;
			.avatar {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
			}
			.nickname {
				color: #fff;
				font-size: 28rpx;
			}
		}
	}
	.order-status {
		padding: 0 20rpx;
		margin-top: -5vw;
		.status-wrap {
			border-radius: 25rpx;
			overflow: hidden;
			.status-list {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				background: #fff;
				padding-top: 30rpx;
				padding-bottom: 30rpx;
				.status-item {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.item-icon {
						line-height: 1;
						font-size: 65rpx;
						color: #bbb;
					}
					.item-text {
						font-size: 28rpx;
						color: #666;
						margin-top: 5rpx;
					}
				}
			}
		}
	}
	.com-item {
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 20rpx;
		.com-wrap {
			border-radius: 25rpx;
			overflow: hidden;
		}
	}
	.cell {
		height: 100rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #f8f8f8;
		&:active {
			background: #f2f2f2;
		}
		&:last-child {
			border-bottom: none !important;
		}
		.cell-left {
			display: flex;
			align-items: center;
			.cell-icon {
				width: 50rpx;
				height: 50rpx;
			}
			.cell-text {
				color: #666;
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}
		.iconfont {
			font-size: 40rpx;
			color: #999;
		}
	}
	.uservalue{
		margin-left: 240px;
		color: #007AFF;
	}
}
</style>
