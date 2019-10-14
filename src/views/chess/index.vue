<template>
    <div>
        <div class="chess-swiper">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href=""><img
                                       src="/static/upload/chess_banner.jpg"
                                       alt=""
                                   >
                            <div class="caption">
                                <span class="lable">10月25日 | 11：30</span>
                                <h4>CONTER-STIKE:GO</h4>
                                <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img
                                       src="/static/upload/chess_banner.jpg"
                                       alt=""
                                   >
                            <div class="caption">
                                <span class="lable">10月25日 | 11：30</span>
                                <h4>CONTER-STIKE:GO</h4>
                                <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img
                                       src="/static/upload/chess_banner.jpg"
                                       alt=""
                                   >
                            <div class="caption">
                                <span class="lable">10月25日 | 11：30</span>
                                <h4>CONTER-STIKE:GO</h4>
                                <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img
                                       src="/static/upload/chess_banner.jpg"
                                       alt=""
                                   >
                            <div class="caption">
                                <span class="lable">10月25日 | 11：30</span>
                                <h4>CONTER-STIKE:GO</h4>
                                <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination" />
                <div class="changes">
                    <a
                        class="left carousel-control"
                        href="#carousel"
                        data-slide="prev"
                    />
                    <a
                        class="right"
                        href="#carousel"
                        data-slide="next"
                    />
                </div>
            </div>
        </div>
        <div
            v-loading="loading"
            class="chess-main"
        >
            <div class="chess-hot container">
                <h2>热门游戏</h2>
                <ul>
                    <li
                        v-for="(item, idx) in hotList"
                        :key="idx"
                    >
                        <div class="u-img">
                            <img
                                src="/static/upload/chess-list1.png"
                                alt=""
                            >
                        </div>
                        <span>{{ item.pc_title }}</span>
                        <div class="layer">
                            <div class="links">
                                <a
                                    href="javascript:void(0)"
                                    class="away"
                                    @click="playgame(item.code)"
                                >马上开始</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="chess-list">
                <ul class="clearfix">
                    <li
                        v-for="(item, idx) in dataList"
                        :key="idx"
                    >
                        <a
                            href="javascript:void(0)"
                            @click="playgame(item.code)"
                        >
                            <span
                                v-if="item.is_hot === 1"
                                class="label hot"
                            >HOT</span>
                            <img
                                src="/static/upload/chess-list1.png"
                                alt=""
                            >
                            <span>{{ item.pc_title }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { _doSubmit, _doGet } from '@/api/common.ts'
    import Swiper from 'swiper'

    @Component({
        components: {

        }
    })
    export default class Index extends Vue {
        private loading: boolean = false
        private hotList:any = []
        private dataList:any = []
        private mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                autoplay: true,
                speed: 1000,
                navigation: { nextEl: '.right', prevEl: '.left' },
                pagination: { el: '.swiper-pagination' }
            })
        }
        private created() {
            this.fetchData()
        }

        private fetchData() {
            let self = this
            _doGet('/chess/index', {}).then(response => {
                if ((response as any).code === 1) {
                    self.hotList = (response as any).data.hot_list
                    self.dataList = (response as any).data.list
                }
            })
        }

        /**
         * 进入游戏
         * @param p_kind
         */
        private playgame(p_kind: number) {
            let self = this
            this.loading = true
            _doSubmit('/chess/ky', { kind: p_kind }).then(response => {
                this.loading = false
                if ((response as any).code === 1) {
                    window.open((response as any).url)
                } else {
                    this.$toasted.show(window.i18n.t('apiError'), {
                        type: 'error'
                    })
                }
            })
        }
    }
</script>
