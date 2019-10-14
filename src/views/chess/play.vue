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

    export default class Play extends Vue {
        private src: string = '/loading'

        private mounted() {
            this.getUrl()
        }

        private getUrl() {
            let self = this
            _doSubmit('/chess/ky', []).then(response => {
                if ((response as any).code === 0) {
                    this.$toasted.show(window.i18n.t('updateSuccess'), {
                        type: 'success'
                    })
                } else {
                    self.src = response.data
                }
            })
        }
    }
</script>
