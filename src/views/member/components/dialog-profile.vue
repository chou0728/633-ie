<template>
    <div
        id="model-dialog-profile"
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
                        {{ $t('member.infoVerify') }}
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="m-wrap clearfix">
                        <div class="m-form">
                            <div class="u-input">
                                <h5>真实姓名</h5>
                                <input
                                    v-model="form.member_surename"
                                    type="text"
                                >
                                <span class="icon icon-user" />
                                <p
                                    v-if="error.member_surename !== ''"
                                    class="tip"
                                >
                                    {{ error.member_surename }}
                                </p>
                            </div>
                            <div class="u-input">
                                <h5>证件号码</h5>
                                <input
                                    v-model="form.member_card_no"
                                    type="text"
                                >
                                <span class="icon icon-id" />
                                <p
                                    v-if="error.member_card_no !== ''"
                                    class="tip"
                                >
                                    {{ error.member_card_no }}
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
    import { DialogModule } from '@/store/modules/dialog'
    import { _profileVerify } from '@/api/member.ts'
    import { idCodeValid } from '@/utils/validate.ts'

    @Component
    export default class DialogProfile extends Vue {
        private loading: boolean = false
        private form: any = {
            member_surename: '',
            member_card_no: ''
        }
        private error: any = {
            member_surename: '',
            member_card_no: ''
        }

        private created() {
            DialogModule.ResetFlushParentStatus()
        }

        public hide(event: any) {
            const dialog = document.getElementById('model-dialog-profile')
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
            this.error.member_surename = ''
            this.error.member_card_no = ''
            if (this.form.member_surename === '') {
                this.error.member_surename = window.i18n.t('member.error.member_surename')
                return
            }
            if (this.form.member_card_no === '' || !idCodeValid(this.form.member_card_no)) {
                this.error.member_card_no = window.i18n.t('member.error.member_card_no')
                return
            }
            this.loading = true
            _profileVerify(this.form).then(response => {
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
