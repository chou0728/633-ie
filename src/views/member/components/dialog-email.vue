<template>
    <div
        id="model-dialog-email"
        v-loading="loading"
        class="modal show safe-modal"
        @click.stop.prevent="hide"
    >
        <div
            class="modal-dialog"
        >
            <div class="modal-content">
                <div class="modal-header">
                    <h4
                        id="ModalLabel"
                        class="modal-title"
                    >
                        <font v-if="form.step === 1 && member.member_email === ''">
                            绑定电子邮箱
                        </font>
                        <font v-if="form.step === 1 && member.member_email !== ''">
                            验证电子邮箱
                        </font>
                        <font v-if="form.step === 2">
                            绑定新电子邮箱
                        </font>
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="m-wrap clearfix">
                        <div class="m-form">
                            <div
                                v-if="form.step === 1"
                                class="u-input getcode"
                            >
                                <h5>邮箱地址</h5>
                                <input
                                    v-if="member.member_email === '' "
                                    v-model="form.email"
                                    type="text"
                                >
                                <input
                                    v-else
                                    v-model="member.member_email"
                                    type="text"
                                    readonly
                                >
                                <span class="icon icon-email" />
                                <a
                                    v-if="timer > 0"
                                    href="javascript:void(0)"
                                    class="u-change1"
                                >
                                    {{ timer }}
                                </a>
                                <a
                                    v-else
                                    href="javascript:void(0)"
                                    class="u-change"
                                    @click="sendCode"
                                >
                                    验证码
                                </a>
                                <p
                                    v-if="error.email !== ''"
                                    class="tip"
                                >
                                    {{ error.email }}
                                </p>
                            </div>
                            <div
                                v-if="form.step === 1"
                                class="u-input"
                            >
                                <h5>验证码</h5>
                                <input
                                    v-model="form.code"
                                    type="text"
                                >
                                <span class="icon icon-code" />
                                <p
                                    v-if="error.code !== ''"
                                    class="tip"
                                >
                                    {{ error.code }}
                                </p>
                            </div>

                            <div
                                v-if="form.step === 2"
                                class="u-input getcode"
                            >
                                <h5>新邮箱地址</h5>
                                <input
                                    v-model="form.remail"
                                    type="text"
                                >
                                <span class="icon icon-email" />
                                <a
                                    v-if="timer > 0"
                                    href="javascript:void(0)"
                                    class="u-change1"
                                >
                                    {{ timer }}
                                </a>
                                <a
                                    v-else
                                    href="javascript:void(0)"
                                    class="u-change"
                                    @click="sendCode"
                                >
                                    验证码
                                </a>
                                <p
                                    v-if="error.remail !== ''"
                                    class="tip"
                                >
                                    {{ error.remail }}
                                </p>
                            </div>
                            <div
                                v-if="form.step === 2"
                                class="u-input"
                            >
                                <h5>验证码</h5>
                                <input
                                    v-model="form.rcode"
                                    type="text"
                                >
                                <span class="icon icon-code" />
                                <p
                                    v-if="error.rcode !== ''"
                                    class="tip"
                                >
                                    {{ error.rcode }}
                                </p>
                            </div>
                            <p class="tip">
                                ！请放心，我们不会泄露任何用户信息，以及发送骚扰信息。
                            </p>

                            <div class="u-btn">
                                <a
                                    href="javascript:void(0)"
                                    class="btn"
                                    @click="doSubmit"
                                >提交</a>
                            </div>
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
    import { DialogModule } from '@/store/modules/dialog'
    import { _bindEmail } from '@/api/member.ts'
    import { emailValid } from '@/utils/validate.ts'
    import { _sendEmsCode } from '@/api/passport.ts'

    @Component
    export default class DialogEmail extends Vue {
        private loading: boolean = false
        private timer: number = 0
        private form: any = {
            email: '',
            code: '',
            remail: '',
            rcode: '',
            step: 1
        }
        private error: any = {
            email: '',
            code: '',
            remail: '',
            rcode: ''
        }
        get member(): any {
            return MemberModule.member
        }

        private created() {
            MemberModule.getProfile()
            DialogModule.ResetFlushParentStatus()
        }

        public hide(event: any) {
            const dialog = document.getElementById('model-dialog-email')
            const target = event.target
            if (target === dialog) {
                DialogModule.ToggleDialog({ dialogName: '', dialogData: {} })
            }
        }

        /**
         * 发送SMSCODE
         */
        private sendCode() {
            let self = this
            this.error.email = ''
            this.error.remail = ''
            if (this.form.step === 1 && this.member.member_email === '' && !emailValid(this.form.email)) {
                this.error.email = window.i18n.t('member.error.email')
                return
            }
            if (this.form.step === 2 && !emailValid(this.form.remail)) {
                this.error.remail = window.i18n.t('member.error.email')
                return
            }
            this.loading = true
            // 这里需要判断是首次绑定还是修改
            let email = this.form.email
            let event = 'bind'
            if (this.form.step === 1 && this.member.member_email !== '') {
                event = 'check'
            }
            if (this.form.step === 2) {
                email = this.form.remail
            }
            _sendEmsCode(email, event).then(response => {
                this.loading = false
                if ((response as any).code === 0) {
                    if ((response as any).data > 0) {
                        self.timer = (response as any).data
                        this.codeInterval()
                    }
                    this.$toasted.show((response as any).msg, {
                        type: 'error'
                    })
                } else {
                    self.timer = 60
                    this.codeInterval()
                    this.$toasted.show((response as any).msg, {
                        type: 'success'
                    })
                }
            })
        }

        /**
         * 验证码计时器
         */
        private codeInterval() {
            let self = this
            let interval = setInterval(function () {
                self.timer--
                if (self.timer === 0) {
                    clearInterval(interval)
                }
            }, 1000)
        }

        /**
         * 回调父页
         */
        private syncParent() {
            DialogModule.SetFlushParentStatus()
        }

        /**
         * 表單提交成功回調
         */
        private afterSubmit() {
            this.loading = false
            this.syncParent()
            DialogModule.ToggleDialog({ dialogName: '', dialogData: {} })
        }

        /**
         * 实名认证提交
         */
        private doSubmit() {
            let self = this
            this.error.email = ''
            this.error.code = ''
            this.error.remail = ''
            this.error.rcode = ''
            if (this.form.step === 1 && this.member.member_email === '' && !emailValid(this.form.email)) {
                this.error.email = window.i18n.t('member.error.email')
                return
            }
            if (this.form.step === 2 && !emailValid(this.form.remail)) {
                this.error.remail = window.i18n.t('member.error.email')
                return
            }
            if (this.form.step === 1 && this.form.code === '') {
                this.error.code = window.i18n.t('member.error.code')
                return
            }
            if (this.form.step === 2 && this.form.rcode === '') {
                this.error.rcode = window.i18n.t('member.error.code')
                return
            }
            this.loading = true
            _bindEmail(this.form).then(response => {
                if ((response as any).code === 0) {
                    this.$toasted.show((response as any).msg, {
                        type: 'error',
                        onComplete: () => {
                            self.loading = false
                        }
                    })
                } else {
                    this.$toasted.show((response as any).msg, {
                        type: 'success',
                        onComplete: () => {
                            self.loading = false
                            self.timer = 0
                            if (self.form.step === 1 && self.member.member_email === '') {
                                self.afterSubmit()
                            } else if (self.form.step === 1 && self.member.member_email !== '') {
                                self.form.step = 2
                                console.log(self.timer)
                            } else if (self.form.step === 2) {
                                self.afterSubmit()
                            }
                        }
                    })
                }
            })
        }
    }
</script>
