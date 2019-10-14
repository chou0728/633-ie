<template>
    <div>
        <div class="m-userInfo">
            <h4 class="u-title">
                明细
            </h4>
            <div class="m-bank">
                <common-money cur-action="history" />
                <div class="sub-nav clearfix">
                    <common-history cur-action="bet" />
                </div>
                <div>
                    <div class="choose-form clearfix">
                        <form action="">
                            <div class="u-select">
                                <span class="mark" />
                                <select
                                    v-model="postForm.thirdparty_parent_id"
                                >
                                    <option value="">
                                        全部类别
                                    </option>
                                </select>
                            </div>
                            <div class="u-select">
                                <span class="mark" />
                                <select
                                    v-model="postForm.thirdparty_id"
                                >
                                    <option value="">
                                        馆别
                                    </option>
                                </select>
                            </div>
                            <div class="u-select">
                                <span class="mark" />
                                <select
                                    v-model="postForm.is_settle"
                                >
                                    <option value="">
                                        结算状态
                                    </option>
                                    <option value="1">
                                        已结算
                                    </option>
                                    <option value="2">
                                        未结算
                                    </option>
                                </select>
                            </div>
                            <div class="data-select">
                                <label>日期：</label>
                                <el-date-picker
                                    v-model="postForm.date_step"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    value-format="yyyy-MM-dd"
                                    @change="handleDateStep"
                                />
                            </div>
                            <div class="u-btn">
                                <a
                                    href="javascript:void(0)"
                                    class="btn"
                                    @click="fetchData"
                                >查询</a>
                            </div>
                        </form>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th width="130">
                                    投注单号
                                </th>
                                <th width="110">
                                    时间<br>(GMT +8)
                                </th>
                                <th>
                                    投注内容
                                </th>
                                <th width="70">
                                    赔率
                                </th>
                                <th width="90">
                                    投注金额
                                </th>
                                <th width="70">
                                    输赢
                                </th>
                                <th width="70">
                                    流水
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, idx) in tableDatas"
                                :key="idx"
                            >
                                <td>
                                    {{ item.bet_id }}
                                </td>
                                <td style="text-align: center">
                                    {{ item.bet_time }}
                                </td>
                                <td>
                                    {{ item.bet_content }}
                                </td>
                                <td>
                                    {{ item.init_bet_rate }}
                                </td>
                                <td>
                                    {{ item.real_bet_amount }}
                                </td>
                                <td>
                                    {{ item.win_loss }}
                                </td>
                                <td>
                                    {{ item.real_t_o }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <nav
                        aria-label="Page navigation"
                        class="page"
                    >
                        <el-pagination
                            :current-page="postForm.page"
                            :page-sizes="[10, 20, 30, 40]"
                            :page-size.sync="postForm.limit"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="postForm.total"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                        />
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'

    import CommonMoney from './components/common-money.vue'
    import CommonHistory from './components/common-history.vue'
    import { _doSubmit, _doGet } from '@/api/common'

    @Component({
        components: {

            CommonMoney,
            CommonHistory
        }
    })
    export default class HistoryBet extends Vue {
        private loading: boolean = false
        private postForm: any = {
            date_step: '',
            start: '',
            end: '',
            thirdparty_id: '',
            thirdparty_parent_id: '',
            is_settle: '',
            total: 0,
            page: 1,
            limit: 20
        }
        private tableDatas: any = []

        get member() {
            return MemberModule.member
        }

        private created() {
            MemberModule.getProfile()
            this.fetchData()
        }

        private fetchData() {
            let self = this
            this.loading = true
            _doSubmit('/member/betHistory', this.postForm).then(response => {
                self.loading = false
                self.tableDatas = response.data.datas
                self.postForm.total = response.data.total
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 日期区间选择
         * @param val
         */
        private handleDateStep(val: any) {
            this.postForm.start = val[0]
            this.postForm.end = val[1]
            this.fetchData()
        }

        /** 表格頁面 **/
        private handleSizeChange(pageSize: number) {
            this.postForm.limit = pageSize
            this.fetchData()
        }

        private handleCurrentChange(currentPage: number) {
            this.postForm.page = currentPage
            this.fetchData()
        }
    }
</script>
<style>
</style>
