<template>
    <div>
        <div
            v-loading="loading"
            class="m-userInfo"
        >
            <h4 class="u-title">
                收件箱
            </h4>
            <div class="panel-wrap">
                <div
                    v-if="messageList.length === 0"
                    class="empty-tip"
                >
                    无消息
                </div>
                <div class="m-panels">
                    <div
                        v-for="item in messageList"
                        :key="item.id"
                        class="panel-group"
                    >
                        <div class="u-check">
                            <input
                                :id="`checkbox-${item.id}`"
                                v-model="item.is_select"
                                type="checkbox"
                            >
                            <label :for="`checkbox-${item.id}`" />
                        </div>
                        <dl
                            class="panel"
                            @click="handleMessageClick(item)"
                        >
                            <dt
                                :style="headingStyle(item.is_read)"
                                class="panel-heading"
                            >
                                <strong
                                    :style="headingStyle(item.is_read)"
                                >
                                    系统公告
                                </strong>
                                {{ item.title }}
                                <span>{{ item.create_time }}</span>
                            </dt>
                            <dd
                                :class="{'hide': activeMessageId !== item.id}"
                                class="panel-collapse"
                            >
                                <div
                                    class="panel-body"
                                    v-html="item.content"
                                />
                            </dd>
                        </dl>
                    </div>
                </div>
                <nav
                    aria-label="Page navigation"
                    class="page"
                >
                    <div class="m-tool pull-left">
                        <div class="u-check">
                            <input
                                id="checkbox-select-all"
                                v-model="isAllSelected"
                                type="checkbox"
                                @change="selectAll"
                            >
                            <label for="checkbox-select-all">全选</label>
                        </div>
                        <span>
                            <i class="icon icon-del" />
                            <a
                                href="javascript:void(0)"
                                @click="deleteSelectedMessages"
                            >
                                删除
                            </a>
                        </span>
                        <span>
                            <i class="icon icon-read" />
                            <a
                                href="javascript:void(0)"
                                @click="readSelectedMessages"
                            >
                                标记为已读
                            </a>
                        </span>
                    </div>
                    <el-pagination
                        :current-page="searchForm.page"
                        :page-size.sync="searchForm.limit"
                        :page-sizes="[10, 20, 30, 40]"
                        :total="searchForm.total"
                        layout="total, sizes, prev, pager, next, jumper"
                        @current-change="handleCurrentChange"
                        @size-change="handleSizeChange"
                    />
                    <!--                    <ul class="pagination">-->
                    <!--                        <li>-->
                    <!--                            <a-->
                    <!--                                href="#"-->
                    <!--                                aria-label="Previous"-->
                    <!--                            >-->
                    <!--                                <span aria-hidden="true">&laquo;</span>-->
                    <!--                            </a>-->
                    <!--                        </li>-->
                    <!--                        <li>-->
                    <!--                            <a href="#">1</a>-->
                    <!--                        </li>-->
                    <!--                        <li>-->
                    <!--                            <a href="#">2</a>-->
                    <!--                        </li>-->
                    <!--                        <li>-->
                    <!--                            <a href="#">3</a>-->
                    <!--                        </li>-->
                    <!--                        <li>-->
                    <!--                            <a href="#">4</a>-->
                    <!--                        </li>-->
                    <!--                        <li>-->
                    <!--                            <a href="#">5</a>-->
                    <!--                        </li>-->
                    <!--                        <li>-->
                    <!--                            <a-->
                    <!--                                href="#"-->
                    <!--                                aria-label="Next"-->
                    <!--                            >-->
                    <!--                                <span aria-hidden="true">&raquo;</span>-->
                    <!--                            </a>-->
                    <!--                        </li>-->
                    <!--                    </ul>-->
                    <!--                    <div class="m-quick">-->
                    <!--                        跳转到-->
                    <!--                        <input type="text">-->
                    <!--                        <a-->
                    <!--                            href=""-->
                    <!--                            class="link"-->
                    <!--                        >GO</a>-->
                    <!--                    </div>-->
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'
    import { _message, _messageDelete, _messageRead } from '@/api/member'

    @Component({})
    export default class Message extends Vue {
        private loading: boolean = false
        private messageList: any = []
        private activeMessageId: any = ''
        private isAllSelected: boolean = false

        private searchForm: any = {
            type: 0,
            page: 1,
            limit: 10,
            total: 0
        }

        /**
         * 动态给予标头样式
         *
         * @param is_read  1-已读 2-未读
         */
        private headingStyle(is_read: number) {
            return {
                fontWeight: is_read === 1 ? 'normal' : 'bold'
            }
        }

        private created() {
            this.fetchData()
        }

        private fetchData() {
            let self = this
            this.loading = true
            _message(this.searchForm).then(response => {
                self.loading = false
                this.messageList.splice(0)
                response.data.datas.forEach((item: any, index: number) => {
                    this.messageList.push({
                        ...item,
                        index,
                        is_select: false
                    })
                })
                self.searchForm.total = response.data.total
            })
        }

        /** 表格頁面 **/
        private handleSizeChange(pageSize: number) {
            this.searchForm.limit = pageSize
            this.fetchData()
        }

        private handleCurrentChange(currentPage: number) {
            this.searchForm.page = currentPage
            this.fetchData()
        }
        /**
         * 点击消息
         *
         * @param clickItem
         */
        private handleMessageClick(clickItem: any) {
            const { id, is_read, index } = clickItem
            // 打开內容
            this.activeMessageId = this.activeMessageId === id ? '' : id
            // 设为已读
            if (is_read === 2) {
                const newItem = { ...clickItem, is_read: 1 }
                this.$set(this.messageList, index, newItem)
                _messageRead({ id }).then(() => {
                    // 刷新消息中心显示的数量
                    MemberModule.getProfile(true)
                })
            }
        }
        /**
         * 删除消息
         */
        private deleteSelectedMessages() {
            const self = this
            let selectList: any = []
            for (let item of this.messageList) {
                if (item.is_select) {
                    selectList.push(item.id)
                }
            }
            if (selectList.length === 0) return
            this.loading = true
            _messageDelete({ id: selectList.join() })
                .then(() => {
                    self.fetchData()
                    MemberModule.getProfile(true)
                })
                .finally(() => {
                    self.loading = false
                    self.isAllSelected = false
                })
        }

        /**
         * 设置消息已读
         */
        private readSelectedMessages() {
            const self = this
            let selectList: any = []
            let unreadList: any = []
            for (let item of this.messageList) {
                if (item.is_select) {
                    selectList.push(item.id)
                }
                if (item.is_select && item.is_read === 2) {
                    unreadList.push(item.id)
                }
            }
            if (selectList.length === 0) return
            this.loading = true
            _messageRead({ id: unreadList.join() })
                .then(() => {
                    self.fetchData()
                    MemberModule.getProfile(true)
                })
                .finally(() => {
                    self.loading = false
                    self.isAllSelected = false
                })
        }

        /**
         * 全选
         */
        private selectAll() {
            for (let item of this.messageList) {
                item.is_select = this.isAllSelected
            }
        }
    }
</script>

<style lang="scss" scoped>
    .empty-tip {
        text-align: center;
    }

    .panel-heading:hover {
        cursor: pointer;
    }

    .u-check label:hover {
        cursor: pointer;
    }

</style>
