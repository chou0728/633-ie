<template>
    <div class="m-fixed-code">
        <span class="label">APP下载</span>
        <ul class="m-code">
            <li>
                <img
                    src="../../assets/images/mrcat2iOS.png"
                    alt=""
                >
                <span>iOS扫描</span>
            </li>
            <li>
                <img
                    src="../../assets/images/mrcat_android.png"
                    alt=""
                >
                <span>Android扫描</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class Fixapp extends Vue {

    }
</script>

<style scoped>
    .m-code {
        display: none;
    }
    .m-fixed-code:hover .m-code {
        display: block;
    }
</style>
