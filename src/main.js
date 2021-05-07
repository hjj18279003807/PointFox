import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

import Book from "@/components/Book.vue"
import Student from "@/components/Student.vue"
import Login from "@/components/Login.vue"
import Work from "@/components/Work.vue"
import Aside from "@/components/Aside.vue"
import Date from "@/components/Date.vue"
import Name from "@/components/Name.vue"
import Address from "@/components/Address.vue"
import Secret from "@/components/Secret.vue"
import River from "@/components/River.vue"
import Leaf from "@/components/Leaf.vue"
import Hupo from "@/components/Hupo.vue"
import Senglin from "@/components/Senglin.vue"
import Qiehuan from "@/components/Qiehuan.vue"
import Bug from "@/components/Bug.vue"
import Jing from "@/components/Jing.vue"
import CNNode from "@/components/CNNode.vue"


const routes = [
  { path: '/', redirect: 'login' },
  { path: '/book', component: Book },
  { path: '/student', component: Student },
  { path: '/login', component: Login },
  { path: '/work', component: Work },
  { path: '/aside', component: Aside },
  { path: '/date', component: Date },
  { path: '/name', component: Name },
  { path: '/address', component: Address },
  { path: '/secret', component: Secret },
  { path: '/hupo', component: Hupo },
  { path: '/leaf', component: Leaf },
  { path: '/river', component: River },
  { path: '/senglin', component: Senglin },
  { path: '/qiehuan', component: Qiehuan },
  { path: '/bug', component: Bug },
  { path: '/jing', component: Jing },
  { path: '/cnnode', component: CNNode},
]

const store = new Vuex.Store({
 state:{count: 0}
})


Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
}).$mount('#app')
