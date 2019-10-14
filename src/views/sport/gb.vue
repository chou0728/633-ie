<template>
    <div>
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

    export default class Gb extends Vue {
        private src: string = '/loading'

        private created() {
            this.getUrl()
        }

        private getUrl() {
            let self = this
            _doSubmit('/sport/gb', []).then(response => {
                if ((response as any).code === 1) {
                    self.src = (response as any).url
                    console.log((response as any).url)
                } else {
                    this.$toasted.show(window.i18n.t('apiError'), {
                        type: 'error'
                    })
                }
            })
        }
    }
</script>
