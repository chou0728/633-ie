<template>
    <div>
        <div class="m-userInfo">
            <h4>
                <span class="icon icon-userw" />账户资料
            </h4>
            <div class="m-node">
                <span class="u-name">个人信息：</span>
                <span
                    v-if="member.member_surename === ''"
                    class="u-info"
                >{{ $t('member.notSet') }}</span>
                <span
                    v-if="member.member_surename !== ''"
                    class="u-info"
                >
                    {{ member.member_surename }} / {{ member.member_card_no }} / {{ member.member_birthday }}
                </span>
                <span
                    v-if="member.member_surename === ''"
                    class="u-link"
                >
                    <a
                        href="javascript:void(0);"
                        @click="showProfile"
                    >
                        <span class="icon icon-write" />
                    </a>
                </span>
            </div>

            <div class="m-node">
                <span class="u-name">邮箱：</span>
                <span
                    v-if="member.member_email === ''"
                    class="u-info f-red"
                >
                    {{ $t('member.notSet') }}
                </span>
                <span
                    v-if="member.member_email !== ''"
                    class="u-info"
                >
                    {{ member.member_email }}
                </span>
                <span class="u-link">
                    <a
                        href="javascript:void(0);"
                        @click="showEmail"
                    >
                        <span class="icon icon-reset" />
                    </a>
                </span>
            </div>

            <div class="m-node">
                <span class="u-name">手机：</span>
                <span
                    v-if="member.member_phone === ''"
                    class="u-info f-red"
                >
                    {{ $t('member.notSet') }}
                </span>
                <span
                    v-if="member.member_phone !== ''"
                    class="u-info"
                >
                    {{ member.member_phone }}
                </span>
                <span class="u-link">
                    <a
                        href="javascript:void(0);"
                        @click="showPhone"
                    >
                        <span class="icon icon-reset" />
                    </a>
                </span>
            </div>
            <div class="m-node">
                <span class="u-name">登录密码：</span>
                <span class="u-info">您的登录密码已经设定，请妥善保管</span>
                <span class="u-link">
                    <a
                        href="javascript:void(0);"
                        @click="showPassword"
                    >
                        <span class="icon icon-reset" />
                    </a>
                </span>
            </div>
            <div class="m-node">
                <span class="u-name">提款密码：</span>

                <span
                    v-if="member.member_safe_password === ''"
                    class="u-info f-red"
                >
                    {{ $t('member.notSet') }}
                </span>
                <span
                    v-if="member.member_safe_password !== ''"
                    class="u-info"
                >
                    您的提款密码已经设定，请妥善保管。
                </span>
                <span class="u-link">
                    <a
                        href="javascript:void(0);"
                        @click="showSafePassword"
                    >
                        <span class="icon icon-reset" />
                    </a>
                </span>
            </div>
            <div class="m-node">
                <span class="u-name">收货地址：</span>
                <span
                    v-if="member.member_address === ''"
                    class="u-info f-red"
                >
                    {{ $t('member.notSet') }}
                </span>
                <span
                    v-if="member.member_address !== ''"
                    class="u-info"
                >
                    您的地址已经设定。
                </span>
                <span class="u-link">
                    <a
                        href="javascript:void(0);"
                        @click="showAddress"
                    >
                        <span class="icon icon-reset" />
                    </a>
                </span>
            </div>
            <div class="m-node">
                <span class="u-name">安全问题：</span>
                <span
                    v-if="member.member_quesion === ''"
                    class="u-info f-red"
                >
                    {{ $t('member.notSet') }}
                </span>
                <span
                    v-if="member.member_quesion !== ''"
                    class="u-info"
                >
                    您的安全问题已经设定。
                </span>
                <span class="u-link">
                    <a
                        href="javascript:void(0);"
                        @click="showQuestion"
                    >
                        <span class="icon icon-reset" />
                    </a>
                </span>
            </div>
        </div>
        <dialog-member />
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'
    import { DialogModule } from '@/store/modules/dialog'

    import DialogMember from './components/dialog-member.vue'

    @Component({
        components: {
            DialogMember
        }
    })
    export default class Index extends Vue {
        /**
         * 监控flushStatus判断是否需要更新
         */
        get flushStatus() {
            return DialogModule.flushParentStatus
        }

        @Watch('flushStatus')
        onFlushParentStatusChange(newV: boolean, oldV: boolean) {
            if (newV === true) {
                this.flushPage()
            }
        }
        get member() {
            return MemberModule.member
        }
        private created() {
            MemberModule.getProfile()
        }

        private mounted() {
            switch (this.$route.query.default) {
            case 'phone':
                this.showPhone()
                break
            case 'email':
                console.log(MemberModule.member.member_email)
                this.showEmail()
                break
            case 'surename':
                this.showProfile()
                break
            default:
                break
            }
        }

        /**
         * 重载页面的一些信息
         */
        private flushPage() {
            MemberModule.getProfile(true)
        }

        /**
         * 显示用户认证界面
         */
        private showProfile() {
            DialogModule.ToggleDialog({ dialogName: 'DialogProfile', dialogData: {} })
        }

        /**
         * 显示邮箱修改界面
         */
        private showEmail() {
            DialogModule.ToggleDialog({ dialogName: 'DialogEmail', dialogData: {} })
        }

        /**
         * 显示手机修改界面
         */
        private showPhone() {
            DialogModule.ToggleDialog({ dialogName: 'DialogPhone', dialogData: {} })
        }

        /**
         * 显示密码修改界面
         */
        private showPassword() {
            DialogModule.ToggleDialog({ dialogName: 'DialogPassword', dialogData: {} })
        }

        /**
         * 显示提现密码修改界面
         */
        private showSafePassword() {
            DialogModule.ToggleDialog({ dialogName: 'DialogSafePassword', dialogData: {} })
        }

        /**
         * 显示地址修改界面
         */
        private showAddress() {
            DialogModule.ToggleDialog({ dialogName: 'DialogAddress', dialogData: {} })
        }

        /**
         * 显示安全问题修改界面
         */
        private showQuestion() {
            DialogModule.ToggleDialog({ dialogName: 'DialogQuestion', dialogData: {} })
        }
    }
</script>
