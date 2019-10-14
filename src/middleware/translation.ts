import { Route } from 'vue-router'
import { SUPPORTED_LANGUAGES } from '@/constants/languages'
import store from '@/store'
import { getDefaultLocale } from '@/utils/lang'
/**
 * 检查网址的lang参数
 * @param to
 * @param from
 * @param next
 */
const translationMiddleware = (to:Route, from:Route, next: any) => {
    const routeLang = to.params.lang
    const defaultLang = getDefaultLocale()

    // 网址的lang参数不存在或为不支持的语系，重导回首页，並加入defaultLang
    if (!routeLang || !SUPPORTED_LANGUAGES.includes(routeLang)) {
        return next({ name: 'Home', params: { lang: defaultLang } })
    }

    // 网址的lang参数存在且为支持的语系，则改变网站语系并写入store及cookies
    store.dispatch('SetLanguage', routeLang)
    return next()
}

export default translationMiddleware
