import request from '@/utils/request'

/**
 * 通用数据提交
 * @param p_url     链接
 * @param data      数据
 */
export const _doSubmit = (p_url:string, data: any) =>
    request({
        url: p_url,
        method: 'post',
        data
    })

/**
 * 通用数据获取
 * @param p_url     链接
 * @param data      数据
 * @param type      传输方式
 */
export const _doGet = (p_url:string, data: any) =>
    request({
        url: p_url,
        method: 'get',
        params: data
    })
