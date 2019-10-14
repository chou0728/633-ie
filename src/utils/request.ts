import axios from 'axios'
import Vue from 'vue'
import { AppModule } from '@/store/modules/app'
import { MemberModule } from '@/store/modules/member'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 20000
})

// Request interceptors
service.interceptors.request.use(
    (config) => {
    // Add X-Token header to every request, you can add other custom headers here
        if (MemberModule.token) {
            config.headers['X-Token'] = MemberModule.token
        }
        config.headers['X-Lang'] = AppModule.language
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

// Response interceptors
service.interceptors.response.use(
    (response) => {
    // Some example codes here:
    // code == 20000: valid
    // code == 50008: invalid token
    // code == 50012: already login in other place
    // code == 50014: token expired
    // code == 60204: account or password is incorrect
    // You can change this part for your own usage.
        const res: any = response.data
        console.log(res)
        if (res.code !== 1) {
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                Vue.prototype.$confirm(res.msg || window.i18n.t('login.re_login_msg'), window.i18n.t('login.confirm_logout'), {
                    confirmButtonText: window.i18n.t('login.re_login'),
                    cancelButtonText: window.i18n.t('login.cancel'),
                    type: 'warning'
                }).then(() => {
                    MemberModule.resetToken()
                    location.reload() // To prevent bugs from vue-router
                })
                return Promise.reject(new Error('error with code: ' + res.code))
            }
            return res
        } else {
            return res
        }
    },
    (error) => {
        Vue.prototype.$toasted.show(error.msg, {
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
