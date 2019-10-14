import email from '@/views/member/dialog/dialog-email.vue'

export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

export const isArray = (arg: any) => {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
}

/**
 * 判断身份证是否正确
 * @param code
 */
export const idCodeValid = (code: string) => {
    if (code === '') {
        return false
    }
    code = code.toUpperCase()
    if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        return false
    }
    if (code.length === 18) {
        code = code.toUpperCase()
        let codes = code.split('')
        let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
        let sum: number = 0
        let ai: any = 0
        let wi: number = 0
        for (let i = 0; i < 17; i++) {
            ai = codes[i]
            wi = factor[i]
            sum += ai * wi
        }
        if (parity[sum % 11] !== 'X' && parity[sum % 11] !== parseInt(codes[17])) {
            return false
        }
        if (parity[sum % 11] === 'X' && parity[sum % 11] !== codes[17]) {
            return false
        }
    }
    return true
}

/**
 * 判断EMAIL是否正确
 * @param email
 */
export const emailValid = (email: string) => {
    let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
    if (email === '') {
        return false
    } else if (!reg.test(email)) {
        return false
    } else {
        return true
    }
}

/**
 * 判断手机号是否正确
 * @param email
 */
export const phoneValid = (phone: string) => {
    let reg = new RegExp('^1[3,4,5,6,7,8,9][0-9]{9}$')
    if (phone === '') {
        return false
    } else if (!reg.test(phone)) {
        return false
    } else {
        return true
    }
}

/**
 * 检查密码是否符合要求
 *
 * @param string    p_str
 * @param number p_len
 */
export const passwordValid = (p_str: string, p_len: number) => {
    let regd = new RegExp('^[0-9]+$')
    let regs = new RegExp('^[a-zA-Z]+$')
    if (p_str.length < p_len) {
        return false
    }
    if (regd.test(p_str)) {
        return false
    }
    if (regs.test(p_str)) {
        return false
    }
    return true
}
