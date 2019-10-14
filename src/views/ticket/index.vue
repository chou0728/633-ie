<template>
    <div>
        <div class="swiper-wrap lottery-swiper">
            <div
                id="discuss_img"
                class="swiper discuss-swiper"
            >
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/lottery-l.jpg"
                        >
                        <div class="caption">
                            <a href="/ticket/play?kind=ssc">快速加入</a>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/keno-l.jpg"
                        >
                        <div class="caption">
                            <a href="/ticket/play?kind=keno">快速加入</a>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/mark-l.jpg"
                        >
                        <div class="caption">
                            <a href="/ticket/play?kind=lotto">快速加入</a>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/pk-l.jpg"
                        >
                        <div class="caption">
                            <a href="/ticket/play?kind=pk10">快速加入</a>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/k3-l.jpg"
                        >
                        <div class="caption">
                            <a href="/ticket/play?kind=k3">快速加入</a>
                        </div>
                    </li>
                </ul>
                <ul class="pagination">
                    <li class="swiper-pagination-switch">
                        <img
                            src="/static/upload/lottery.png"
                            alt=""
                        >
                        <div class="caption">
                            <span class="lable">时时彩</span>
                            <p>福彩3D 排列三</p>
                        </div>
                    </li>
                    <li class="swiper-pagination-switch">
                        <img
                            src="/static/upload/keno.png"
                            alt=""
                        >
                        <div class="caption">
                            <span class="lable">KENO</span>
                            <p>最高赔率 无忧投注</p>
                        </div>
                    </li>
                    <li class="swiper-pagination-switch">
                        <img
                            src="/static/upload/mark.png"
                            alt=""
                        >
                        <div class="caption">
                            <span class="lable">六合彩</span>
                            <p>十大地区 每日开奖</p>
                        </div>
                    </li>
                    <li class="swiper-pagination-switch">
                        <img
                            src="/static/upload/pk.png"
                            alt=""
                        >
                        <div class="caption">
                            <span class="lable">PK10</span>
                            <p>5分钟开奖 极速派奖</p>
                        </div>
                    </li>
                    <li class="swiper-pagination-switch">
                        <img
                            src="/static/upload/k3.png"
                            alt=""
                        >
                        <div class="caption">
                            <span class="lable">快3</span>
                            <p>骰子一掷 全体派彩</p>
                        </div>
                    </li>
                </ul>
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
        <div class="container hot-wrap">
            <div class="row">
                <div class="col-md-4">
                    <a
                        href=""
                        class="img-link"
                    >
                        <img
                            src="/static/upload/imglink2.jpg"
                            alt=""
                        >
                    </a>
                </div>
                <div class="col-md-4">
                    <a
                        href=""
                        class="img-link"
                    >
                        <img
                            src="/static/upload/imglink3.jpg"
                            alt=""
                        >
                    </a>
                </div>
                <div class="col-md-4">
                    <div class="text-link">
                        <h4>彩票规则</h4>
                        <p>真实可靠，实时开奖，查阅对应玩法说明掌握规则，幸运大奖滚滚来</p>
                        <a href="">→</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'

    import Swiper from 'swiper'

    @Component({
        components: {

        }
    })
    export default class Index extends Vue {
        private loading: boolean = false
        private hotList: any = []
        private dataList: any = []

        private mounted() {
            var mySwiper = new Swiper('#discuss_img', {
                loop: true,
                autoplay: true,
                speed: 1000,
                navigation: { nextEl: '#discuss_img .right', prevEl: '#discuss_img .left' },
                pagination: { el: '.pagination', type: 'custom' }
            })
        }

        private created() {
        }
    }
</script>
<style>
    .swiper-wrap .changes{
        z-index: 100
    }
    .swiper-wrap .discuss-swiper .swiper-slide .caption{
        z-index: 101;
        display: block !important;
        bottom: 53px !important;
    }
</style>
