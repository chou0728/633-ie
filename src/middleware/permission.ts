import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Route } from 'vue-router'
import { MemberModule } from '@/store/modules/member'
import { PermissionModule } from '@/store/modules/permission'
import { getMachine, setMachine } from '@/utils/cookies'
import Fingerprint2 from 'fingerprintjs2'
import { getDefaultLocale } from '@/utils/lang'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: Route, from: Route, next: any) => {
    const defaultLang = getDefaultLocale()

    // Start progress bar
    NProgress.start()

    // 获取MACHINE
    const machine = getMachine()
    if (!machine || machine === '' || machine === undefined) {
        await Fingerprint2.getV18(await function (components) {
            setMachine(components)
        })
    }

    // 未知的路由，导向至404
    if (Object.keys(to.meta).length === 0) {
        next({ name: '404', params: { lang: defaultLang } })
        return
    }

    // 需要permission的页面，判断有无token
    if (to.meta.login === true) {
        // 无token则导向回首页
        if (!MemberModule.token) {
            next({ name: 'Home', params: { lang: defaultLang } })
            return
        }

        // 有token但是member_id === 0，获取用户信息，获取路由信息
        if (MemberModule.token && MemberModule.member_id === 0) {
            await MemberModule.getInfo()

            // 把路由传到权限
            PermissionModule.generateRoutes([])
            router.addRoutes(PermissionModule.dynamicRoutes)
            // Hack: ensure addRoutes is complete
            // Set the replace: true, so the navigation will not leave a history record
            next({ ...to, replace: true })
            return
        }

        // 有token且member_id > 0，直接通过
        next()
        return
    }

    // 不需要permission的页面
    if (to.meta.login === false) {
        // 有token但是member_id === 0，获取用户信息，获取路由信息
        if (MemberModule.token && MemberModule.member_id === 0) {
            await MemberModule.getInfo()

            // 把路由传到权限
            PermissionModule.generateRoutes([])
            router.addRoutes(PermissionModule.dynamicRoutes)
            // Hack: ensure addRoutes is complete
            // Set the replace: true, so the navigation will not leave a history record
            next({ ...to, replace: true })
            return
        }

        next()
    }
})

router.afterEach(() => {
    // Finish progress bar
    NProgress.done()
})
