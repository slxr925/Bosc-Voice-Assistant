<template>

<hycarmera @runMethod="getCarmera"/>
</template>

<script>
 import hycamera from "@/components/shusheng-hycamera/shusheng-hycamera.vue"
 export default {

	 components: {
		hycamera	 
	 },
 	data() {
 		return {
			
		   }
 	},
 	onLoad() {
 
 	},
 	methods: {
			getCarmera(type,res){
				console.log(type,res)
				//type 返回类型 photo 拍照  vedio 摄像
				//res 返回数据   具体什么格式我也忘记了，自己打印去取
			},
 		//语音识别
         openVoice() {
 			let vm = this;
 			let options = {};
 			//#ifdef APP-PLUS || APP-PLUS-NVUE
 			options.engine = 'iFly';
 			options.punctuation = false; // 是否需要标点符号 
 			options.timeout = 10 * 1000;
 			plus.speech.startRecognize(options, function(s) {
 				vm.title = s;
 				console.log(vm.title) //拿到语音识别的结果
 				//下面是逻辑  
 		
 				plus.speech.stopRecognize();
 			});
 			//#endif
 			// #ifdef H5
 			  //  alert("只有h5平台才有alert方法")
 			// #endif
 		}
 	}
 }
</script>

