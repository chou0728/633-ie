interface ISettings {
  title: string // Overrides the default title
  showSettings: boolean // Controls settings panel display
  errorLog: string[] // The env to enable the errorlog component, default 'production' only
}

// You can customize below settings :)
const settings: ISettings = {
    title: 'Product',
    showSettings: false,
    errorLog: ['production']
}

export default settings
