import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
Vue.config.productionTip = false
new Vue({
  // render会接收一个参数, 是Vue的构造函数, 用来创建Vue实例
  render: h => h(App),

  store,
  router,

  // 借用beforeCreate函数,在Vue的原型对象上创建一个中央事件总线, 指向vm实例对象
  // 此时所有的组件实例对象都能够通过原型链访问到这个属性($bus)
  beforeCreate(){
    // console.log(this)
    Vue.prototype.$bus = this
  }
}).$mount('#app')
