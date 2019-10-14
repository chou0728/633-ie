<template>
    <div class="user-center">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="user-menu">
                        <dl>
                            <dt>
                                <span class="icon icon-zj" />资金管理
                            </dt>
                            <dd>
                                <router-link
                                    :to="{name: 'MemberDeposit'}"
                                    :class="{cur: curAction === '/member/deposit'}"
                                >
                                    存款
                                </router-link>
                            </dd>
                            <dd>
                                <router-link
                                    :to="{name: 'MemberTransfer'}"
                                    :class="{cur: curAction === '/member/transfer'}"
                                >
                                    转账
                                </router-link>
                            </dd>
                            <dd>
                                <router-link
                                    :to="{name: 'MemberWithdrawal'}"
                                    :class="{cur: curAction === '/member/withdrawal'}"
                                >
                                    提款
                                </router-link>
                            </dd>
                            <dd>
                                <router-link
                                    :to="{name: 'MemberHistory'}"
                                    :class="{cur: curAction === '/member/history'}"
                                >
                                    明细
                                </router-link>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <span class="icon icon-gr" />个人账户
                            </dt>
                            <dd>
                                <router-link
                                    :to="{name: 'Member'}"
                                    :class="{cur: curAction === '/member/index'}"
                                >
                                    账户信息
                                </router-link>
                            </dd>
                            <dd>
                                <router-link
                                    :to="{name: 'MemberVip'}"
                                    :class="{cur: curAction === '/member/vip'}"
                                >
                                    VIP
                                </router-link>
                            </dd>
                            <dd>
                                <router-link
                                    :to="{name: 'MemberPromotion'}"
                                    :class="{cur: curAction === '/member/promotion'}"
                                >
                                    我的红利<em v-if="member.bonus_num > 0">{{ member.bonus_num }}</em>
                                </router-link>
                            </dd>
                            <dd>
                                <router-link
                                    :to="{name: 'MemberMessage'}"
                                    :class="{cur: curAction === '/member/message'}"
                                >
                                    消息中心<em v-if="member.message_num > 0">{{ member.message_num }}</em>
                                </router-link>
                            </dd>
                            <dd>
                                <router-link
                                    :class="{cur: curAction === '/member/recommend'}"
                                    :to="{name: 'MemberRecommend'}"
                                >
                                    推荐好友
                                </router-link>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <span class="icon icon-bc" />博彩责任
                            </dt>
                            <dd>
                                <router-link
                                    :to="{name: 'AboutResponsible'}"
                                    :class="{cur: curAction === '/about/responsible'}"
                                >
                                    健康博彩
                                </router-link>
                            </dd>
                            <dd>
                                <router-link
                                    :to="{name: 'AboutSelfControl'}"
                                    :class="{cur: curAction === '/about/self_control'}"
                                >
                                    自我控制
                                </router-link>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="user-tool">
                                <div class="user-info clearfix">
                                    <div class="photo">
                                        <img
                                            :src="member.avatar"
                                            alt=""
                                        >
                                    </div>
                                    <p><span>欢迎您，<br>尊贵的{{ member.member_surename }}</span></p>
                                </div>
                                <div class="user-tip">
                                    <router-link
                                        :to="{name: 'Member', query: {default: member.member_surename === '' ? 'surename': ''}}"
                                    >
                                        <i
                                            v-if="member.member_surename === ''"
                                            class="label"
                                        >!</i>
                                        <span class="icon icon-name" />
                                    </router-link>
                                    <router-link
                                        :to="{name: 'Member', query: {default: member.member_phone === '' ? 'phone' : ''}}"
                                    >
                                        <i
                                            v-if="member.member_phone === ''"
                                            class="label"
                                        >!</i>
                                        <span class="icon icon-safe" />
                                    </router-link>
                                    <router-link
                                        :to="{name: 'Member', query: {default: member.member_email === '' ? 'email' : ''}}"
                                    >
                                        <i
                                            v-if="member.member_email === ''"
                                            class="label"
                                        >!</i>
                                        <span class="icon icon-emails" />
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="user-wallet">
                                <div class="user-money">
                                    <p>
                                        <span class="icon icon-in" />
                                        <i>账户
                                            <br>金额：</i>
                                        <strong class="red">￥{{ member.balance }}</strong>
                                        <router-link
                                            :to="{name: 'MemberDeposit'}"
                                            class="u-change"
                                        >
                                            存款
                                        </router-link>
                                    </p>
                                </div>
                                <div class="user-money">
                                    <p>
                                        <span class="icon icon-out" />
                                        <i>可提
                                            <br>金额：</i>
                                        <strong>￥{{ member.can_withdrawal }}</strong>
                                        <router-link
                                            v-if="member.can_withdrawal > 0"
                                            :to="{name: 'MemberWithdrawal'}"
                                            class="u-change"
                                        >
                                            提款
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="user-vip">
                                <dl class="clearfix progress-info">
                                    <dt>
                                        <span class="icon icon-vip1" />
                                    </dt>
                                    <div>
                                        <dd class="progress progress--month">
                                            <div
                                                class="progress-bar progress-success progress-bar--month"
                                                :style="{width: `${monthVip.vip_progress_bar}%`}"
                                            />
                                            <span>本月积分 {{ monthVip.curr_owned_point }}/{{ monthVip.next_point }}</span>
                                        </dd>
                                        <dd class="progress progress--year">
                                            <div
                                                class="progress-bar progress-success progress-bar--year"
                                                :style="{width: `${yearVip.vip_progress_bar}%`}"
                                            />
                                            <span>年度积分 {{ yearVip.curr_owned_point }}/{{ yearVip.next_point }}</span>
                                        </dd>
                                    </div>
                                </dl>
                                <p class="sm">
                                    还差
                                    <strong>{{ monthVip.require_point }}积分</strong>晋升{{ monthVip.next_title }}
                                </p>
                                <p>
                                    本月VIP积分
                                    <em>：</em>
                                    <strong>{{ monthVip.curr_owned_point }}</strong>
                                </p>
                                <p>
                                    年度VIP积分
                                    <em>：</em>
                                    <strong>{{ yearVip.curr_owned_point }}</strong>
                                </p>
                                <router-link
                                    :to="{name: 'MemberVip'}"
                                    class="more"
                                >
                                    更多
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <transition
                                name="fade-transform"
                                mode="out-in"
                            >
                                <router-view :key="curAction" />
                            </transition>
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

    @Component
    export default class LayoutMember extends Vue {
        private created() {
            MemberModule.getProfile()
        }

        get member(): any {
            return MemberModule.member
        }

        get curAction() {
            return this.$route.path
        }

        get monthVip() {
            const { month_vip } = MemberModule.member
            return month_vip
        }

        get yearVip() {
            const { year_vip } = MemberModule.member
            return year_vip
        }
    }
</script>

<style lang="scss" scoped>

    .progress-info {
        display: flex;
        align-items: flex-end;

        .progress {
            margin: 5px 10px;
        }
    }

</style>
