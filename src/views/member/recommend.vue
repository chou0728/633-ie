<template>
    <div>
        <div class="m-userInfo">
            <h4 class="u-title">
                推荐好友
            </h4>
            <div class="recommend-wrapper">
                <div class="recommend-steps">
                    <div class="step-content step-content--first">
                        <h5 class="step-number">
                            <span>1</span>
                            <span class="step-number__reflect">1</span>
                        </h5>
                        <p>复制推荐链接分享给好友或发布在社交网站上</p>
                    </div>
                    <img src="../../assets/images/right-arrow.png">
                    <div class="step-content step-content--second">
                        <h5 class="step-number">
                            <span>2</span>
                            <span class="step-number__reflect">2</span>
                        </h5>
                        <p>用户透过链接或输入邀请码完成注册</p>
                    </div>
                    <img src="../../assets/images/right-arrow.png">
                    <div class="step-content step-content--third">
                        <h5 class="step-number">
                            <span>3</span>
                            <span class="step-number__reflect">3</span>
                        </h5>
                        <p>被推荐人累计存款大于1000元推荐人即可获得58元红利</p>
                        <a href="#">详细规则</a>
                    </div>
                </div>
            </div>
            <div class="share-wrapper">
                <h5>分享指数</h5>
                <div class="share-container">
                    <div class="code-download">
                        <div class="code-download__qr">
                            <img :src="qrImage">
                        </div>
                        <div class="u-btn">
                            <a
                                class="btn"
                                href="javascript:void(0)"
                                @click="downloadQR"
                            >下载二维码</a>
                        </div>
                    </div>
                    <div class="code-info">
                        <div class="code-info__link">
                            <div class="u-input">
                                <span>{{ qrLink }}</span>
                            </div>
                            <div class="u-btn">
                                <a
                                    class="btn"
                                    href="javascript:void(0)"
                                    @click="copyLink"
                                >复制</a>
                            </div>
                        </div>
                        <ol class="code-info__numbers">
                            <li>
                                注册：
                                <strong>0</strong>
                            </li>
                            <li>
                                点击：
                                <strong>0</strong>
                            </li>
                            <li>
                                成功推荐：
                                <strong>0</strong>
                            </li>
                        </ol>
                        <ol class="code-info__sharing">
                            <li>
                                分享代码：
                                <strong>2305569</strong>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class Recommend extends Vue {
        private loading: boolean = false
        private qrImage: string = 'https://fakeimg.pl/60x60/'
        private qrLink: string = ''

        private created() {
            this.fetchData()
        }

        private fetchData() {
        }

        private copyLink() {
        }

        private downloadQR() {

        }
    }
</script>
