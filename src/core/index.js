import Vue from './instance/index' // 加载Vue函数 挂载一些实例相关的状态和行为
import { initGlobalAPI } from './global-api/index' // 全局初始化API
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

/**
 * 在Vue上添加
 * 
 * config状态
 * util对象(包含wran、extend、mergeOptions、defineReactive函数)
 * set、delete、nextTick、observable函数
 * options对象(包含_base,ASSET_TYPES内的属性对象,内置组件)
 * use、mixin、extend行为
 * component、directive、filter等asset注册行为
 */
initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
