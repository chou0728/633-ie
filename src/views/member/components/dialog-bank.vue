<template>
    <div
        id="model-bank-dialog"
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
                        {{ title }}
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="m-wrap clearfix">
                        <div class="m-form">
                            <div class="u-input">
                                <h5>{{ $t('memberBank.bank_name') }}</h5>
                                <input
                                    v-model="postForm.bank_name"
                                    type="text"
                                >
                                <span class="icon icon-user" />
                                <p
                                    v-if="error.bank_name !== ''"
                                    class="tip"
                                >
                                    {{ error.bank_name }}
                                </p>
                            </div>
                            <div class="u-input">
                                <h5>{{ $t('memberBank.bank_account') }}</h5>
                                <input
                                    v-model="postForm.bank_account"
                                    type="text"
                                >
                                <span class="icon icon-id" />
                                <p
                                    v-if="error.bank_account !== ''"
                                    class="tip"
                                >
                                    {{ error.bank_account }}
                                </p>
                            </div>
                            <div class="u-input">
                                <h5>{{ $t('memberBank.is_default') }}</h5>
                                <div class="choose choose-default clearfix">
                                    <div
                                        v-for="(item, idx) in defaultOptions"
                                        :key="idx"
                                        class="u-radio"
                                        @click="handleChooseDefault(item)"
                                    >
                                        <input
                                            :id="`is-default-${item}`"
                                            v-model="postForm.is_default"
                                            class="radio"
                                            type="radio"
                                            :name="`is-default-${item}`"
                                            :value="item"
                                        >
                                        <label :for="`is-default-${item}`">
                                            {{ $t(`memberBank.is_default_${item}`) }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="u-btn">
                                <a
                                    href="javascript:void(0)"
                                    class="btn"
                                    @click.prevent.stop="doSubmit"
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
    import { _add } from '@/api/member-bank.ts'
    import { DialogModule } from '@/store/modules/dialog'

    @Component
    export default class DialogBank extends Vue {
        private loading: boolean = false
        private title: string = ''
        private defaultOptions = [1, 2]
        private postForm: any = {
            id: 0,
            bank_name: '',
            bank_account: '',
            is_default: 1
        }
        private error: any = {
            bank_name: '',
            bank_account: '',
            is_default: 1
        }
        /**
         * 选择是否默认
         */
        private handleChooseDefault(p_is_default: number) {
            this.postForm.is_default = p_is_default
        }

        private created() {
            const { id } = DialogModule.dialogData
            if (id === 0) {
                this.title = window.i18n.t('memberBank.add')
                DialogModule.ResetFlushParentStatus()
            } else {
                DialogModule.ToggleDialog({ dialogName: '', dialogData: {} })
            }
        }

        public hide(event: any) {
            const dialog = document.getElementById('model-bank-dialog')
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
         * 提交
         */
        private doSubmit() {
            let self = this
            this.error.bank_name = ''
            this.error.bank_account = ''
            if (this.postForm.bank_name === '') {
                this.error.bank_name = window.i18n.t('member.error.bank_name')
                return
            }
            if (this.postForm.bank_account === '') {
                this.error.bank_account = window.i18n.t('member.error.bank_account')
                return
            }
            this.loading = true
            if (this.postForm.id === 0) {
                _add(this.postForm).then(response => {
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
                }).catch(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

    .choose-default {
        display: flex;
        padding-top: 10px;

        .u-radio {
            margin-right: 20px;
        }
    }

</style>
