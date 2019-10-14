import request from '@/utils/request'

/**
 * 获取用户信息
 * @param data
 */
export const _profile = () =>
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

/**
 * 获取消息列表
 *
 * @param data
 */
export const _message = (data: any) =>
    request({
        url: '/member/message',
        method: 'post',
        data
    })

/**
 * 设置消息已读
 *
 * @param data
 */
export const _messageRead = (data: any) =>
    request({
        url: '/member/messageRead',
        method: 'post',
        data
    })

/**
 * 删除消息
 *
 * @param data
 */
export const _messageDelete = (data: any) =>
    request({
        url: '/member/messageDelete',
        method: 'post',
        data
    })

/**
 * 获取vip福利
 *
 */
export const _vip = () =>
    request({
        url: '/member/vip',
        method: 'get'
    })
