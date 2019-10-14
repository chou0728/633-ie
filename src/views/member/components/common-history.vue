<template>
    <ul>
        <li
            :class="{active: curAction === 'money'}"
        >
            <router-link
                :to="{name: 'MemberHistory'}"
                :class="{'u-change': curAction === 'money', 'u-change1': curAction !== 'money'}"
            >
                <span class="icon icon-min" />资金明细
            </router-link>
        </li>
        <li
            :class="{active: curAction === 'bet'}"
        >
            <router-link
                :to="{name: 'MemberHistoryBet'}"
                :class="{'u-change': curAction === 'bet', 'u-change1': curAction !== 'bet'}"
            >
                <span class="icon icon-mout" />投注明细
            </router-link>
        </li>
        <li
            :class="{active: curAction === 'day'}"
        >
            <router-link
                :to="{name: 'MemberHistoryDay'}"
                :class="{'u-change': curAction === 'day', 'u-change1': curAction !== 'day'}"
            >
                <span class="icon icon-tran" />每日总计
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

    @Component
    export default class CommonHistory extends Vue {
        @Prop({
            type: String,
            required: false,
            default: 'index'
        })
        curAction!: string;
    }
</script>
