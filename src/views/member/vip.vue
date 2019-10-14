<template>
    <div>
        <div class="m-userInfo">
            <h4 class="u-title">
                VIP中心
            </h4>
            <div class="m-power clearfix">
                <div class="power-user clearfix">
                    <div class="user">
                        <div class="photo">
                            <img
                                :src="member.avatar"
                                alt=""
                            >
                        </div>
                        <strong>{{ memberVip.member }}</strong>
                    </div>
                    <div class="progress">
                        <div
                            class="progress-bar progress-success"
                            :style="{width: `${memberVip.vip_progress_bar}%`}"
                        />
                    </div>
                    <div class="vip">
                        <span class="icon icon-vip1" /><strong>{{ memberVip.next_vip_title }}</strong>
                    </div>
                    <p>
                        下个月晋级{{ memberVip.next_vip_title }}还需积分： {{ memberVip.owned_point }} / {{ memberVip.next_point }}
                    </p>
                </div>
                <div class="power-info">
                    <h4>
                        您当前为
                        VIP0
                        会员，可享受以下权益
                    </h4>
                    <ol>
                        <li><i>沙巴体育基础返水0.18%，无上限</i></li>
                        <li><i>真人娱乐基础返水0.58%，无上限</i></li>
                        <li><i>小游戏[仅老虎机]基础返水0.76%，无上限</i></li>
                        <li><i>棋牌基础返水0.76%，无上限</i></li>
                        <li><i>彩票基础返水0.5%，无上限</i></li>
                        <li><i>每周免费提款7次</i></li>
                    </ol>
                </div>
                <div class="power-info power-info-next">
                    <h4>
                        晋级
                        VIP1
                        ，可享受以下权益
                        <a
                            class="pull-right u-change"
                            href="#"
                        >
                            查看更多
                        </a>
                    </h4>
                    <ol>
                        <li><i>生日礼金<strong>588</strong>元（5倍流水可提）</i></li>
                        <li><i>VIP晋升奖金<strong>888</strong>元（5倍流水可提）</i></li>
                        <li><i>每月复活金最高<strong>500</strong>元（负盈利5%）</i></li>
                        <li><i>沙巴体育返水从0.18%升为<strong>0.28%</strong>，无上限</i></li>
                        <li><i>真人娱乐返水从0.58%升为<strong>0.7%</strong>，无上限</i></li>
                        <li><i>小游戏[仅老虎机]返水从0.76%升为<strong>0.9%</strong></i></li>
                        <li><i>棋牌返水从0.76%升为<strong>0.9%</strong></i></li>
                        <li><i>彩票返水从0.5%升为<strong>0.7%</strong>，无上限</i></li>
                        <li><i>每周免费提款<strong>8</strong>次</i></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'
    import { VipModule } from '@/store/modules/vip'

    @Component
    export default class Vip extends Vue {
        private created() {
            VipModule.getMemberVip()
        }

        get member():any {
            return MemberModule.member
        }

        get memberVip():any {
            return VipModule.memberVip
        }
    }
</script>
