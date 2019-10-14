<template>
    <div>
        <div class="m-userInfo">
            <h4 class="u-title">
                明细
            </h4>
            <div class="m-bank">
                <common-money cur-action="history" />
                <div class="sub-nav clearfix">
                    <common-history cur-action="money" />
                </div>
                <div>
                    <div class="choose-form clearfix">
                        <form action="">
                            <div class="u-select">
                                <span class="mark" />
                                <select
                                    v-model="postForm.action_type"
                                >
                                    <option value="">
                                        全部类别
                                    </option>
                                    <option value="100">
                                        存款
                                    </option>
                                    <option value="99">
                                        提款
                                    </option>
                                    <option value="3">
                                        转账
                                    </option>
                                    <option value="4">
                                        红利
                                    </option>
                                </select>
                            </div>
                            <div class="u-select">
                                <span class="mark" />
                                <select
                                    v-model="postForm.status"
                                >
                                    <option value="">
                                        全部状态
                                    </option>
                                    <option value="1">
                                        成功
                                    </option>
                                    <option value="2">
                                        处理中
                                    </option>
                                    <option value="3">
                                        失败
                                    </option>
                                    <option value="4">
                                        取消
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
                                    交易单号
                                </th>
                                <th>
                                    时间(GMT +8)
                                </th>
                                <th>
                                    交易类别
                                </th>
                                <th>
                                    交易内容
                                </th>
                                <th>
                                    金额
                                </th>
                                <th>
                                    交易状态
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, idx) in tableDatas"
                                :key="idx"
                            >
                                <td>
                                    {{ item.sn }}
                                </td>
                                <td>
                                    {{ item.action_time }}
                                </td>
                                <td>
                                    <div
                                        v-if="item.action_type === 100"
                                    >
                                        存款
                                    </div>
                                    <div
                                        v-if="item.action_type === 99"
                                    >
                                        提款
                                    </div>
                                    <div
                                        v-if="item.action_type === 1"
                                    >
                                        系统
                                    </div>
                                    <div
                                        v-if="item.action_type === 2"
                                    >
                                        其它
                                    </div>
                                    <div
                                        v-if="item.action_type === 3"
                                    >
                                        转账
                                    </div>
                                    <div
                                        v-if="item.action_type === 4"
                                    >
                                        红利
                                    </div>
                                </td>
                                <td>
                                    <div
                                        v-if="item.method_type === 1 && item.thirdparty_id > 0"
                                        style="color: #67C23A"
                                    >
                                        Main -> {{ item.thirdparty_name }}
                                    </div>
                                    <div
                                        v-if="item.method_type === 2 && item.thirdparty_id > 0"
                                        style="color: #F56C6C"
                                    >
                                        {{ item.thirdparty_name }} -> Main
                                    </div>
                                    <div
                                        v-if="item.method_type === 1 && item.action_type === 99"
                                        style="color: #67C23A"
                                    >
                                        {{ $t('member.history.withdrawal_fail_back') }}
                                    </div>
                                </td>
                                <td>
                                    <span
                                        v-if="item.method_type === 1"
                                        style="color: #67C23A"
                                    >+ {{ item.amount }}</span>
                                    <span
                                        v-if="item.method_type !== 1"
                                        style="color: #F56C6C"
                                    >- {{ item.amount }}</span>
                                </td>
                                <td>
                                    <div
                                        v-if="item.status === 1"
                                    >
                                        成功
                                    </div>
                                    <div
                                        v-if="item.status === 2"
                                    >
                                        处理中
                                    </div>
                                    <div
                                        v-if="item.status === 3"
                                    >
                                        取消
                                    </div>
                                    <div
                                        v-if="item.status === 4"
                                    >
                                        失败
                                    </div>
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
    export default class History extends Vue {
        private loading: boolean = false
        private postForm: any = {
            date_step: '',
            start: '',
            end: '',
            action_type: '',
            status: '',
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
            _doSubmit('/member/moneyHistory', this.postForm).then(response => {
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
