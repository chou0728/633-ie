<template>
    <div>
        <div class="tabbable">
            <ul class="nav nav-tabs">
                <li
                    :class="{active: listForm.available === true}"
                >
                    <a
                        href="javascript:void(0)"
                        data-toggle="tab"
                        @click="handleAvailableChange(true)"
                    >可领红利</a>
                </li>
                <li
                    :class="{active: listForm.available === false}"
                >
                    <a
                        href="javascript:void(0)"
                        data-toggle="tab"
                        @click="handleAvailableChange(false)"
                    >已领红利</a>
                </li>
            </ul>
            <div class="tab-content">
                <div
                    id="panel-1"
                    :class="{'tab-pane': true, active: listForm.available === true}"
                >
                    <ul class="m-list">
                        <li
                            v-for="item in availableDatas"
                            :key="item.activity_id"
                            class="clearfix"
                        >
                            <img
                                src="/static/upload/hl.jpg"
                                alt=""
                                class="pull-left"
                            >
                            <div class="pull-left list-node">
                                <h4>
                                    <span>{{ item.title }}</span>
                                    <br>{{ item.remark }}
                                </h4>
                                <p class="times clearfix">
                                    <span
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Tooltip on top"
                                    >发放时间：{{ item.create_time }}</span>|
                                    <span
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Tooltip on top"
                                    >领取资格</span>
                                    <span class="pull-right">提款限额：{{ item.t_o_num }}</span>
                                </p>
                                <div
                                    v-if="item.t_o_from > 0"
                                    class="progress"
                                >
                                    <div
                                        class="progress-bar progress-success"
                                        :style="'width:'+ item.rate_t_o +'%'"
                                    />
                                </div>
                                <p
                                    v-if="item.t_o_from > 0"
                                    class="status"
                                >
                                    <span class="pull-left">{{ item.t_o_from }}</span>
                                    <span>目前流水：{{ item.current_t_o }}</span>
                                    <span class="pull-right">{{ item.t_o_to }}</span>
                                </p>
                                <div
                                    v-if="item.deposit_from > 0"
                                    class="progress"
                                >
                                    <div
                                        class="progress-bar progress-success"
                                        :style="'width:'+ item.rate_deposit +'%'"
                                    />
                                </div>
                                <p
                                    v-if="item.deposit_from > 0"
                                    class="status"
                                >
                                    <span class="pull-left">{{ item.deposit_from }}</span>
                                    <span>目前存款：{{ item.current_deposit }}</span>
                                    <span class="pull-right">{{ item.deposit_to }}</span>
                                </p>
                            </div>
                            <div class="pull-right list-link">
                                <p>
                                    <span>
                                        <strong>￥{{ item.amount }}</strong>
                                        <br>红利金额</span>
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    @click="receive(item.id)"
                                >立即领取</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    id="panel-2"
                    :class="{'tab-pane': true, active: listForm.available === false}"
                >
                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    红利名称
                                </th>
                                <th>
                                    红利金额
                                </th>
                                <th>
                                    发放时间
                                </th>
                                <th>
                                    有效时间
                                </th>
                                <th>
                                    领取状态
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            v-if="receivedDatas[0] !== undefined"
                        >
                            <tr
                                v-for="item in receivedDatas"
                                :key="item.id"
                            >
                                <td>
                                    {{ item.title }}
                                </td>
                                <td>
                                    {{ item.amount }}
                                </td>
                                <td>
                                    {{ item.received_time }}
                                </td>
                                <td>
                                    {{ item.expired_time }}
                                </td>
                                <td>
                                    成功
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td colspan="5">
                                    <p style="font-size: 24px; text-align: center; margin: 80px 0px;">
                                        无已领取红利
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'
    import { _doSubmit, _doGet } from '@/api/common'

    @Component({
        components: {}
    })
    export default class Promotion extends Vue {
        private loading: boolean = false
        private listForm: any = {
            available: true,
            total: 0,
            page: 1,
            limit: 25
        }
        private availableDatas: any = []
        private receivedDatas: any = []

        private created() {
            this.fetchData()
        }

        /**
         * 切换
         *
         * @param p_available   true 未领取|false 未领取
         */
        private handleAvailableChange(p_available: boolean) {
            this.listForm.available = p_available
        }

        private fetchData() {
            let self = this
            _doSubmit('/activity_bonus/availableList', []).then(response => {
                self.availableDatas = response.data
            }).catch(() => {
                this.loading = false
            })
            _doSubmit('/activity_bonus/receivedList', []).then(response => {
                self.receivedDatas = response.data
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 领取红利
         *
         * @param p_id  活动红利ID
         */
        private receive(p_id: number) {
            let self = this
            this.loading = true
            _doSubmit('/activity_bonus/receive', { 'activity_bonus_id': p_id }).then(response => {
                self.loading = false
                if ((response as any).code === 0) {
                    this.$toasted.show((response as any).msg, {
                        type: 'error'
                    })
                } else {
                    this.$toasted.show((response as any).msg, {
                        type: 'success',
                        onComplete: () => {
                            self.fetchData()
                        }
                    })
                }
            }).catch(() => {
                this.loading = false
            })
        }
    }
</script>
