<template>
    <div>
        <div class="m-userInfo">
            <h4 class="u-title">
                存款
            </h4>
            <div class="m-bank">
                <common-money cur-action="deposit" />
            </div>
            <div
                v-if="order !== null"
                class="m-deposit"
            >
                您有订单在进行中：<br>
                订单号：{{ order.order_sn }}<br>
                订单金额：{{ order.charge_amount }}<br>
                <div class="u-btn clearfix">
                    <a
                        href="javascript:void(0);"
                        class="btn pull-right"
                        @click="cancelPay( order.id )"
                    >取消订单</a>
                </div>
            </div>
            <div
                v-if="order === null"
                class="m-deposit"
            >
                <ul class="nav nav-tabs clearfix">
                    <li
                        :class="paymentType === 'Quick' ? 'active' : ''"
                        @click="handlePayWay('Quick')"
                    >
                        <a href="javascript:void(0)">
                            <input
                                v-model="paymentType"
                                type="radio"
                                value="Online"
                            >
                            <span class="icon icon-kj" />快捷支付
                        </a>
                    </li>
                    <li
                        :class="paymentType === 'Online' ? 'active' : ''"
                        @click="handlePayWay('Online')"
                    >
                        <a href="javascript:void(0)">
                            <input
                                v-model="paymentType"
                                type="radio"
                                value="Online"
                            >
                            <span class="icon icon-zx" />在线支付
                        </a>
                    </li>
                    <li
                        :class="paymentType === 'Union' ? 'active' : ''"
                        @click="handlePayWay('Union')"
                    >
                        <input
                            v-model="paymentType"
                            type="radio"
                            value="Online"
                        >
                        <a href="javascript:void(0)">
                            <span class="icon icon-qq" />银联UNP
                        </a>
                    </li>
                </ul>
                <div class="step-one">
                    <p class="tip">
                        存款到帐户，请选择您的存款方式及银行，并填写存款金额。 存款前请务必确认收款银行卡信息是否准确，如因错误信息填写造成无法到账，损失由用户自行承担
                    </p>
                    <h5>第一步：选择支付通道</h5>
                    <div class="choose clearfix">
                        <div
                            v-for="(item, idx) in paymentAgents"
                            :key="idx"
                            class="u-radio"
                        >
                            <input
                                id="r1"
                                v-model="postForm.payment_agent_id"
                                class="radio"
                                type="radio"
                                name="radio"
                                :value="item.id"
                            >
                            <label for="r1">{{ item.title }}</label>
                        </div>
                    </div>
                    <h5 v-if="paymentType === 'Online'">
                        第二步：选择银行
                    </h5>
                    <div
                        v-if="paymentType === 'Online'"
                        class="choose choose-banks clearfix"
                    >
                        <div
                            v-for="(item, idx) in paymentBanks"
                            :key="idx"
                            class="u-radio"
                            @click="handleBank(idx)"
                        >
                            <input
                                :id="'bank' + idx"
                                v-model="postForm.bank_id"
                                class="radio"
                                type="radio"
                                name="bank_id"
                                :value="idx"
                            >
                            <label :for="'bank' + idx">
                                <img
                                    :src="'/static/images/pay-' + item + '.png'"
                                    alt=""
                                >
                            </label>
                        </div>
                    </div>
                    <div
                        v-if="paymentType === 'Online'"
                        class="u-input"
                    >
                        <p class="tip">
                            因中国建设银行接口维护，快捷支付暂不支持使用该行卡支付。给您带来不便，敬请谅解！
                        </p>
                    </div>
                    <h5 v-if="paymentType !== 'Online'">
                        第二步：输入金额
                    </h5>
                    <div class="u-input">
                        <input
                            v-model="postForm.amount"
                            type="text"
                            placeholder="输入存款金额"
                        >
                    </div>
                    <div class="u-btn clearfix">
                        <a
                            href="javascript:void(0);"
                            class="btn pull-right"
                            @click="getPayUrl"
                        >下一步</a>
                    </div>
                    <p class="tip">
                        注：存款前请务必确认收款银行卡信息是否准确，如因错误信息填写造成无法到账，损失由用户自行承担。
                    </p>
                </div>
            </div>
        </div>
        <div
            id="postPay"
            style="display: none"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'

    import CommonMoney from './components/common-money.vue'
    import { _doSubmit, _doGet } from '@/api/common'

    @Component({
        components: {
            CommonMoney
        }
    })
    export default class Deposit extends Vue {
        private loading: boolean = false
        private order: any = null
        private setting: any
        private postForm: any = {
            payment_agent_id: 1,
            bank_id: 1,
            amount: ''
        }
        private payments: any = []
        private paymentType: string = 'Quick'

        get member() {
            return MemberModule.member
        }

        get paymentAgents(): any {
            let tmp: any = []
            let self = this
            if (this.payments) {
                tmp = this.payments.filter(function (item: any) {
                    return item.type_class === self.paymentType
                })
                for (let entry of tmp) {
                    self.postForm.payment_agent_id = entry.id
                    break
                }
            }
            return tmp
        }

        get paymentBanks(): any {
            let tmp: any = []
            let self = this
            if (this.paymentAgents) {
                for (let entry of this.paymentAgents) {
                    if (entry.id === self.postForm.payment_agent_id) {
                        tmp = entry.banks
                    }
                }
            }
            return tmp
        }

        private created() {
            let self = this
            MemberModule.getProfile()
            this.fetchData()
            setInterval(function () {
                self.checkDeposit()
            }, 2000)
        }

        private mounted() {
            this.flushPage()
        }

        private fetchData() {
            let self = this
            this.loading = false
            _doGet('/member/deposit', []).then(response => {
                self.order = response.data.order
                self.payments = response.data.payments
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 重载页面的一些信息
         */
        private flushPage() {
            MemberModule.getInfo()
        }

        /**
         * 选择支付方式
         */
        private handlePayWay(p_class: string) {
            this.paymentType = p_class
        }

        /**
         * 选择银行
         */
        private handleBank(p_bankId: number) {
            this.postForm.bank_id = p_bankId
        }

        /**
         * 存款后检查是否入账
         */
        private checkDeposit() {
            if (this.order === null) {
                return
            }
            _doSubmit('/member/depositCheck', { id: this.order.id }).then(response => {
                if ((response as any).code === 1) {
                    this.fetchData()
                    this.$toasted.show((response as any).msg, {
                        type: 'success'
                    })
                }
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 获取支付链接，此时会新窗口打开
         */
        private getPayUrl() {
            let self = this
            this.loading = false
            if (this.postForm.amount <= 0 || this.postForm.amount === '') {
                this.$toasted.show('请填写存款金额', {
                    type: 'error'
                })
                return
            }
            _doSubmit('/member/deposit', this.postForm).then(response => {
                if ((response as any).code === 0) {
                    self.loading = false
                    this.$toasted.show((response as any).msg, {
                        type: 'error'
                    })
                } else {
                    self.fetchData()
                    if ((response as any).url !== '') {
                        window.open((response as any).url)
                    } else {
                        (document.getElementById('postPay') as any).innerHTML = (response as any).data as string
                        setTimeout(function () {
                            (document.forms as any)['pay_form'].submit()
                        }, 1000)
                    }
                }
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 取消订单
         */
        private cancelPay(p_id: number) {
            let self = this
            this.loading = false
            this.$confirm(window.i18n.t('member.confirmCancelDeposit'), {
                type: 'warning'
            }).then(() => {
                _doSubmit('/member/depositCancel', { id: p_id }).then(response => {
                    self.loading = false
                    if ((response as any).code === 0) {
                        this.$toasted.show((response as any).msg, {
                            type: 'error'
                        })
                    } else {
                        this.fetchData()
                        this.$toasted.show((response as any).msg, {
                            type: 'success'
                        })
                    }
                }).catch(() => {
                    this.loading = false
                })
            })
        }
    }
</script>
