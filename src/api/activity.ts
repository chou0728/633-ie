import request from '@/utils/request'

/**
 * 获取活动
 * @param data
 */
export const _list = (data: any) =>
    request({
        url: '/activity/getActivityList',
        method: 'post',
        data
    })
/**
 * 参与活动
 * @param data
 */
export const _participate = (data: any) =>
    request({
        url: '/activity/participate',
        method: 'post',
        data
    })
/**
 * 获取可领红利
 * @param data
 */
export const _bonus = () =>
    request({
        url: '/member/profile',
        method: 'get'
    })
/**
 * 实名认证
 * @param data
 */
export const _profileVerify = (data: any) =>
    request({
        url: '/member/info',
        method: 'post',
        data
    })

/**
 * 绑定邮箱
 * @param data
 */
export const _bindEmail = (data: any) =>
    request({
        url: '/member/bindemail',
        method: 'post',
        data
    })

/**
 * 绑定手机
 * @param data
 */
export const _bindPhone = (data: any) =>
    request({
        url: '/member/bindphone',
        method: 'post',
        data
    })

/**
 * 修改密码
 *
 * @param data
 */
export const _password = (data: any) =>
    request({
        url: '/member/passport',
        method: 'post',
        data
    })

/**
 * 提款
 *
 * @param data
 */
export const _withdrawal = (data: any) =>
    request({
        url: '/member/withdrawal',
        method: 'post',
        data
    })
