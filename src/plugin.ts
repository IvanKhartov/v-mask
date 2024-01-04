import type { Plugin, PluginOptions } from './types'
import { createDirective } from './directive'

const plugin: Plugin = {
  install(app, options: PluginOptions) {
    app.directive('mask', createDirective(options))
  }
}

export default plugin
