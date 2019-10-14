import { _login, _register, _logout, _info } from '@/api/passport'
import { getToken, setToken, removeToken, getMachine } from '@/utils/cookies'
import store from '@/store'
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { _profile } from '@/api/member'

export interface IMemberState {
    token: string
    member_id: number
    member_surename: string
    member_level_id: number
    balance: number
    avatar: string,
    member: any
}

@Module({ dynamic: true, store, name: 'Passport' })
class Member extends VuexModule implements IMemberState {
    public token = getToken() || ''
    public member_id = 0
    public member_surename = ''
    public member_level_id = 0
    public balance = 0.00
    public avatar = ''
    public member = {
        member_init: false,
        member_surename: '',
        member_phone: '',
        member_email: '',
        member_card_no: '',
        member_safe_password: '',
        member_question: '',
        member_level_id: '',
        balance: '0.00',
        can_withdrawal: '0.00',
        avatar: '',
        month_vip: {
            curr_owned_point: '',
            curr_title: '',
            id: '',
            next_point: '',
            next_title: '',
            require_point: '',
            vip_progress_bar: ''
        },
        year_vip: {
            curr_owned_point: '',
            curr_title: '',
            id: '',
            next_point: '',
            next_title: '',
            require_point: '',
            vip_progress_bar: ''
        }
    }

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
        if (token !== '') {
            setToken(token)
        } else {
            removeToken()
        }
    }

    @Mutation
    private SET_MEMBER_ID(member_id: number) {
        this.member_id = member_id
    }

    @Mutation
    private SET_MEMBER_SURENAME(name: string) {
        this.member_surename = name
    }

    @Mutation
    private SET_MEMBER_LEVEL_ID(level_id: number) {
        this.member_level_id = level_id
    }

    @Mutation
    private SET_BALANCE(balance: number) {
        this.balance = balance
    }

    @Mutation
    private SET_AVATAR(avatar: string) {
        this.avatar = avatar
    }

    @Mutation
    private SET_MEMBER(member: any) {
        this.member = member
    }

    @Action
    public async login(member: any) {
        let from = 'pc'
        let machine = getMachine()
        let { username, password, vercode } = member
        username = username.trim()
        let { code, data } = await _login({ username, password, vercode, machine, from }) as any
        if (code === 1) {
            this.SET_TOKEN(data)
            this.getInfo()
        }
        return code
    }

    @Action
    public async register(member: any) {
        let from = 'pc'
        let machine = getMachine()
        let { username, password, rpassword } = member
        username = username.trim()
        let { code, msg, data } = await _register({ username, password, rpassword, machine, from }) as any
        if (code === 1) {
            this.SET_TOKEN(data)
            this.getInfo()
        }
        return {
            code: code,
            msg: msg,
            data: data
        }
    }

    @Action
    public resetToken() {
        this.SET_TOKEN('')
        this.SET_MEMBER_ID(0)
    }

    @Action
    public async getInfo() {
        if (this.token === '') {
            throw Error('GetInfo: token is undefined!')
        }
        const { data } = await _info()
        if (!data) {
            throw Error('Verification failed, please Login again.')
        }
        const { member_id, member_surename, member_level_id, balance, avatar } = data

        this.SET_MEMBER_ID(member_id)
        this.SET_MEMBER_SURENAME(member_surename)
        this.SET_MEMBER_LEVEL_ID(member_level_id)
        this.SET_BALANCE(balance)
        this.SET_AVATAR(avatar)
    }

    @Action
    public async getProfile(p_flush: boolean = false) {
        if (this.member.member_init === false || p_flush === true) {
            const { data } = await _profile()
            if (!data) {
                throw Error('Verification failed, please Login again.')
            }
            this.SET_MEMBER(data)
        }
    }

    @Action
    public async logout() {
        if (this.token === '') {
            throw Error('Logout: token is undefined!')
        }
        let { code, data } = await _logout() as any
        if (code === 1) {
            this.resetToken()
        }
        return code
    }
}

export const MemberModule = getModule(Member)
