import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterConf from './router'
import VueResource from 'vue-resource'

//注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

RouterConf(router)

router.start(App, '#app')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
