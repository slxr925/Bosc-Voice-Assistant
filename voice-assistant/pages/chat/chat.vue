<template>
<view >
	<uni-nav-bar status-bar='false' @clickLeft="back('/pages/index/index')" left-icon="back" left-text="返回"  right-icon="more" title="上银生活助手"></uni-nav-bar>
		
<!-- 
		<button  @click="openCamera">拍照</button> -->
		<cul-chat anotherAvatar="/static/images/robt.png" meAvatar="/static/images/user/avatar.jpg" :question='question'  @submit="sendMsg"></cul-chat>
			
	</view>
</template>

<script>
import culchat from "@/components/cul-chat/cul-chat"
 export default {
		components: {

			culchat
		},
 	data() {
 		return {
			question:''
		   }
 	},
onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数 
		 this.question=option.question; //打印出上个页面传递的参数。

	 },
	created(){
		//this.question=this.$route.query.question;
	},
 	methods: {
 
        sendMsg(message){
			let val=message.message;
			return message.callback(val+"："+"阿巴阿巴阿巴");
		},

 	}
 }
</script>

