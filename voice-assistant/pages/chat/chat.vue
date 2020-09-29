<template>

	<view >
         <button @click="openVoice">语音输入</button>
		 <text >{{title}}</text>
	</view>
</template>

<script>

 export default {

 	data() {
 		return {
			"title":''
		   }
 	},
 	onLoad() {
 
 	},
 	methods: {

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

