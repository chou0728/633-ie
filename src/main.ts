import Vue from 'vue'

import {
    DatePicker,
    Pagination,
    Loading,
    MessageBox
} from 'element-ui'

import '@/styles/index.scss'
import '@/assets/css/bootstrap.css'
import '@/assets/css/main.css'
import 'swiper/dist/css/swiper.min.css'
import '@/assets/css/additional.css'

import SvgIcon from 'vue-svgicon'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import i18n from '@/lang' // Internationalization
import Toasted from 'vue-toasted'
import '@/icons/components'
import '@/middleware/permission'
import '@/utils/error-log' // Error log
import '@/registerServiceWorker'
import 'babel-polyfill'

declare global {
    interface Window {
        i18n: any
    }
}
window.i18n = i18n

Vue.use(DatePicker, { i18n: (key: string, value: string) => i18n.t(key, value) })
Vue.use(Pagination, { i18n: (key: string, value: string) => i18n.t(key, value) })
Vue.use(Loading)

Vue.prototype.$confirm = MessageBox.confirm

Vue.use(SvgIcon, {
    tagName: 'svg-icon',
    defaultWidth: '1em',
    defaultHeight: '1em'
})

Vue.use(Toasted, {
    position: 'top-center',
    duration: 2000
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App)
}).$mount('#app')
