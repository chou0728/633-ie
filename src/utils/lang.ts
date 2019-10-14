import { getLanguage } from './cookies'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, ZHONG_HUA } from '@/constants/languages'

export const getDefaultLocale = () => {
    // cookie有则取cookie的
    const cookieLang = getLanguage()
    if (cookieLang) {
        return cookieLang
    }

    // 浏览器默认有则取浏览器默认的
    let navigatorLang = window.navigator.language.toLowerCase().split('-')[0]
    navigatorLang = navigatorLang === ZHONG_HUA ? DEFAULT_LANGUAGE : navigatorLang
    if (SUPPORTED_LANGUAGES.includes(navigatorLang)) {
        return navigatorLang
    }

    // 以上都没有则指定为 DEFAULT_LANGUAGE
    return DEFAULT_LANGUAGE
}
