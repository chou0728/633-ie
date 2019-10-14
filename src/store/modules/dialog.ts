import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IDialogState {
    dialogName: string,
    dialogData: any,
    flushParentStatus: boolean
}

@Module({ dynamic: true, store, name: 'dialog' })
class Dialog extends VuexModule implements IDialogState {
    public dialogName = ''
    public dialogData: any = {}
    public flushParentStatus = false

    @Action
    public ToggleDialog(payload: { dialogName: string, dialogData: any }) {
        this.TOGGLE_DIALOG(payload)
    }

    @Action
    public SetFlushParentStatus() {
        this.SET_FLUSHPARENT_STATUS()
    }

    @Action
    public ResetFlushParentStatus() {
        this.RESET_FLUSHPARENT_STATUS()
    }

    @Mutation
    private TOGGLE_DIALOG(payload: { dialogName: string, dialogData: any }) {
        const { dialogName, dialogData } = payload
        this.dialogName = dialogName
        this.dialogData = dialogData
    }

    @Mutation
    private SET_FLUSHPARENT_STATUS() {
        this.flushParentStatus = true
    }

    @Mutation
    private RESET_FLUSHPARENT_STATUS() {
        this.flushParentStatus = false
    }
}

export const DialogModule = getModule(Dialog)
