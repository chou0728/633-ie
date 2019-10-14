<template>
    <transition name="modal-fade">
        <component :is="dialogName" />
    </transition>
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator'
    import { DialogModule } from '@/store/modules/dialog'

    import DialogProfile from './dialog-profile.vue'
    import DialogEmail from './dialog-email.vue'
    import DialogPhone from './dialog-phone.vue'
    import DialogPassword from './dialog-password.vue'
    import DialogSafePassword from './dialog-safe-password.vue'
    import DialogAddress from './dialog-address.vue'
    import DialogQuestion from './dialog-question.vue'
    import DialogBank from './dialog-bank.vue'

    @Component({
        components: {
            DialogProfile,
            DialogEmail,
            DialogPhone,
            DialogPassword,
            DialogSafePassword,
            DialogAddress,
            DialogQuestion,
            DialogBank
        }
    })
    export default class DialogMember extends Vue {
        get dialogName() {
            return DialogModule.dialogName
        }
    }
</script>
