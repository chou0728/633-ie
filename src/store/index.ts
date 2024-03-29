import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { IMemberState } from './modules/member'
import { ITagsViewState } from './modules/tagsView'
import { IErrorLogState } from './modules/errorLog'
import { IPermissionState } from './modules/permission'
import { ISettingsState } from './modules/settings'
import { IDialogState } from './modules/dialog'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  passport: IMemberState
  tagsView: ITagsViewState
  errorLog: IErrorLogState
  permission: IPermissionState
  settings: ISettingsState
  dialog: IDialogState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
