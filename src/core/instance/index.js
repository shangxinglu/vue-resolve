import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }

  /**
   * 在实例上添加
   * 
   * 状态
   * _uid,_isVue,$options,_renderProxy,_self
   * 
   * 初始生命周期
   * 状态
   * $parent,$root,$children,$refs
   * _watcher,_inactive,_directInactive,
   * _isMounted,_isDestroyed,_isBeingDestroyed
   * 
   * 初始化事件状态
   * _events,_hasHookEvent
   * 
   * 初始化渲染
   * 状态
   * _vnode,_staticTrees,
   * $vnode,$slots,$scopedSlots,_c,$createElement
   * $listeners,$attrs
   *  
   * beforeCreate钩子的调用
   * 
   * 初始化注入
   * 
   */
  this._init(options)
}

// 在原型添_init行为
initMixin(Vue) 
// 在原型添加$data、$props状态,
// $set、$delete、$watch行为
stateMixin(Vue) 

// 在原型上添加事件相关行为$on、$once、$off、$emit
eventsMixin(Vue)

// 在原型上添加_update、$forceUpdate、$destroy行为
lifecycleMixin(Vue)

// 在原型安装渲染帮助函数和_render行为
renderMixin(Vue)

export default Vue
