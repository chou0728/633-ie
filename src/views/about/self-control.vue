<template>
    <div>
        <div class="m-userInfo">
            <h4 class="u-title">
                自我控制
            </h4>
            <div class="m-keep">
                <h5>自我禁制</h5>
                <p>为了您自己的安全保护，你可以在任何时候请求“自我禁制”使用Mr. Cat的产品和服务，允许您在一小段时间内暂停使用Mr. Cat的产品和服务</p><h5>自我禁制</h5>
                <p>当您申请自我禁制时，我们将在禁制期间限制您的账户。自我禁制最长可为60天。您也可以要求从Mr. Cat永久禁制。禁制期间，您不可以解除禁制，同时不允许进入Mr. Cat账号并进行任何投注。我们还将采取一切合理措施返还您 的账户资金，以及确保您在自我禁制期间不会收到任何宣传材料。 当您成功申请自我禁制，您可以选择提出账户余额。在自我禁制期间，我们将关闭您的账户。如果您试图登录，将会收到确认不再可以登录网站的信息。 如果您在其他任何博彩公司/服务商有自我禁制，此不会适用于Mr. Cat网站。 您可以在自我控制中设定1天至60天的自我禁制，或者通过在线客服，电邮cs@mrcat..com 和在线客服联系客服团队。 在自我禁制到期以后（除了永久禁制），您需要重新激活您的Mr. Cat账户，您需要通过以下方式联系客服团队： 在线客服 电邮cs@mrcat..com 在申请激活账户以后，通过“24小时冷却期”即可登录您的账户</p>
                <div class="u-btn">
                    <a
                        role="button"
                        class="btn"
                        data-toggle="modal"
                    >提交申请</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'
    import { _doSubmit, _doGet } from '@/api/common'

    @Component({
        components: {}
    })
    export default class SelfControl extends Vue {
        private loading: boolean = false
        private order: any = null
        private setting: any
        private postForm: any = {
            payment_id: 1,
            payment_type_id: 1,
            bank_id: 1,
            amount: ''
        }

        get member() {
            return MemberModule.member
        }

        private created() {
            this.fetchData()
        }

        private mounted() {
            this.flushPage()
        }

        private fetchData() {
            let self = this
            this.loading = false
            _doGet('/member/deposit', []).then(response => {
                self.order = response.data.order
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 切换支付方式
         * @param p_payWay 支付方式代码
         */
        private handlePayWay(p_payWay: number) {
            this.postForm.payment_type_id = p_payWay
        }

        /**
         * 重载页面的一些信息
         */
        private flushPage() {
            MemberModule.getInfo()
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
                self.loading = false
                if ((response as any).code === 0) {
                    this.$toasted.show((response as any).msg, {
                        type: 'error'
                    })
                } else {
                    window.open((response as any).data)
                }
            }).catch(() => {
                this.loading = false
            })
        }
    }
</script>
