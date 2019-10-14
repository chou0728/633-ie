<template>
    <div>
        <div class="m-userInfo">
            <h4 class="u-title">
                明细
            </h4>
            <div class="m-bank">
                <common-money cur-action="history" />
                <div class="sub-nav clearfix">
                    <common-history cur-action="day" />
                </div>
                <div>
                    <div class="choose-form clearfix">
                        <form action="">
                            <div class="data-select">
                                <label>日期：</label>
                                <el-date-picker
                                    v-model="postForm.date_step"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
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
                                <th>
                                    时间
                                </th>
                                <th>
                                    投注金额
                                </th>
                                <th>
                                    输赢
                                </th>
                                <th>
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
                                    {{ item.bet_time }}
                                </td>
                                <td>
                                    {{ item.bet_amount }}
                                </td>
                                <td>
                                    {{ item.win_loss }}
                                </td>
                                <td>
                                    {{ item.t_o }}
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
                            :page-sizes="[20, 30, 40]"
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
    export default class HistoryDay extends Vue {
        private loading: boolean = false
        private postForm: any = {
            date_step: '',
            start: '',
            end: '',
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
            _doSubmit('/member/dayStatistics', this.postForm).then(response => {
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
