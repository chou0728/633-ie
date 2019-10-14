import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { constantRoutes } from '@/router'
import store from '@/store'

export const filterAsyncRoutes = (routes: RouteConfig[]) => {
    const res: RouteConfig[] = []
    routes.forEach(route => {
        const tmp = { ...route }
        tmp.component = (resolve) => require(['@/views' + tmp.path + '.vue'], resolve)
        if (tmp.children && tmp.children.length > 0) {
            tmp.children = filterAsyncRoutes(tmp.children)
        }
        res.push(tmp)
    })
    return res
}

export interface IPermissionState {
    routes: RouteConfig[]
    dynamicRoutes: RouteConfig[]
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
    public routes: RouteConfig[] = [];
    public dynamicRoutes: RouteConfig[] = [];

    @Mutation
    private SET_ROUTES(routes: RouteConfig[]) {
        this.routes = constantRoutes.concat(routes)
        this.dynamicRoutes = routes
    }

    @Action
    public generateRoutes(routes: RouteConfig[]) {
        let accessedRoutes = filterAsyncRoutes(routes)

        // 添加未找到路由情况
        accessedRoutes.push({ path: '*', redirect: '/404', meta: { hidden: true } })

        this.SET_ROUTES(accessedRoutes)
    }
}

export const PermissionModule = getModule(Permission)
