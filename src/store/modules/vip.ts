import store from '@/store'
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { _vip } from '@/api/member'

export interface IVip {
    memberVip: any
}

@Module({ dynamic: true, store, name: 'vip' })
class Vip extends VuexModule implements IVip {
    public memberVip = {
        member: '',
        next_point: '',
        owned_point: '',
        next_vip_title: '',
        require_point: '',
        curr_vip: {
            title: '',
            upgrade_gift_amount: '',
            upgrade_gift_multiple: '',
            birthday_gift_amount: '',
            birthday_gift_multiple: '',
            topped_gift_amount: '',
            topped_gift_multiple: '',
            deposit_bonus: '',
            deposit_bonus_limit: '',
            deposit_bonus_multiple: '',
            rescue_amount: '',
            rescue_amount_limit: '',
            rescue_amount_multiple: '',
            free_withdrawal_num: 0
        },
        next_vip: {
            title: '',
            upgrade_gift_amount: '',
            upgrade_gift_multiple: '',
            birthday_gift_amount: '',
            birthday_gift_multiple: '',
            topped_gift_amount: '',
            topped_gift_multiple: '',
            deposit_bonus: '',
            deposit_bonus_limit: '',
            deposit_bonus_multiple: '',
            rescue_amount: '',
            rescue_amount_limit: '',
            rescue_amount_multiple: '',
            free_withdrawal_num: 0
        }
    }

    @Mutation
    private SET_MEMBER_VIP(vip: any) {
        this.memberVip = vip
    }

    @Action
    public async getMemberVip() {
        const { data } = await _vip()
        this.SET_MEMBER_VIP(data)
    }
}

export const VipModule = getModule(Vip)
