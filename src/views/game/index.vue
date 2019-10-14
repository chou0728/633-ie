<template>
    <div>
        <div class="game-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="m-sorts">
                            <ul>
                                <li
                                    :class="{cur: listForm.thirdparty_parent_id === 0}"
                                    @click="handleThirdpartyChange(0)"
                                >
                                    <a
                                        href="javascript:void(0);"
                                        @click="handleThirdpartyChange(0)"
                                    >ALL</a>
                                </li>
                                <li
                                    :class="{cur: listForm.thirdparty_parent_id === 140000}"
                                >
                                    <a
                                        href="javascript:void(0);"
                                        @click="handleThirdpartyChange(140000)"
                                    >BBIN</a>
                                </li>
                                <li
                                    :class="{cur: listForm.thirdparty_parent_id === 180000}"
                                >
                                    <a
                                        href="javascript:void(0);"
                                        @click="handleThirdpartyChange(180000)"
                                    >AG</a>
                                </li>
                            </ul>
                        </div>
                        <div class="search-form clearfix">
                            <div class="u-input pull-left">
                                <input
                                    v-model="listForm.title"
                                    type="text"
                                    placeholder="关键字"
                                >
                                <input
                                    type="button"
                                    value="搜索"
                                    class="btn"
                                    @click="onSearch()"
                                >
                            </div>
                        </div>
                        <ul class="game-nav">
                            <li :class="{active: category === ''}">
                                <a
                                    href="javascript:void(0)"
                                    @click="handleCategoryChange('')"
                                >全部游戏</a>
                            </li>
                            <li :class="{active: category === 'hot'}">
                                <a
                                    href="javascript:void(0)"
                                    @click="handleCategoryChange('hot')"
                                >
                                    热门游戏
                                </a>
                            </li>
                            <li :class="{active: category === 'fav'}">
                                <a
                                    href="javascript:void(0)"
                                    @click="handleCategoryChange('fav')"
                                >
                                    收藏游戏
                                </a>
                            </li>
                            <li :class="{active: category === 'history'}">
                                <a
                                    href="javascript:void(0)"
                                    @click="handleCategoryChange('history')"
                                >
                                    历史游戏
                                </a>
                            </li>
                            <li :class="{active: category === 'tiger'}">
                                <a
                                    href="javascript:void(0)"
                                    @click="handleCategoryChange('tiger')"
                                >
                                    老虎机
                                </a>
                            </li>
                            <li :class="{active: category === 'fish'}">
                                <a
                                    href="javascript:void(0)"
                                    @click="handleCategoryChange('fish')"
                                >
                                    捕鱼游戏
                                </a>
                            </li>
                            <li :class="{active: category === 'desktop'}">
                                <a
                                    href="javascript:void(0)"
                                    @click="handleCategoryChange('desktop')"
                                >
                                    桌面游戏
                                </a>
                            </li>
                            <li :class="{active: category === 'game'}">
                                <a
                                    href="javascript:void(0)"
                                    @click="handleCategoryChange('game')"
                                >
                                    游戏厅
                                </a>
                            </li>
                        </ul>
                        <div class="game-main">
                            <div class="game-hot">
                                <h2>推荐游戏</h2>
                                <div class="game-swiper">
                                    <div class="swiper-container">
                                        <ul class="swiper-wrapper">
                                            <li
                                                v-for="(item, idx) in recommendedData"
                                                :key="idx"
                                                class="swiper-slide"
                                            >
                                                <span
                                                    v-if="item.is_hot === 1"
                                                    class="label hot"
                                                >HOT</span>
                                                <span
                                                    v-else-if="item.is_new === 1"
                                                    class="label new"
                                                >NEW</span>

                                                <img
                                                    :src="item.pc_image_url"
                                                    alt=""
                                                >
                                                <span class="name">{{ item.pc_title }}</span>
                                                <div class="layer">
                                                    <div class="links">
                                                        <a
                                                            :href="'/game/play?id=' + item.id"
                                                            class="away"
                                                            target="play"
                                                        >马上开始</a>
                                                        <a
                                                            v-if="item.pc_test === 1"
                                                            :href="'/game/play?test=1&id=' + item.id"
                                                            target="play"
                                                        >免费试玩</a>
                                                    </div>
                                                    <a
                                                        v-if="item.is_favorite !== 1"
                                                        href="javascript:void(0)"
                                                        class="star-link"
                                                        @click="handleFavorite(item.id)"
                                                    >
                                                        <span class="icon icon-star" />收藏</a>
                                                    <a
                                                        v-if="item.is_favorite === 1"
                                                        href="javascript:void(0)"
                                                        class="star-link"
                                                        @click="handleFavorite(item.id)"
                                                    >
                                                        <span class="icon icon-star" />取消收藏</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="swiper-pagination" />
                                    <div class="swiper-button-next" />
                                    <div class="swiper-button-prev" />
                                </div>
                            </div>
                            <div class="game-list">
                                <ul class="clearfix">
                                    <li
                                        v-for="(item, idx) in datas"
                                        :key="idx"
                                        class="swiper-slide"
                                    >
                                        <span
                                            v-if="item.is_hot === 1"
                                            class="label hot"
                                        >HOT</span>
                                        <span
                                            v-else-if="item.is_new === 1"
                                            class="label new"
                                        >NEW</span>

                                        <img
                                            :src="item.pc_image_url"
                                            alt=""
                                        >
                                        <span class="name">{{ item.pc_title }}</span>
                                        <div class="layer">
                                            <div class="links">
                                                <a
                                                    :href="'/game/play?id=' + item.id"
                                                    class="away"
                                                    target="play"
                                                >马上开始</a>
                                                <a
                                                    v-if="item.pc_test === 1"
                                                    :href="'/game/play?test=1&id=' + item.id"
                                                    target="play"
                                                >免费试玩</a>
                                            </div>
                                            <a
                                                v-if="item.is_favorite !== 1"
                                                href="javascript:void(0)"
                                                class="star-link"
                                                @click="handleFavorite(item.id)"
                                            >
                                                <span class="icon icon-star" />收藏</a>
                                            <a
                                                v-if="item.is_favorite === 1"
                                                href="javascript:void(0)"
                                                class="star-link"
                                                @click="handleFavorite(item.id)"
                                            >
                                                <span class="icon icon-star" />取消收藏</a>
                                        </div>
                                    </li>
                                </ul>
                                <a
                                    v-if="Math.ceil(listForm.total/listForm.limit) > listForm.page"
                                    href="javascript:void(0)"
                                    class="more"
                                    @click="onNext"
                                >更多</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="ad-wrap">
                            <h4>热门游戏</h4>

                            <div class="ad-swiper-container">
                                <ul class="swiper-wrapper">
                                    <li
                                        v-for="(item, idx) in featureData"
                                        :key="idx"
                                        class="swiper-slide"
                                    >
                                        <a
                                            :href="'/game/play?id=' + item.id"
                                            target="play"
                                        >
                                            <span class="label">
                                                RTP<br>{{ item.return_reward_rate }}%
                                            </span>
                                            <img
                                                :src="item.pc_image_url"
                                                alt=""
                                            >
                                            <span class="name">{{ item.pc_title }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="game-tab">
                            <div class="nav nav-tabs">
                                <span>返奖率排名</span>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane active">
                                    <ul>
                                        <li
                                            v-for="(item, idx) in returnRewardRateData"
                                            :key="idx"
                                            class="swiper-slide"
                                        >
                                            <a
                                                :href="'/game/play?id=' + item.id"
                                                target="play"
                                            >
                                                <span>{{ idx + 1 }}</span>
                                                <img
                                                    :src="item.pc_image_url"
                                                >
                                                <p>
                                                    <strong>{{ item.return_reward_rate }}%</strong>
                                                    {{ item.pc_title }}
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { _doGet } from '@/api/common'

    import Swiper from 'swiper'

    @Component({
        components: {}
    })
    export default class Index extends Vue {
        private listForm: any = {
            thirdparty_parent_id: 0,
            category_id: 0,
            title: '',
            is_pc: 1,
            total: 0,
            page: 1,
            limit: 25
        }
        private category: string = ''
        private recommendedData: any = []
        private featureData: any = []
        private newData: any = []
        private returnRewardRateData: any = []
        private datas: any = []
        private mounted() {
            let a = new Swiper('.swiper-container', {
                autoplay: true,
                slidesPerView: 4,
                spaceBetween: 16,
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                pagination: { el: '.swiper-pagination' },
                initialSlide: 0,
                observer: true,
                observeParents: true
            })
            let b = new Swiper('.ad-swiper-container', {
                autoplay: true,
                slidesPerView: 2,
                loopedSlides: 2,
                spaceBetween: 8,
                initialSlide: 0,
                observer: true,
                observeParents: true,
                direction: 'vertical'
            })
        }

        private created() {
            this.fetchRecommendedData()
            this.fetchFeatureData()
            this.fetchReturnRewardData()
            this.fetchData()
        }

        /**
         * 切换第三方
         * @param p_id
         */
        private handleThirdpartyChange(p_id: number) {
            this.listForm.thirdparty_parent_id = p_id
            this.resetData()
            this.fetchData()
        }

        /**
         * 切换类别
         * @param p_type
         */
        private handleCategoryChange(p_type: string) {
            this.resetData()
            this.category = p_type
            switch (p_type) {
                case 'hot':
                    this.fetchHotData()
                    break
                case 'fav':
                    this.fetchFavData()
                    break
                case 'history':
                    this.fetchHistoryData()
                    break
                case 'tiger':
                    this.listForm.category_id = 3
                    this.fetchData()
                    break
                case 'desktop':
                    this.listForm.category_id = 2
                    this.fetchData()
                    break
                case 'game':
                    this.listForm.category_id = 6
                    this.fetchData()
                    break
                case 'fish':
                    this.listForm.category_id = 8
                    this.fetchData()
                    break
                default:
                    this.listForm.category_id = 0
                    this.fetchData()
                    break
            }
        }
        /**
         * 收藏，取消收藏
         * @param p_id
         */
        private handleFavorite(p_id: number) {
            _doGet('/game/doFavorite', { game_id: p_id }).then(response => {
                if ((response as any).code === 1) {
                    for (let idx in this.datas) {
                        if (this.datas[idx].id === p_id) {
                            this.datas[idx].is_favorite = this.datas[idx].is_favorite === 1 ? 2 : 1
                        }
                    }
                    for (let idx in this.recommendedData) {
                        if (this.recommendedData[idx].id === p_id) {
                            this.recommendedData[idx].is_favorite = this.recommendedData[idx].is_favorite === 1 ? 2 : 1
                        }
                    }
                    for (let idx in this.featureData) {
                        if (this.featureData[idx].id === p_id) {
                            this.featureData[idx].is_favorite = this.featureData[idx].is_favorite === 1 ? 2 : 1
                        }
                    }
                    for (let idx in this.newData) {
                        if (this.newData[idx].id === p_id) {
                            this.newData[idx].is_favorite = this.newData[idx].is_favorite === 1 ? 2 : 1
                        }
                    }
                }
                this.$toasted.show((response as any).msg, {
                    type: (response as any).code === 1 ? 'success' : 'error'
                })
            })
        }
        /**
         * 获取热门
         */
        private fetchHotData() {
            this.resetData()
            _doGet('/game/index', { is_pc: 1, is_hot: 1, limit: 8 }).then(response => {
                if ((response as any).code === 1) {
                    this.datas = response.data.datas
                    this.listForm.page = 1
                    this.listForm.total = response.data.total
                }
            })
        }

        /**
         * 推荐游戏
         */
        private fetchRecommendedData() {
            _doGet('/game/index', { is_pc: 1, is_recommended: 1, limit: 8, pic_w: 235, pic_h: 180 }).then(response => {
                if ((response as any).code === 1) {
                    this.recommendedData = response.data.datas
                }
            })
        }

        /**
         * 大家都在玩
         * 精选
         */
        private fetchFeatureData() {
            _doGet('/game/index', { is_pc: 1, is_feature: 1, limit: 8, pic_w: 270, pic_h: 270 }).then(response => {
                if ((response as any).code === 1) {
                    this.featureData = response.data.datas
                }
            })
        }
        /**
         * 返奖率排名
         */
        private fetchReturnRewardData() {
            _doGet('/game/index', { is_pc: 1, limit: 10, order_by: 'return_reward_rate', order_sort: 'desc' }).then(response => {
                if ((response as any).code === 1) {
                    this.returnRewardRateData = response.data.datas
                }
            })
        }

        /**
         * 收藏列表
         */
        private fetchFavData() {
            this.resetData()
            _doGet('/game/favorite', { is_pc: 1, pic_w: 150, pic_h: 150 }).then(response => {
                if ((response as any).code === 1) {
                    this.datas = response.data.datas
                }
            })
        }

        /**
         * 历史列表
         */
        private fetchHistoryData() {
            this.resetData()
            _doGet('/game/history', { is_pc: 1, pic_w: 150, pic_h: 150 }).then(response => {
                if ((response as any).code === 1) {
                    this.datas = response.data.datas
                }
            })
        }

        private fetchData() {
            _doGet('/game/index', this.listForm).then(response => {
                if ((response as any).code === 1) {
                    for (let d of response.data.datas) {
                        this.datas.push(d)
                    }
                    this.listForm.total = response.data.total
                }
            })
        }

        private onSearch() {
            this.listForm.thirdparty_parent_id = 0
            this.listForm.category_id = 0
            this.category = ''
            this.resetData()
            _doGet('/game/index', this.listForm).then(response => {
                if ((response as any).code === 1) {
                    this.datas = response.data.datas
                    this.listForm.total = response.data.total
                }
            })
        }
        private onNext() {
            this.listForm.page += 1
            this.fetchData()
        }
        private resetData() {
            this.datas = []
            this.listForm.page = 1
            this.listForm.total = 0
        }
    }
</script>
