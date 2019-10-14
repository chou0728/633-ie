import Vue from 'vue'
import Clipboard from 'clipboard'

export const clipboardSuccess = () =>
    Vue.prototype.$toasted.show('Copy successfully', {
        type: 'success'
    })

export const clipboardError = () =>
    Vue.prototype.$toasted.show('Copy failed', {
        type: 'error'
    })

export const handleClipboard = (text: string, event: Event) => {
    const clipboard = new Clipboard(event.target as Element, {
        text: () => text
    })
    clipboard.on('success', () => {
        clipboardSuccess()
        clipboard.destroy()
    })
    clipboard.on('error', () => {
        clipboardError()
        clipboard.destroy()
    });
    (clipboard as any).onClick(event)
}
