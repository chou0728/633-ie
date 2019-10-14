<template>
    <router-link
        :to="goto"
    >
        <slot />
    </router-link>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { isExternal } from '@/utils/validate'

    @Component({})
    export default class Link extends Vue {
        @Prop({ default: '' }) private class!: string
        @Prop({ default: '' }) private to!: string
        @Prop({ default: '' }) private href!: string

        get goto() {
            if (this.to !== '') {
                return this.to
            }
            return this.href
        }
    }
</script>
