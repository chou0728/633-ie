<template>
    <section class="app-main">
        <router-view :key="key" />
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { TagsViewModule } from '@/store/modules/tagsView'

@Component
    export default class AppMain extends Vue {
        get key() {
            return this.$route.fullPath
        }
    }
</script>
