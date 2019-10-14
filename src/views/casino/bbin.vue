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
        <div id="rediect_dom" />
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

    export default class Bbin extends Vue {
        private src: string = '/loading'

        private created() {
            this.getUrl()
        }

        private getUrl() {
            let self = this
            _doSubmit('/casino/bbin', []).then(response => {
                if ((response as any).code === 1) {
                    window.open((response as any).url)
                    // document.getElementById('rediect_dom').innerHTML = (response as any).data
                    // setTimeout(function () {
                    //     alert('a');
                    //     (document.forms as any)['pay_form'].submit()
                    // }, 2000)
                } else {
                    this.$toasted.show(window.i18n.t('apiError'), {
                        type: 'error'
                    })
                }
            })
        }
    }
</script>
