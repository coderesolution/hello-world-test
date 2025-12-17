import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '2hfll1vi',
    dataset: 'production'
  },
  deployment: {
    appId: 'spo2rau88p17nbgk8qsouwnd',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
