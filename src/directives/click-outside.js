import Vue from 'vue'

Vue.directive('click-outside', {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }

    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    !isServer(vNode) && document.addEventListener(clickHandler, handler) 
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    !isServer(vNode) && document.removeEventListener(clickHandler, el.__vueClickOutside__.handler)

    delete el.__vueClickOutside__
  }
})