<template>
    <div
        id="model-dialog-question"
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
                        设置安全问题
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="m-wrap clearfix">
                        <div class="m-form">
                            <div class="u-select">
                                <h5>选择安全问题</h5>
                                <span class="mark" />
                                <select
                                    id=""
                                    name=""
                                >
                                    <option value="">
                                        您父亲的生日是？
                                    </option>
                                </select>
                                <span class="icon icon-qus" />
                                <p
                                    v-if="error.member_address !== ''"
                                    class="tip"
                                >
                                    {{ error.member_address }}
                                </p>
                            </div>
                            <div class="u-input">
                                <h5>答案</h5>
                                <input
                                    v-model="form.member_address_surename"
                                    type="text"
                                >
                                <span class="icon icon-user" />
                                <p
                                    v-if="error.member_address_surename !== ''"
                                    class="tip"
                                >
                                    {{ error.member_address_surename }}
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
    import { Component, Vue } from 'vue-property-decorator'
    import { _doSubmit } from '@/api/common.ts'
    import { MemberModule } from '@/store/modules/member'
    import { DialogModule } from '@/store/modules/dialog'

    @Component
    export default class DialogQuestion extends Vue {
        private loading: boolean = false
        private form: any = {
            member_address: '',
            member_address_surename: '',
            member_address_phone: ''
        }
        private error: any = {
            member_address: '',
            member_address_surename: '',
            member_address_phone: ''
        }
        private created() {
            this.form.member_address = this.member.member_address
            this.form.member_address_surename = this.member.member_address_surename
            this.form.member_address_phone = this.member.member_address_phone
            MemberModule.getProfile()
            DialogModule.ResetFlushParentStatus()
        }
        get member(): any {
            return MemberModule.member
        }

        public hide(event: any) {
            const dialog = document.getElementById('model-dialog-question')
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
            this.error.member_address = ''
            this.error.member_address_surename = ''
            if (this.form.member_address === '') {
                this.error.member_address = window.i18n.t('member.error.member_address')
                return
            }
            if (this.form.member_address_surename === '') {
                this.error.member_address_surename = window.i18n.t('member.error.member_address_surename')
                return
            }
            if (this.form.member_address_phone === '') {
                this.error.member_address_phone = window.i18n.t('member.error.member_address_phone')
                return
            }
            this.loading = true
            _doSubmit('/member/address', this.form).then(response => {
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
