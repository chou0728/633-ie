<template>
    <div class="swiper-wrap">
        <div
            id="discuss_img"
            class="swiper discuss-swiper"
        >
            <ul class="swiper-wrapper">
                <li class="swiper-slide">
                    <a href="#">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/banner.jpg"
                        >
                        <div class="caption">
                            <span class="lable">10月25日 | 11：30</span>
                            <h4>CONTER-STIKE:GO</h4>
                            <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                        </div>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="#">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/banner.jpg"
                        >
                        <div class="caption">
                            <span class="lable">10月25日 | 11：30</span>
                            <h4>CONTER-STIKE:GO</h4>
                            <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                        </div>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="#">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/banner.jpg"
                        >
                        <div class="caption">
                            <span class="lable">10月25日 | 11：30</span>
                            <h4>CONTER-STIKE:GO</h4>
                            <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                        </div>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="#">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/banner.jpg"
                        >
                        <div class="caption">
                            <span class="lable">10月25日 | 11：30</span>
                            <h4>CONTER-STIKE:GO</h4>
                            <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                        </div>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="#">
                        <img
                            alt="Carousel Bootstrap"
                            src="/static/upload/banner.jpg"
                        >
                        <div class="caption">
                            <span class="lable">10月25日 | 11：30</span>
                            <h4>CONTER-STIKE:GO</h4>
                            <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                        </div>
                    </a>
                </li>
            </ul>
            <ul class="pagination">
                <li class="swiper-pagination-switch">
                    <img
                        src="/static/upload/slide1.jpg"
                        alt=""
                    >
                    <div class="caption">
                        <span class="lable">10月25日 | 11：30</span>
                        <h4>CONTER-STIKE:GO</h4>
                        <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                    </div>
                </li>
                <li class="swiper-pagination-switch">
                    <img
                        src="/static/upload/slide1.jpg"
                        alt=""
                    >
                    <div class="caption">
                        <span class="lable">10月25日 | 11：30</span>
                        <h4>CONTER-STIKE:GO</h4>
                        <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                    </div>
                </li>
                <li class="swiper-pagination-switch">
                    <img
                        src="/static/upload/slide1.jpg"
                        alt=""
                    >
                    <div class="caption">
                        <span class="lable">10月25日 | 11：30</span>
                        <h4>CONTER-STIKE:GO</h4>
                        <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                    </div>
                </li>
                <li class="swiper-pagination-switch">
                    <img
                        src="/static/upload/slide1.jpg"
                        alt=""
                    >
                    <div class="caption">
                        <span class="lable">10月25日 | 11：30</span>
                        <h4>CONTER-STIKE:GO</h4>
                        <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
                    </div>
                </li>
                <li class="swiper-pagination-switch">
                    <img
                        src="/static/upload/slide1.jpg"
                        alt=""
                    >
                    <div class="caption">
                        <span class="lable">10月25日 | 11：30</span>
                        <h4>CONTER-STIKE:GO</h4>
                        <p>《反恐精英：全球攻势》是一款以团队合作为主的第一人称射击游戏</p>
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
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import Swiper from 'swiper'

    @Component({
        components: {}
    })
    export default class CommonSlider extends Vue {
        private mounted() {
            var mySwiper = new Swiper('#discuss_img', {
                loop: true,
                autoplay: true,
                speed: 1000,
                navigation: { nextEl: '#discuss_img .changes .right', prevEl: '#discuss_img .changes .left' },
                pagination: { el: '#discuss_img .pagination', type: 'custom' }
            })
        }
    }
</script>
<style>
    .swiper-wrap .changes{
        z-index: 2;
    }
    .swiper-wrap .pagination{
        z-index: 2
    }
</style>
