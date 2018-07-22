import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

Vue.use(VueI18n)
Vue.config.productionTip = false

import i18n from './lang/i18n'


import mainHeader from './components/Header'
Vue.component("mainHeader", mainHeader)
new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
    mounted() {}
}).$mount('#app')