<template>
    <div class="m-loading">
        <div class="container">
            <div class="m-info">
                <div class="loading">
                    <div class="logo">
                        <span class="icon icon-hlogo" />
                    </div>
                    <div class="progress">
                        <div
                            class="progress-bar progress-success"
                            :style="style"
                        >
                            <span>{{ time }}%</span>
                        </div>
                    </div>
                    <p>Loading...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'

    @Component({
        components: {
        }
    })
    export default class Index extends Vue {
        private style: string = 'width: 1%;'
        private time: number = 0
        private created() {
            this.interval()
        }
        private interval() {
            let self = this
            let timer = setInterval(function () {
                self.time++
                self.style = 'width: ' + self.time + '%;'
                if (self.time === 100) {
                    clearInterval(timer)
                }
            }, 200)
        }
    }
</script>
