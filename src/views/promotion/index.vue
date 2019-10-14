<template>
    <div class="container">
        <div class="m-nav">
            <ul>
                <li>
                    <a
                        href="javascript:void(0);"
                        :class="{active: listForm.platform_type_id === 0}"
                        @click="handlePlatformTypeChange(0)"
                    >
                        <span class="icon icon-hotgame" />热门活动</a>
                </li>
                <li>
                    <a
                        href="javascript:void(0);"
                        :class="{active: listForm.platform_type_id === 1}"
                        @click="handlePlatformTypeChange(1)"
                    >
                        <span class="icon icon-sport" />体育</a>
                </li>
                <li>
                    <a
                        href="javascript:void(0);"
                        :class="{active: listForm.platform_type_id === 3}"
                        @click="handlePlatformTypeChange(3)"
                    >
                        <span class="icon icon-happy" />真人娱乐</a>
                </li>
                <li>
                    <a
                        href="javascript:void(0);"
                        :class="{active: listForm.platform_type_id === 5}"
                        @click="handlePlatformTypeChange(5)"
                    >
                        <span class="icon icon-game" />小游戏</a>
                </li>
                <li>
                    <a
                        href="javascript:void(0);"
                        :class="{active: listForm.platform_type_id === 2}"
                        @click="handlePlatformTypeChange(2)"
                    >
                        <span class="icon icon-ticket" />彩票</a>
                </li>
                <li>
                    <a
                        href="javascript:void(0);"
                        :class="{active: listForm.platform_type_id === 100}"
                        @click="handlePlatformTypeChange(100)"
                    >
                        <span class="icon icon-money" />存提款</a>
                </li>
                <li>
                    <a href="">
                        <i class="lab" /><i class="lab-txt">已结束</i>
                        <i class="lab red" /><i class="lab-txt">进行中</i>
                        <span class="icon icon-steam" />Steam</a>
                </li>
            </ul>
        </div>
        <div
            v-for="(item, idx) in datas"
            :key="idx"
            :class="'m-module' + (item.autoHeight === true ? ' autoheight' : '')"
        >
            <div class="module-img pull-left">
                <p
                    v-if="item.end_time < '2030-01-01'"
                >
                    {{ item.start_time }} - {{ item.end_time }}
                </p>
                <p
                    v-if="item.end_time > '2030-01-01'"
                >
                    {{ $t('promotion.long_time') }}
                </p>
                <img
                    :src="item.image_url"
                    alt=""
                    width="324"
                    height="400"
                >
            </div>
            <div class="module-info">
                <div class="tally">
                    <span class="icon icon-game" />
                </div>
                <h4>
                    {{ item.title }}
                    <br>
                    <span>{{ item.remark }}</span>
                </h4>
                <a
                    v-if="item.show_btn === 1"
                    href="javascript:void(0)"
                    class="u-change"
                    style="line-height: 40px"
                    @click="participate(item.activity_id)"
                >参与活动</a>
                <div v-html="item.content" />
                <div class="fold-link">
                    <a
                        href="javascript:void(0);"
                        class="u-change"
                        @click="toggleAutoheight(idx)"
                    >展开</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { _list, _participate } from '@/api/activity'

    @Component({
        components: {}
    })
    export default class Index extends Vue {
        private listForm: any = {
            platform_type_id: 0,
            total: 0,
            page: 1,
            limit: 25
        }
        private datas: any = []

        private created() {
            this.fetchData()
        }

        /**
         * 切换类型
         * @param p_id
         */
        private handlePlatformTypeChange(p_id: number) {
            this.listForm.platform_type_id = p_id
            this.fetchData()
        }

        /**
         * 自动高度
         */
        private toggleAutoheight(p_idx: number) {
            this.datas[p_idx].autoHeight = !this.datas[p_idx]['autoHeight']
            this.$forceUpdate()
        }

        /**
         * 获取数据
         */
        private fetchData() {
            let self = this
            _list(this.listForm).then(response => {
                if ((response as any).code === 1) {
                    self.datas = response.data
                    for (let idx in self.datas) {
                        self.datas[idx]['autoHeight'] = false
                    }
                } else {
                    self.datas = []
                }
            })
        }

        /**
         * 参与活动
         */
        private participate(p_activityId: number) {
            let self = this
            _participate({ 'activity_id': p_activityId }).then(response => {
                if ((response as any).code === 1) {
                    self.fetchData()
                }
                this.$toasted.show((response as any).msg, {
                    type: (response as any).code === 1 ? 'success' : 'error'
                })
            })
        }
    }
</script>
