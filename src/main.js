import Vue from 'vue'
import App from './App.vue'
// 引入uview 只能在Uniapp中使用
// import uView from "uview-ui";
// Vue.use(uView);
// 引入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入antdv
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
/**-----------------组件库引入完毕---------------*/
import router from '@/router';

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
