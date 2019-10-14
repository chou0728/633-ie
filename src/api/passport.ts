import request from '@/utils/request'

/**
 * 登陆
 * @param data
 */
export const _login = (data: any) =>
    request({
        url: '/passport/index',
        method: 'post',
        data
    })

/**
 * 注册
 * @param data
 */
export const _register = (data: any) =>
    request({
        url: '/passport/register',
        method: 'post',
        data
    })

/**
 * 获取用户信息，包括权限配置
 * @param data
 */
export const _info = () =>
    request({
        url: '/member/info',
        method: 'get'
    })
/**
 * 修改密码
 * @param data
 */
export const _editPassword = (data: any) =>
    request({
        url: '/passport/password',
        method: 'post',
        data
    })

/**
 * 退出登录
 * @param data
 */
export const _logout = () =>
    request({
        url: '/passport/logout',
        method: 'post'
    })

/**
 * 发送邮件验证码
 * @param email 邮箱
 * @param event  事件
 */
export const _sendEmsCode = (email: string, event: string) =>
    request({
        url: '/passport/sendEmsCode',
        method: 'post',
        params: {
            email: email,
            event: event
        }
    })

/**
 * 发送手机验证码
 * @param phone 手机号
 * @param event  事件
 */
export const _sendSmsCode = (phone: string, event: string) =>
    request({
        url: '/passport/sendSmsCode',
        method: 'post',
        params: {
            mobile: phone,
            event: event
        }
    })
