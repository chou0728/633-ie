<template>
    <div>
        <div
            v-loading="loading"
            class="m-userInfo"
        >
            <h4 class="u-title">
                提款
            </h4>

            <div class="m-bank">
                <common-money cur-action="withdrawal" />
                <div
                    v-if="member.member_surename === ''"
                    class="m-form"
                >
                    <h4>
                        <span>您还没有添加个人信息，请先添加</span>
                    </h4>
                    <div class="m-node">
                        <div class="u-btn clearfix">
                            <a
                                href="javascript:void(0);"
                                class="btn"
                                @click="showProfile"
                            >添加个人信息</a>
                        </div>
                    </div>
                </div>
                <div
                    v-if="true"
                    class="m-form"
                >
                    <div class="u-input">
                        <label>请选择银行卡</label>
                        <div class="row">
                            <div
                                v-for="(item, index) in bankList"
                                :key="index"
                                class="col-md-6"
                            >
                                <div
                                    style="cursor: pointer"
                                    @click="handleBankChoose(item.id)"
                                >
                                    <div class="card">
                                        <div class="card-header">
                                            <span>{{ item.bank_name }}</span>
                                            <span>尾号：{{ item.bank_account }}</span>
                                            <span
                                                v-if="item.is_default === 1"
                                                class="glyphicon glyphicon-ok-circle"
                                            />
                                        </div>
                                        <div class="card-body">
                                            <div class="u-btn">
                                                <a
                                                    :href="'/member/history?bank_id=' + item.id"
                                                    class="u-change pull-left"
                                                    style="width: 70px"
                                                >转账记录</a>
                                                <a
                                                    class="u-change1 pull-right"
                                                    href="javascript:void(0);"
                                                    style="width: 70px"
                                                    @click="handleDelete(item.id)"
                                                >移除卡片</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header card-header--red">
                                        <span>新增银行卡</span>
                                    </div>
                                    <div class="card-body">
                                        <div class="u-btn">
                                            <a
                                                class="u-change"
                                                href="javascript:void(0);"
                                                @click="showBank(0)"
                                            >添加银行卡</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="u-input">
                        <label>请输入提款金额</label>
                        <input
                            v-model="postForm.amount"
                            type="text"
                            placeholder="提款金额"
                        >
                        <div class="u-tip">
                            提款需要完成流水限额，即客户需要投注之后才可进行提款，比如您存款1000元，买彩票100元，中彩500元，账户合计1500元。此时您的可提款额为600元，还需完成900有效流水，才可全额提款
                        </div>
                        <div class="u-wran">
                            !可提款金额：￥{{ member.can_withdrawal }}
                        </div>
                    </div>
                    <div class="u-btn clearfix">
                        <a
                            href="javascript:void(0);"
                            class="btn"
                            @click="handleWithdrawal"
                        >下一步</a>
                    </div>
                </div>
                <div
                    v-if="member.member_surename !== ''"
                    class="m-tipinfo clearfix"
                >
                    <h5>温馨提示</h5>
                    <div class="m-info">
                        <p>
                            1. 每个帐户每周享有7次免手续费服务，第8次开始收取1%手续费，提款次数无上限。 更多详情请参考存提款说明。计算周期：每周一中午12:00至下周一上午11:59。
                        </p>
                        <p>2. 提款银行卡卡主姓名必须与您填定的真实姓名一致，并仔细核对银行卡号。</p>
                        <p>3. 使用上一次成功提款银行卡再次进行提款时，则无需再输入提款密码。</p>
                        <p>4. 不可同时申请多笔提款，须在首笔提款成功后方可再进行申请。</p>
                        <table class="table1">
                            <tr>
                                <th colspan="2">
                                    提款限额
                                </th>
                            </tr>
                            <tr>
                                <td>单笔限额（元）</td>
                                <td>100 - 450,000</td>
                            </tr>
                            <tr>
                                <td>每日限额（元）</td>
                                <td>2,000,000</td>
                            </tr>
                        </table>
                    </div>
                    <h5 class="pull-right">
                        <em>支付遇到困难？</em>
                        <a href="">联系客服</a>
                    </h5>
                </div>
            </div>
        </div>
        <dialog-member />
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'
    import { DialogModule } from '@/store/modules/dialog'

    import CommonMoney from './components/common-money.vue'
    import DialogMember from './components/dialog-member.vue'
    import { _list, _delete } from '@/api/member-bank'
    import { _withdrawal } from '@/api/member'

    @Component({
        components: {
            DialogMember,
            CommonMoney
        }
    })
    export default class Withdrawal extends Vue {
        private loading: boolean = false
        private bankList: any = []
        private postForm: any = {
            bank_id: 0,
            amount: ''
        }

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
            this.fetchData()
        }

        private flushInfo() {
            MemberModule.getProfile(true)
        }

        /**
         * 重载页面的一些信息
         */
        private flushPage() {
            this.fetchData()
        }

        /**
         * 获取所有银行卡
         */
        private fetchData() {
            let self = this
            _list().then(response => {
                if ((response as any).code === 1) {
                    self.bankList = (response as any).data
                }
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 选择
         */
        private handleBankChoose(p_id: number) {
            this.bankList.forEach((val: any, idx: any, array: any) => {
                if (val.id === p_id) {
                    this.bankList[idx].is_default = 1
                } else {
                    this.bankList[idx].is_default = 2
                }
            })
        }

        /**
         * 删除
         */
        private handleDelete(p_id: number) {
            var self = this
            this.$confirm(this.$t('confirm.delete') as string, this.$t('confirm.tip') as string, {
                confirmButtonText: this.$t('confirm.confirm') as string,
                cancelButtonText: this.$t('confirm.cancel') as string,
                type: 'warning'
            }).then(() => {
                this.loading = true
                const _opts = {
                    id: p_id
                }
                _delete(_opts).then(response => {
                    this.$toasted.show((response as any).msg, {
                        type: (response as any).code === 0 ? 'error' : 'success',
                        onComplete: () => {
                            this.loading = false
                            self.fetchData()
                        }
                    })
                }).catch(() => {
                    return false
                })
            })
        }

        /**
         * 确认提款
         */
        private handleWithdrawal() {
            let self = this
            this.bankList.forEach((val: any, idx: any, array: any) => {
                if (val.is_default === 1) {
                    self.postForm.bank_id = val.id
                }
            })
            _withdrawal(this.postForm).then(response => {
                this.$toasted.show((response as any).msg, {
                    type: (response as any).code === 0 ? 'error' : 'success',
                    onComplete: () => {
                        self.flushInfo()
                    }
                })
            }).catch(() => {
                return false
            })
        }

        /**
         * 显示用户认证界面
         */
        private showProfile() {
            DialogModule.ToggleDialog({ dialogName: 'DialogProfile', dialogData: {} })
        }

        /**
         * 显示银行卡新增和编辑界面
         * @param number id   银行卡ID
         */
        private showBank(id: number) {
            DialogModule.ToggleDialog({ dialogName: 'DialogBank', dialogData: { id } })
        }
    }
</script>
<style lang="scss">

    .m-bank {
        padding-bottom: 10px;

        .card {
            border: 1px solid #EBEEF5;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            margin: 10px 0;
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            padding: 18px 20px;
            background-color: #fff;
            position: relative;

            &--red {
                color: #AB1813;
            }

            .glyphicon {
                position: absolute;
                top: 0;
                right: 0;
                padding: 4px;
                color: #AB1813;
            }
        }

        .card-body {
            padding: 10px;
        }

        .u-btn {
            overflow: hidden;
        }
    }

</style>
