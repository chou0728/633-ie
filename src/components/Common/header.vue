<template>
    <div>
        <div class="m-notice">
            <div class="container">
                <span class="icon icon-notice" />
                <strong>{{ $t('navbar.board') }}</strong>
                <div class="f-danger">
                    <marquee>
                        《Game os小游戏维护公告》 敬爱的用户您好，Game os小游戏 目前进行维护，暂时不提供游戏服务，恢复时间 将另外通知，若有问题欢迎与在线客服联系。《Game os小游戏维护公告》
                        敬爱的用户您好，Game os小游戏 目前进行维护，暂时不提供游戏服务，恢复时间 将另外通知，若有问题欢迎与在线客服联系。
                    </marquee>
                </div>
            </div>
        </div>
        <nav
            class="navbar navbar-default"
            role="navigation"
        >
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="navbar-header">
                            <router-link
                                class="navbar-brand"
                                :to="{name: 'Home'}"
                            >
                                <span class="icon icon-logo" />
                            </router-link>
                        </div>
                        <div
                            id="bs-example-navbar-collapse-1"
                            class="collapse navbar-collapse"
                        >
                            <ul class="nav navbar-nav">
                                <li class="active dropdown">
                                    <router-link
                                        :to="{name: 'Sport'}"
                                        class="dropdown-toggle"
                                    >
                                        {{ $t('navbar.sport') }}
                                        <strong class="caret" />
                                    </router-link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <router-link :to="{name: 'SportGb'}">
                                                <img
                                                    src="../../assets/upload/sports_01.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name: 'SportShaoba'}">
                                                <img
                                                    src="../../assets/upload/sports_02.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <router-link
                                        :to="{name: 'Casino'}"
                                        class="dropdown-toggle"
                                    >
                                        {{ $t('navbar.casino') }}
                                        <strong class="caret" />
                                    </router-link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <router-link :to="{name: 'CasinoAg'}">
                                                <img
                                                    src="../../assets/upload/casino_01.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                @click="play('bbin', 1050, 808)"
                                            >
                                                <img
                                                    src="../../assets/upload/casino_04.jpg"
                                                    alt=""
                                                >
                                            </a>
                                        </li>
                                        <li>
                                            <router-link
                                                :to="{name: 'CasinoPlayTech'}"
                                            >
                                                <img
                                                    src="../../assets/upload/casino_02.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                :to="{name: 'CasinoDeluxeGold'}"
                                            >
                                                <img
                                                    src="../../assets/upload/casino_03.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <router-link
                                        :to="{name: 'Game'}"
                                        class="dropdown-toggle"
                                    >
                                        {{ $t('navbar.game') }}
                                        <strong class="caret" />
                                    </router-link>
                                    <ul class="dropdown-menu dropdown-slot">
                                        <li>
                                            <router-link
                                                :to="{name: 'Game', query: {tab: 'jdb'}}"
                                            >
                                                <img
                                                    src="../../assets/upload/slot_01.png"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                :to="{name: 'Game', query: {tab: 'mg'}}"
                                            >
                                                <img
                                                    src="../../assets/upload/slot_02.png"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                :to="{name: 'Game', query: {tab: 'ag'}}"
                                            >
                                                <img
                                                    src="../../assets/upload/slot_03.png"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                :to="{name: 'Game', query: {tab: 'q_tech'}}"
                                            >
                                                <img
                                                    src="../../assets/upload/slot_04.png"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                :to="{name: 'Game', query: {tab: 'deluxe_gold'}}"
                                            >
                                                <img
                                                    src="../../assets/upload/slot_05.png"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                :to="{name: 'Game', query: {tab: 'play_tech'}}"
                                            >
                                                <img
                                                    src="../../assets/upload/slot_06.png"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <router-link
                                        :to="{name: 'Chess'}"
                                        class="dropdown-toggle"
                                    >
                                        {{ $t('navbar.chess') }}
                                        <strong class="caret" />
                                    </router-link>
                                    <ul class="dropdown-menu chess-menu">
                                        <li class="u-title">
                                            <router-link :to="{name: 'Chess'}">
                                                <img
                                                    src="../../assets/upload/chess.png"
                                                    alt=""
                                                >
                                                <span>专业棋牌，玩法多样<br>万人同台，趣味无穷</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name: 'Chess'}">
                                                <span class="u-img"><img
                                                    src="../../assets/upload/chess_01.png"
                                                    alt=""
                                                ></span>
                                                <span class="u-img"><img
                                                    src="../../assets/upload/chess_02.png"
                                                    alt=""
                                                ></span>
                                                <span class="u-img"><img
                                                    src="../../assets/upload/chess_03.png"
                                                    alt=""
                                                ></span>
                                                <span class="u-img"><img
                                                    src="../../assets/upload/chess_04.png"
                                                    alt=""
                                                ></span>
                                                <span class="u-img"><img
                                                    src="../../assets/upload/chess_05.png"
                                                    alt=""
                                                ></span>
                                                <span class="u-img"><img
                                                    src="../../assets/upload/chess_06.png"
                                                    alt=""
                                                ></span>
                                                <span class="u-img"><img
                                                    src="../../assets/upload/chess_07.png"
                                                    alt=""
                                                ></span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <router-link
                                        :to="{name: 'Ticket'}"
                                        class="dropdown-toggle"
                                    >
                                        {{ $t('navbar.ticket') }}
                                        <strong class="caret" />
                                    </router-link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <router-link :to="{name: 'TicketPlay', query: {kind: 'ssc'}}">
                                                <img
                                                    src="../../assets/upload/lottery_01.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name: 'TicketPlay', query: {kind: 'keno'}}">
                                                <img
                                                    src="../../assets/upload/lottery_02.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name: 'TicketPlay', query: {kind: 'lotto'}}">
                                                <img
                                                    src="../../assets/upload/lottery_03.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name: 'TicketPlay', query: {kind: 'pk10'}}">
                                                <img
                                                    src="../../assets/upload/lottery_04.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name: 'TicketPlay', query: {kind: 'k3'}}">
                                                <img
                                                    src="../../assets/upload/lottery_05.jpg"
                                                    alt=""
                                                >
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="">
                                    <!-- <a to="#">最近优惠<i class="hot"></i></a> -->
                                    <router-link :to="{name: 'Promotion'}">
                                        {{ $t('navbar.promotion') }}
                                    </router-link>
                                </li>
                            </ul>
                            <div
                                v-if="memberId === 0"
                                class="m-tools navbar-left"
                            >
                                <div :class="visibleRegister ? 'dropdown u-link open' : 'dropdown u-link'">
                                    <a
                                        href="javascript:void(0)"
                                        class="dropdown-toggle"
                                        @click="toggleRegister"
                                    >注册
                                        <strong class="caret" />
                                    </a>
                                    <div
                                        class="dropdown-menu"
                                    >
                                        <div
                                            class="dropdown-menu-first"
                                            @click="toggleRegister"
                                        />
                                        <div class="m-reg-box dropdown-menu-second">
                                            <h4>注册您的账户</h4>
                                            <form action="">
                                                <div class="u-input">
                                                    <h5>用户名</h5>
                                                    <input
                                                        v-model="registerForm.username"
                                                        type="text"
                                                    >
                                                    <span class="icon icon-user" />
                                                    <div
                                                        class="u-wran"
                                                        style="display: none"
                                                    >
                                                        <p>
                                                            <span class="icon icon-wran" />8到16个字符
                                                        </p>
                                                        <p>
                                                            <span class="icon icon-right" />由小写字母和数字组成
                                                        </p>
                                                        <p>
                                                            <span class="icon icon-right" />用户名未被使用
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="u-input">
                                                    <h5>密码</h5>
                                                    <input
                                                        v-model="registerForm.password"
                                                        type="password"
                                                    >
                                                    <span class="icon icon-lock" />
                                                </div>
                                                <div class="u-input">
                                                    <h5>确认密码</h5>
                                                    <input
                                                        v-model="registerForm.rpassword"
                                                        type="password"
                                                    >
                                                    <span class="icon icon-lock" />
                                                </div>
                                                <div class="u-select">
                                                    <h5>币种选择</h5>
                                                    <span class="mark" />
                                                    <select
                                                        id=""
                                                        name=""
                                                    >
                                                        <option value="">
                                                            人民币
                                                        </option>
                                                    </select>
                                                    <span class="icon icon-coin" />
                                                </div>
                                                <div class="u-input">
                                                    <h5>代理代码（选填）</h5>
                                                    <input type="text">
                                                    <span class="icon icon-adv" />
                                                </div>
                                                <div class="u-tip">
                                                    <input
                                                        id="checkbox"
                                                        type="checkbox"
                                                    >
                                                    <label for="checkbox">我已确定已满18岁，并已阅读和接受本网站的政策 隐私声明、
                                                        <a href="">Mr. cat合作协议</a>
                                                    </label>
                                                </div>
                                                <div class="u-btn">
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="btn"
                                                        @click="submitRegister"
                                                    >立即注册</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div :class="visibleLogin ? 'dropdown u-link open' : 'dropdown u-link'">
                                    <a
                                        href="javascript:void(0)"
                                        class="dropdown-toggle"
                                        @click="toggleLogin"
                                    >登录
                                        <strong class="caret" />
                                    </a>
                                    <div
                                        class="dropdown-menu"
                                    >
                                        <div
                                            class="dropdown-menu-first"
                                            @click="toggleLogin"
                                        />
                                        <div
                                            id="header_login"
                                            class="m-log-box dropdown-menu-second"
                                        >
                                            <h4>登录您的账户</h4>
                                            <form action="">
                                                <div class="u-input">
                                                    <h5>用户名</h5>
                                                    <input
                                                        v-model="loginForm.username"
                                                        type="text"
                                                    >
                                                    <span class="icon icon-user" />
                                                    <div
                                                        class="u-wran hide"
                                                    >
                                                        <p>
                                                            <span class="icon icon-wran" />用户名不存在
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="u-input">
                                                    <h5>密码</h5>
                                                    <input
                                                        v-model="loginForm.password"
                                                        type="password"
                                                    >
                                                    <span class="icon icon-lock" />
                                                    <div class="hide u-wran">
                                                        <p>
                                                            <span class="icon icon-wran" />密码错误
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="u-chack">
                                                    <div class="u-tip">
                                                        <input
                                                            id="checkbox1"
                                                            v-model="loginForm.remember_username"
                                                            type="checkbox"
                                                        >
                                                        <label for="checkbox1">记住用户名</label>
                                                    </div>
                                                    <a
                                                        href=""
                                                        class="link"
                                                    >忘记密码？</a>
                                                </div>
                                                <div class="u-btn">
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="btn"
                                                        @click="submitLogin"
                                                    >立即登录</a>
                                                </div>
                                                <div
                                                    v-if="loading"
                                                    class="u-loading"
                                                >
                                                    <span class="u-circle" />
                                                    <span class="u-img" />
                                                </div>
                                            </form>
                                            <div class="u-tip">
                                                <p>
                                                    登录如有问题，请及时联系我们
                                                    <br>QQ：132456 或者
                                                    <a href="">联系我们</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                v-if="memberId > 0"
                                class="m-tools navbar-left"
                            >
                                <div class="m-tools">
                                    <div :class="visibleInfo ? 'dropdown open' : 'dropdown'">
                                        <a
                                            href="javascript:void(0);"
                                            class="dropdown-toggle u-logined "
                                            @click="toggleInfo"
                                        >
                                            <strong>
                                                <em>
                                                    <img :src="memberLevelPic">
                                                </em>{{ memberSurename }}</strong>
                                            <span>￥{{ balance }}</span>
                                        </a>
                                        <div
                                            class="dropdown-menu"
                                            @mouseleave="toggleInfo"
                                        >
                                            <div class="m-logined-box">
                                                <div class="m-dls clearfix">
                                                    <dl>
                                                        <dt>个人银行</dt>
                                                        <dd>
                                                            <router-link :to="{name: 'MemberDeposit'}">
                                                                存款
                                                            </router-link>
                                                            <router-link :to="{name: 'MemberWithdrawal'}">
                                                                提款
                                                            </router-link>
                                                            <router-link :to="{name: 'MemberTransfer'}">
                                                                转账
                                                            </router-link>
                                                            <router-link :to="{name: 'MemberHistory'}">
                                                                明细
                                                            </router-link>
                                                        </dd>
                                                    </dl>
                                                    <dl>
                                                        <dt>个人账户</dt>
                                                        <dd>
                                                            <router-link :to="{name: 'Member'}">
                                                                账户信息
                                                            </router-link>
                                                            <router-link :to="{name: 'MemberVip'}">
                                                                VIP
                                                            </router-link>
                                                            <router-link :to="{name: 'MemberPromotion'}">
                                                                我的红利<em v-if="member.bonus_num > 0">{{ member.bonus_num }}</em>
                                                            </router-link>
                                                            <router-link :to="{name: 'MemberMessage'}">
                                                                消息中心<em v-if="member.message_num > 0">{{ member.message_num }}</em>
                                                            </router-link>
                                                        </dd>
                                                    </dl>
                                                    <dl>
                                                        <dt>健康博彩</dt>
                                                        <dd>
                                                            <router-link :to="{name: 'AboutResponsible'}">
                                                                博彩责任
                                                            </router-link>
                                                            <router-link :to="{name: 'AboutSelfControl'}">
                                                                自我控制
                                                            </router-link>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div class="u-tiplink">
                                                    <a
                                                        href="javascript:void(0);"
                                                        @click="logout"
                                                    >
                                                        退出
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="m-tool-link navbar-right">
                                <div class="wifi-symbol">
                                    <div class="wifi-circle first" />
                                    <div class="wifi-circle second" />
                                    <div class="wifi-circle third" />
                                </div>
                                <div class="wifi-symbol left">
                                    <div class="wifi-circle first" />
                                    <div class="wifi-circle second" />
                                    <div class="wifi-circle third" />
                                </div>
                                <a href="">
                                    <span class="icon icon-mobile" />
                                    <i>{{ $t('navbar.mobile') }}</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'
    import { SettingsModule } from '@/store/modules/settings'
    import { _doSubmit } from '@/api/common'

    @Component
    export default class Header extends Vue {
        private classDefault: boolean = true
        private visibleInfo: boolean = false
        private loading: boolean = false
        private loginForm = {
            username: '',
            password: '',
            remember_username: false
        }
        private registerForm = {
            username: '',
            password: '',
            rpassword: ''
        }

        get member(): any {
            return MemberModule.member
        }

        get memberId(): number {
            return MemberModule.member_id
        }

        get memberSurename(): string {
            return MemberModule.member_surename
        }

        get memberLevelPic(): string {
            return '/static/images/gvip' + (MemberModule.member_level_id - 1) + '.png'
        }

        get balance(): number {
            return MemberModule.balance
        }

        get visibleLogin(): boolean {
            return SettingsModule.showLogin
        }

        get visibleRegister(): boolean {
            return SettingsModule.showRegister
        }

        /**
         * 显示注册窗口
         */
        private toggleRegister() {
            SettingsModule.ChangeSetting({
                key: 'showRegister',
                value: this.visibleRegister !== true
            })
        }

        /**
         * 显示登录窗口
         */
        private toggleLogin() {
            SettingsModule.ChangeSetting({
                key: 'showLogin',
                value: this.visibleLogin !== true
            })
        }

        /**
         * 显示玩家信息窗口
         */
        private toggleInfo() {
            this.visibleInfo = this.visibleInfo !== true
        }

        /**
         * 提交登录
         */
        private submitLogin() {
            var self = this
            this.loading = true
            MemberModule.login(this.loginForm).then((code) => {
                this.loading = false
                this.$toasted.show(code === 1 ? window.i18n.t('login.success') : window.i18n.t('login.error'), {
                    type: code === 1 ? 'success' : 'error'
                })
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 提交注册
         */
        private submitRegister() {
            var self = this
            this.loading = true
            MemberModule.register(this.registerForm).then((response) => {
                this.loading = false
                this.$toasted.show((response as any).msg, {
                    type: (response as any).code === 1 ? 'success' : 'error'
                })
            })
        }

        /**
         * 退出
         */
        private logout() {
            var self = this
            MemberModule.logout().then((code) => {
                this.loading = false
                this.$toasted.show(code === 1 ? window.i18n.t('login.logoutSuccess') : window.i18n.t('login.logoutError'), {
                    type: code === 1 ? 'success' : 'error',
                    onComplete: () => {
                        window.location.reload()
                    }
                })
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 真人游戏
         * @param p_platform
         */
        private play(p_platform: string, p_w: number, p_h: number) {
            let self = this
            window.open('', 'casino', 'width=' + p_w + ',height=' + p_h)
            _doSubmit('/casino/' + p_platform, []).then(response => {
                if ((response as any).code === 1) {
                    window.open((response as any).url, 'casino', 'width=' + p_w + ',height=' + p_h)
                    // document.getElementById('rediect_dom').innerHTML = (response as any).data
                    // setTimeout(function () {
                    //     alert('a');
                    //     (document.forms as any)['pay_form'].submit()
                    // }, 2000)
                } else {
                    this.$toasted.show(window.i18n.t('apiError'), {
                        type: 'error'
                    })
                }
            })
        }
    }
</script>
