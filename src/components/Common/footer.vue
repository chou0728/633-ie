<template>
    <div>
        <footer class="footer">
            <div class="m-joins">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="m-info">
                                <h4>合作伙伴</h4>
                                <p>无论你想玩些什么，Mr.Cat 的合作伙伴都会让你的游戏体验更加美好</p>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="swiper-container m-swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="m-logos">
                                            <span class="icon icon-join1" />
                                            <span class="icon icon-join2" />
                                            <span class="icon icon-join3" />
                                            <span class="icon icon-join4" />
                                            <span class="icon icon-join5" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="m-logos">
                                            <span class="icon icon-join1" />
                                            <span class="icon icon-join2" />
                                            <span class="icon icon-join3" />
                                            <span class="icon icon-join4" />
                                            <span class="icon icon-join5" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="m-logos">
                                            <span class="icon icon-join1" />
                                            <span class="icon icon-join2" />
                                            <span class="icon icon-join3" />
                                            <span class="icon icon-join4" />
                                            <span class="icon icon-join5" />
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-payment">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <h4>支付·牌照</h4>
                        </div>
                        <div class="col-md-9">
                            <div class="m-logos">
                                <span class="icon icon-pay1" />
                                <span class="icon icon-pay2" />
                                <span class="icon icon-pay3" />
                                <span class="icon icon-pay4" />
                                <span class="icon icon-pay5" />
                                <span class="icon icon-pay6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-other">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="m-caution">
                                <div>
                                    <span class="icon icon-forbid1" />
                                    <span class="icon icon-forbid2" />
                                    <span class="icon icon-forbid3" />
                                </div>
                                <p>未满18岁的人士进行博彩属非法行为，Mr.Cat会在此方面绝对严格执行。我们会对客户进行年龄验证，并可能要求其上交补充档。</p>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="m-contact">
                                <h4>联系我们</h4>
                                <p>
                                    <span>服务电话:400-120-8118</span>
                                    <span>联系邮箱:cs@mrcat.com</span>
                                </p>
                                <div class="m-ways">
                                    <div class="m-con">
                                        <a href="">
                                            <span class="icon" />
                                        </a>
                                        <a href="">
                                            <span class="icon" />
                                        </a>
                                        <a href="">
                                            <span class="icon" />
                                        </a>
                                    </div>
                                </div>
                                <div class="m-navb">
                                    <div class="m-con">
                                        <a href="">关于Mr. Cat</a>
                                        <a href="">开户与存提款</a>
                                        <a href="">合作经营</a>
                                        <a href="">条款与规则</a>
                                        <a href="">游戏玩法</a>
                                        <a href="">技术帮助</a>
                                        <a href="">博彩责任</a>
                                        <a href="">常见问题</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <a
                                href=""
                                class="u-logob"
                            >
                                <span class="icon icon-logob" />
                            </a>
                        </div>
                        <div class="col-md-8">
                            <p>
                                本网站属于 菲律宾政府博彩委员会（PAGCOR）授权和监管、所有版权归属Mr.Cat所有，违者必究。
                                <br>2004 - 2018 Mr. Cat by Wilshire Worldwide Company Limited
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import Swiper from 'swiper'

    @Component({
        components: {}
    })
    export default class Footer extends Vue {
        private mounted() {
            var mySwiper = new Swiper('.m-swiper', {
                loop: true,
                autoplay: true,
                speed: 1000,
                pagination: { el: '.m-swiper .swiper-pagination' }
            })
        }
    }
</script>
