<template>
    <div
        id="model-dialog-password"
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
                        修改密码
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="m-wrap clearfix">
                        <div class="m-form">
                            <div class="u-input">
                                <h5>旧密码</h5>
                                <input
                                    v-model="form.old_password"
                                    type="password"
                                >
                                <span class="icon icon-lock" />
                                <p
                                    v-if="error.old_password !== ''"
                                    class="tip"
                                >
                                    {{ error.old_password }}
                                </p>
                            </div>
                            <div class="u-input">
                                <h5>新密码</h5>
                                <input
                                    v-model="form.password"
                                    type="password"
                                >
                                <span class="icon icon-lock" />
                                <p
                                    v-if="error.password !== ''"
                                    class="tip"
                                >
                                    {{ error.password }}
                                </p>
                            </div>
                            <div class="u-input">
                                <h5>确认密码</h5>
                                <input
                                    v-model="form.rpassword"
                                    type="password"
                                >
                                <span class="icon icon-lock" />
                                <p
                                    v-if="error.rpassword !== ''"
                                    class="tip"
                                >
                                    {{ error.rpassword }}
                                </p>
                            </div>

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
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { DialogModule } from '@/store/modules/dialog'
    import { _doSubmit } from '@/api/common.ts'
    import { passwordValid } from '@/utils/validate.ts'

    @Component
    export default class DialogPassword extends Vue {
        private loading: boolean = false
        private form: any = {
            old_password: '',
            password: '',
            rpassword: ''
        }
        private error: any = {
            old_password: '',
            password: '',
            rpassword: ''
        }

        private created() {
            DialogModule.ResetFlushParentStatus()
        }

        public hide(event: any) {
            const dialog = document.getElementById('model-dialog-password')
            const target = event.target
            if (target === dialog) {
                DialogModule.ToggleDialog({ dialogName: '', dialogData: {} })
            }
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
            this.error.old_password = ''
            this.error.password = ''
            if (this.form.old_password === '') {
                this.error.old_password = window.i18n.t('member.error.old_password')
                return
            }
            if (this.form.password === '' || !passwordValid(this.form.password, 8)) {
                this.error.password = window.i18n.t('member.error.password')
                return
            }
            if (this.form.rpassword === '' || this.form.password !== this.form.rpassword) {
                this.error.rpassword = window.i18n.t('member.error.rpassword')
                return
            }
            this.loading = true
            _doSubmit('/member/password', this.form).then(response => {
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
                            self.afterSubmit()
                        }
                    })
                }
            })
        }
    }
</script>
