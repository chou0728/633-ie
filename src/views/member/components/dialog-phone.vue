<template>
    <div
        id="model-dialog-phone"
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
                        <font v-if="form.step === 1 && member.member_phone === ''">
                            绑定手机
                        </font>
                        <font v-if="form.step === 1 && member.member_phone !== ''">
                            验证手机
                        </font>
                        <font v-if="form.step === 2">
                            绑定新手机
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
                                <h5>手机号</h5>
                                <input
                                    v-model="form.phone"
                                    type="text"
                                    :readonly="member.member_phone !== '' ? true : false"
                                >
                                <span class="icon icon-phone" />
                                <a
                                    v-if="timer === 0"
                                    href="javascript:void(0)"
                                    class="u-change"
                                    @click="sendCode"
                                >验证码</a>
                                <a
                                    v-if="timer > 0"
                                    href="javascript:void(0)"
                                    class="u-change1"
                                >{{ timer }}</a>
                                <p
                                    v-if="error.phone !== ''"
                                    class="tip"
                                >
                                    {{ error.phone }}
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
                                <h5>新手机号</h5>
                                <input
                                    v-model="form.rphone"
                                    type="text"
                                >
                                <span class="icon icon-phone" />
                                <a
                                    v-if="timer === 0"
                                    href="javascript:void(0)"
                                    class="u-change"
                                    @click="sendCode"
                                >验证码</a>
                                <a
                                    v-if="timer > 0"
                                    href="javascript:void(0)"
                                    class="u-change1"
                                >{{ timer }}</a>
                                <p
                                    v-if="error.rphone !== ''"
                                    class="tip"
                                >
                                    {{ error.rphone }}
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
    import { _bindPhone } from '@/api/member.ts'
    import { phoneValid } from '@/utils/validate.ts'
    import { _sendSmsCode } from '@/api/passport.ts'

    @Component
    export default class DialogPhone extends Vue {
        private loading: boolean = false
        private timer: number = 0
        private form: any = {
            phone: '',
            code: '',
            rphone: '',
            rcode: '',
            step: 1
        }
        private error: any = {
            phone: '',
            code: '',
            rphone: '',
            rcode: ''
        }
        private created() {
            MemberModule.getProfile()
            DialogModule.ResetFlushParentStatus()
        }
        get member(): any {
            return MemberModule.member
        }

        public hide(event: any) {
            const dialog = document.getElementById('model-dialog-phone')
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
            if (this.form.step === 1 && this.member.member_phone === '' && !phoneValid(this.form.phone)) {
                this.error.phone = window.i18n.t('member.error.phone')
                return
            }
            if (this.form.step === 2 && !phoneValid(this.form.rphone)) {
                this.error.rphone = window.i18n.t('member.error.phone')
                return
            }
            this.loading = true
            // 这里需要判断是首次绑定还是修改
            let phone = this.form.phone
            let event = 'bind'
            if (this.form.step === 1 && this.member.member_phone !== '') {
                event = 'check'
            }
            if (this.form.step === 2) {
                phone = this.form.rphone
            }
            _sendSmsCode(phone, event).then(response => {
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
            this.error.phone = ''
            this.error.code = ''
            if (this.form.step === 1 && this.member.member_phone === '' && !phoneValid(this.form.phone)) {
                this.error.phone = window.i18n.t('member.error.phone')
                return
            }
            if (this.form.step === 2 && !phoneValid(this.form.rphone)) {
                this.error.rphone = window.i18n.t('member.error.phone')
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
            _bindPhone(this.form).then(response => {
                if ((response as any).code === 0) {
                    this.$toasted.show((response as any).msg, {
                        type: 'error',
                        onComplete: () => {
                            this.loading = false
                        }
                    })
                } else {
                    this.$toasted.show((response as any).msg, {
                        type: 'success',
                        onComplete: () => {
                            self.timer = 0
                            if (self.form.step === 1 && self.member.member_phone === '') {
                                self.afterSubmit()
                            } else if (self.form.step === 1 && self.member.member_phone !== '') {
                                self.form.step = 2
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
