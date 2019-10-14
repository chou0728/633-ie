import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getDefaultLocale } from '@/utils/lang'

import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui built-in lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui built-in lang
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    cn: {
        ...zhLocale,
        ...elementZhLocale
    }
}

const i18n = new VueI18n({
    locale: getDefaultLocale(),
    messages
})

export default i18n
