import request from '@/utils/request'
import email from '@/views/member/dialog/dialog-email.vue'

/**
 * 获取用户信息
 * @param data
 */
export const _list = () =>
    request({
        url: '/member_bank/indexData',
        method: 'get'
    })
/**
 * 添加
 * @param data
 */
export const _add = (data: any) =>
    request({
        url: '/member_bank/add',
        method: 'post',
        data
    })

/**
 * 删除
 * @param data
 */
export const _delete = (data: any) =>
    request({
        url: '/member_bank/delete',
        method: 'post',
        data
    })
