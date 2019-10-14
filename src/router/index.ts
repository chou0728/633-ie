import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import translationMiddleware from '@/middleware/translation'

/* Layout */
import Layout from '@/components/Layout/index.vue'
import LayoutMember from '@/components/Layout/member.vue'

Vue.use(Router)

/*
  Note: sub-menu only appear when children.length>=1
  Detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
*/

/*
  name:'router-name'             the name is required when using <keep-alive>
    https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    roles: ['admin', 'editor']   will control the page roles (allow setting multiple roles)
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    alwaysShow: true             if true, will always show the root menu (default is false)
                                 if false, hide the root menu when has less or equal than one children route
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    noCache: true                if true, the page will not be cached (default is false)
    affix: true                  if true, the tag will affix in the tags-view
  }
*/

/**
 ConstantRoutes
 a base page that does not have permission requirements
 all roles can be accessed
 */
export const constantRoutes: RouteConfig[] = [
    {
        path: '/:lang/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue'),
        beforeEnter: translationMiddleware,
        meta: { hidden: true, login: false }
    },
    {
        path: '/:lang/loading',
        name: 'Loading',
        component: () => import('@/views/loading/index.vue'),
        beforeEnter: translationMiddleware,
        meta: { hidden: true, login: false }
    },
    {
        path: '/',
        beforeEnter: translationMiddleware,
        meta: { hidden: true, login: false }
    },
    {
        path: '/:lang',
        component: Layout,
        beforeEnter: translationMiddleware,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/index/index.vue'),
                meta: { title: 'Home', noCache: true, login: false }
            },
            {
                path: 'sport',
                name: 'Sport',
                component: () => import('@/views/sport/index.vue'),
                meta: { hidden: true, login: false }
            },
            {
                path: 'sport/gb',
                name: 'SportGb',
                component: () => import('@/views/sport/gb.vue'),
                meta: { title: 'GbSport', noCache: true, login: true }
            },
            {
                path: 'sport/shaoba',
                name: 'SportShaoba',
                component: () => import('@/views/sport/shaoba.vue'),
                meta: { title: 'GbSport', noCache: true, login: true }
            },
            {
                path: 'casino',
                name: 'Casino',
                component: () => import('@/views/casino/index.vue'),
                meta: { title: 'Casino', noCache: true, login: false }
            },
            {
                path: 'casino/ag',
                name: 'CasinoAg',
                component: () => import('@/views/casino/ag.vue'),
                meta: { title: 'Casino Ag', noCache: true, login: true }
            },
            {
                path: 'casino/bbin',
                name: 'CasinoBbin',
                component: () => import('@/views/casino/bbin.vue'),
                meta: { title: 'Casino Bbin', noCache: true, login: true }
            },
            {
                path: 'casino/play_tech',
                name: 'CasinoPlayTech',
                component: () => import('@/views/casino/play-tech.vue'),
                meta: { title: 'Casino Play Tech', noCache: true, login: true }
            },
            {
                path: 'casino/deluxe_gold',
                name: 'CasinoDeluxeGold',
                component: () => import('@/views/casino/deluxe-gold.vue'),
                meta: { title: 'Casino Deluxe Gold', noCache: true, login: true }
            },
            {
                path: 'game',
                name: 'Game',
                component: () => import('@/views/game/index.vue'),
                meta: { hidden: true, login: false }
            },
            {
                path: 'game/play',
                name: 'GamePlay',
                component: () => import('@/views/game/play.vue'),
                meta: { hidden: true, login: false }
            },
            {
                path: 'chess',
                name: 'Chess',
                component: () => import('@/views/chess/index.vue'),
                meta: { hidden: true, login: false }
            },
            {
                path: 'chess/ky',
                name: 'ChessKy',
                component: () => import('@/views/chess/play.vue'),
                meta: { hidden: true, login: true }
            },
            {
                path: 'ticket',
                name: 'Ticket',
                component: () => import('@/views/ticket/index.vue'),
                meta: { hidden: true, login: false }
            },
            {
                path: 'ticket/play',
                name: 'TicketPlay',
                component: () => import('@/views/ticket/play.vue'),
                meta: { hidden: true, login: true }
            },
            {
                path: 'promotion',
                name: 'Promotion',
                component: () => import('@/views/promotion/index.vue'),
                meta: { hidden: true, login: false }
            },
            {
                path: 'member',
                component: LayoutMember,
                children: [
                    {
                        path: '',
                        name: 'Member',
                        component: () => import('@/views/member/index.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'deposit',
                        name: 'MemberDeposit',
                        component: () => import('@/views/member/deposit.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'transfer',
                        name: 'MemberTransfer',
                        component: () => import('@/views/member/transfer.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'withdrawal',
                        name: 'MemberWithdrawal',
                        component: () => import('@/views/member/withdrawal.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'history',
                        name: 'MemberHistory',
                        component: () => import('@/views/member/history.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'history_bet',
                        name: 'MemberHistoryBet',
                        component: () => import('@/views/member/history-bet.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'history_day',
                        name: 'MemberHistoryDay',
                        component: () => import('@/views/member/history-day.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'vip',
                        name: 'MemberVip',
                        component: () => import('@/views/member/vip.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'promotion',
                        name: 'MemberPromotion',
                        component: () => import('@/views/member/promotion.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'message',
                        name: 'MemberMessage',
                        component: () => import('@/views/member/message.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'recommend',
                        name: 'MemberRecommend',
                        component: () => import('@/views/member/recommend.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    }
                ]
            },
            {
                path: 'about',
                component: LayoutMember,
                children: [
                    {
                        path: 'responsible',
                        name: 'AboutResponsible',
                        component: () => import('@/views/about/responsible.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    },
                    {
                        path: 'self_control',
                        name: 'AboutSelfControl',
                        component: () => import('@/views/about/self-control.vue'),
                        meta: { hidden: true, noCache: true, login: true }
                    }
                ]
            }
        ]
    }
]

const createRouter = () => new Router({
    // mode: 'history', // Disabled due to Github Pages doesn't support this, enable this if you need.
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    base: process.env.BASE_URL,
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
