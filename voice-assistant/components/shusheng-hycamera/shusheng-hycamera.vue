<template>
	<view class="hycamera">

		<camera   class="hycamera-camera" device-position="back" flash="auto"></camera>
		<view :class="buttonClass" @touchstart="buttonStart" @touchend="buttonEnd">
			{{buttonNumber}}
		</view>
	</view>
</template>

<script>
	 
	export default {
		data() {
			return {
				buttonClass: "hycamera-button",
				isLX: false,
				buttonNumber:""
			}
		},
		created() {
			uni.authorize({
			    scope: 'scope.record',
			    success() {
			      
			    }
			})
			
			this.cameraCTX = uni.createCameraContext();
	
		},
		methods: {
		
			buttonStart() {
				
				let self = this
				this.buttonNumber = 0;
				this.buttonMethod = setInterval(function() {
					self.buttonNumber++
					
					if (self.buttonNumber > 0) {
						self.buttonClass = "hycamera-button-lx"
						if (self.isLX == false) {
							self.isLX = true
						
							self.cameraCTX.startRecord({
								success: (res) => {},
								fail(res) {
									console.log("========= 调用开始录像失败 ===========",res)
								}
							})
						}
					}
				}, 1000)
			},
			buttonEnd() {
				let self = this
				clearInterval(this.buttonMethod)
				this.buttonClass = "hycamera-button"
				this.isLX = false
				
				if (this.buttonNumber > 0) {
			
					this.cameraCTX.stopRecord({
						success: (res) => {
							this.$emit("runMethod","vedio",res)
							self.buttonNumber = ""
						},
						fail() {}
					})
				} else {
		
					this.cameraCTX.takePhoto({
						quality: 'high',
						success: (res) => {
							this.$emit("runMethod","photo",res)
							self.buttonNumber = ""

						}
					})
				}
				
				
			}
		}
	}
</script>

<style>
	.hycamera {
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: 10000000;
	}

	.hycamera-camera {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 1;
	}

	.hycamera-button {
		height: 100px;
		width: 100px;
		position: absolute;
		z-index: 2;
		background-color: #3F536E;
		bottom: 50px;
		left: 50%;
		margin-left: -50px;
		border: 2px solid #ffffff;
		border-radius: 50px;
		transition: all 0.2s linear;
		text-align: center;
		line-height: 100px;
		color:#ffffff;
		font-size: 30px;
	}

	.hycamera-button:active {
		background-color: #1c2632;
	}

	.hycamera-button-lx {
		height: 100px;
		width: 100px;
		position: absolute;
		z-index: 2;
		background-color: #ca0000;
		bottom: 50px;
		left: 50%;
		margin-left: -50px;
		border: 2px solid #ffffff;
		border-radius: 50px;
		text-align: center;
		line-height: 100px;
		color:#ffffff;
		font-size: 30px;
	}
	.hycamera-qh{
		height: 40px;
		width: 40px;
		position: absolute;
		z-index: 2;
		bottom: 80px;
		left: 20px;
	}
</style>
