<template>
    <div>
        <common-header />
        <app-main />
        <common-fixapp />
        <common-footer />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { AppMain } from './components'
    import { CommonHeader, CommonFixapp, CommonFooter } from '@/components/Common'

    @Component({
        components: {
            AppMain,
            CommonHeader,
            CommonFixapp,
            CommonFooter
        }
    })
    export default class Layout extends Vue {

    }
</script>
