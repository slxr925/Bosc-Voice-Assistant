import Vue from 'vue'
import App from './App'
// 第一步：引入 Vuex
import Vuex from 'vuex';
Vue.use(Vuex);

// 第二步：引入 Vusui-app-layer 弹层
import vusLayer from './components/vusui-app-layer/vusui-layer'; //vusui-app-layer 的存放目录
Vue.use(vusLayer);

// 第三步：new Vuex.Store()
const store = new Vuex.Store();


App.mpType = 'app'

const app = new Vue({
	store,
    ...App
	
})
app.$mount()

