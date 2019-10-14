<template>
    <div>
        <div
            v-loading="loading"
            class="m-userInfo"
        >
            <h4 class="u-title">
                转账
            </h4>
            <div class="m-bank">
                <common-money cur-action="transfer" />
                <div class="m-transfer">
                    <div class="transfer1">
                        <div class="node">
                            <h4>
                                转账
                                <span class="icon icon-zz" />
                            </h4>
                            <div class="m-form">
                                <form action="">
                                    <div class="u-select">
                                        <span class="mark" />
                                        <select
                                            v-model="form.transferfrom"
                                            name="transferfrom"
                                        >
                                            <option
                                                v-for="(item) in transferFromThirdpartys"
                                                :key="item.id"
                                                :value="item.id"
                                            >
                                                {{ item.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="u-select">
                                        <span class="mark" />
                                        <select
                                            v-model="form.transferto"
                                            name="transferto"
                                        >
                                            <option
                                                v-for="(item) in transferToThirdpartys"
                                                :key="item.id"
                                                :value="item.id"
                                            >
                                                {{ item.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="u-input">
                                        <input
                                            v-model="form.amount"
                                            type="text"
                                            placeholder="输入金额"
                                        >
                                    </div>
                                    <div class="u-btn">
                                        <a
                                            href="javascript:void(0);"
                                            class="btn"
                                            @click="doTransfer"
                                        >立即转账</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="transfer2">
                        <div class="node">
                            <h4>
                                账户资金
                                <span class="icon icon-zhzj" />
                            </h4>
                            <ul>
                                <li>
                                    主账户：￥{{ mainAccount.balance }}
                                    <router-link
                                        :to="{name: 'MemberDeposit'}"
                                        class="link pull-right"
                                    >
                                        存款
                                    </router-link>
                                </li>
                                <li>
                                    提款限额：￥{{ mainAccount.money_limit }}
                                    <router-link
                                        :to="{name: 'MemberWithdrawal'}"
                                        class="link link1 pull-right"
                                    >
                                        提款
                                    </router-link>
                                </li>
                                <li
                                    v-for="(item) in needTransferThirdpartys"
                                    :key="item.id"
                                >
                                    {{ item.name }}：￥{{ item.balance }}
                                    <span
                                        v-if="item.maintenance === 1"
                                        class="pull-right"
                                    >维护中</span>
                                    <div
                                        v-if="item.maintenance !== 1"
                                        class="links pull-right"
                                    >
                                        <a
                                            href="javascript:void(0);"
                                            @click="changeFromAndTo(10000, item.id, 1)"
                                        >转入</a> | <a
                                            href="javascript:void(0);"
                                            @click="changeFromAndTo(item.id, 10000, 2)"
                                        >转出</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="transfer3">
                        <div class="node">
                            <h4>
                                无需转账账户
                                <span class="icon icon-zh" />
                            </h4>
                            <ul>
                                <li
                                    v-for="(item) in noTransferThirdpartys"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'
    import CommonMoney from './components/common-money.vue'
    import { _doSubmit, _doGet } from '@/api/common.ts'

    @Component({
        components: {
            CommonMoney
        }
    })
    export default class Transfer extends Vue {
        private loading: boolean = false
        private thirdpartys: any = []
        private mainAccount: any = {}
        // 1转入 2转出
        private transferStatus: number = 1
        private form: any = {
            transferfrom: 10000,
            transferto: 0,
            amount: ''
        }

        private created() {
            MemberModule.getProfile()
        }

        get member() {
            return MemberModule.member
        }

        get noTransferThirdpartys() {
            return this.thirdpartys.filter(function (thirdparty: any) {
                return thirdparty.purse_type === 1
            })
        }

        get needTransferThirdpartys() {
            return this.thirdpartys.filter(function (thirdparty: any) {
                return thirdparty.purse_type === 2
            })
        }

        /**
         * 获取第一个需要转账的ID
         */
        get firstNeedTransferThirdpartyId() {
            let idx
            for (idx in this.transferToThirdpartys) {
                return this.transferToThirdpartys[idx].id
            }
            return 10000
        }

        /**
         * 上面显示
         */
        get transferFromThirdpartys() {
            let self = this
            return this.thirdpartys.filter(function (thirdparty: any) {
                return (thirdparty.purse_type === 0 && self.transferStatus === 1) || (thirdparty.purse_type === 2 && self.transferStatus === 2)
            })
        }

        /**
         * 下面显示
         */
        get transferToThirdpartys() {
            let self = this
            return this.thirdpartys.filter(function (thirdparty: any) {
                return (thirdparty.purse_type === 0 && self.transferStatus === 2) || (thirdparty.purse_type === 2 && self.transferStatus === 1)
            })
        }

        private mounted() {
            this.flushPage()
        }

        /**
         * 重载页面的一些信息
         */
        private flushPage() {
            MemberModule.getProfile(true)
            this.transferInfo()
        }

        /**
         * 切换转入转出状态
         * @param p_from
         * @param p_to
         * @param p_status
         */
        private changeFromAndTo(p_from: number, p_to: number, p_status: number) {
            this.form.transferfrom = p_from
            this.form.transferto = p_to
            this.transferStatus = p_status
        }

        /**
         * 检查余额是否足够
         */
        private checkAmount() {
            let check: boolean = false
            let self = this
            this.thirdpartys.forEach(function (thirdparty: any) {
                if (thirdparty.id === self.form.transferfrom && parseFloat(thirdparty.balance) >= self.form.amount) {
                    check = true
                }
            })
            return check
        }

        /**
         * 初始化获取第三方信息
         */
        private transferInfo() {
            this.loading = true
            _doGet('/member/transfer', []).then(response => {
                this.loading = false
                if ((response as any).code === 0) {
                    this.$toasted.show((response as any).msg, {
                        type: 'error'
                    })
                } else {
                    this.thirdpartys = (response.data as any).thirdpartys
                    this.form.transferto = this.firstNeedTransferThirdpartyId
                    this.mainAccount = this.thirdpartys[0]
                }
            })
        }

        /**
         * 操作转账
         */
        private doTransfer() {
            this.loading = true
            // 检查余额是否足够
            if (!this.checkAmount()) {
                this.$toasted.show(window.i18n.t('member.error.notEnoughBalance'), {
                    type: 'error'
                })
                return
            }
            _doSubmit('/member/transfer', this.form).then(response => {
                this.loading = false
                if ((response as any).code === 0) {
                    this.$toasted.show((response as any).msg, {
                        type: 'error'
                    })
                } else {
                    this.flushPage()
                    this.$toasted.show((response as any).msg, {
                        type: 'success'
                    })
                }
            })
        }
    }
</script>
