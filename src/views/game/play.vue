<template>
    <div
        class="m-game"
        :style="'background-image:url(' + info.bg_image_url + ')'"
    >
        <div class="container">
            <div class="m-head">
                <a
                    href="javascript:window.location.reload();"
                    class="refresh pull-left"
                >
                    <span class="icon icon-refresh" />
                </a>
                <p class="u-name pull-left">
                    <span>{{ info.pc_title }}</span>
                    <a
                        v-if="test === 1"
                        :href="'/game/play?id=' + id"
                        class="u-change"
                    >
                        进入游戏
                    </a>
                </p>
                <a
                    href="javascript:window.close();"
                    class="close pull-right"
                >
                    <span class="icon icon-close" />
                </a>
            </div>
            <div class="m-info">
                <iframe
                    ref="thirdPartyGameFrame"
                    class="thirdPartyGameFrame"
                    :src="src"
                    frameborder="0"
                    scrolling="auto"
                    width="100%"
                    style="margin: 0px auto;"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
    import { CommonHeader, CommonFixapp } from '@/components/Common'
    import { _doSubmit } from '@/api/common.ts'

    @Component({
        components: {
            CommonHeader,
            CommonFixapp
        }
    })

    export default class Play extends Vue {
        private src: string = '/loading'
        private id: number = 0
        private test: number = 0
        private info: any = {
            'pc_title': '',
            'm_title': '',
            'bg_image_url': '/static/images/game-main.jpg'
        }

        private created() {
            this.id = (this.$route.query as any).id
            this.test = (this.$route.query as any).test
            this.getUrl()
        }

        private getUrl() {
            let self = this
            _doSubmit('/game/detail', { 'game_id': this.id, is_pc: 1, test: this.test }).then(response => {
                if ((response as any).code === 1) {
                    self.src = (response as any).url
                    self.info = (response as any).data
                } else {
                    this.$toasted.show(window.i18n.t('apiError'), {
                        type: 'error'
                    })
                }
            })
        }
    }
</script>
