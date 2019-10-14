<template>
    <ul class="nav nav-tabs">
        <li>
            <router-link
                :to="{name: 'MemberDeposit'}"
                :class="{active: curAction === 'deposit'}"
            >
                <span class="icon icon-min" />存款
            </router-link>
        </li>
        <li>
            <router-link
                :to="{name: 'MemberWithdrawal'}"
                :class="{active: curAction === 'withdrawal'}"
            >
                <span class="icon icon-mout" />提款
            </router-link>
        </li>
        <li>
            <router-link
                :to="{name: 'MemberTransfer'}"
                :class="{active: curAction === 'transfer'}"
            >
                <span class="icon icon-tran" />转账
            </router-link>
        </li>
        <li>
            <router-link
                :to="{name: 'MemberHistory'}"
                :class="{active: curAction === 'history'}"
            >
                <span class="icon icon-dtl" />明细
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

    @Component
    export default class CommonMoney extends Vue {
        @Prop({
            type: String,
            required: false,
            default: 'index'
        })
        curAction!: string;
    }
</script>
