export const rainbow = {
  bind(el, binding, vnode) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  },
};

export const clickOutside = {
  bind: function(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};

export default {
  rainbow,
  clickOutside,
};

// Vue.directive("theme", {
//   bind(el, binding, vnode) {
//     if (binding.value == "wide") {
//       el.style.maxWidth = "1200px";
//     } else if (binding.value == "narrow") {
//       el.style.maxWidth = "800px";
//     }
//     if (binding.arg == "column") {
//       el.style.background = "#ddd";
//       el.style.padding = "20px";
//     }
//   },
// });

// Vue.directive('click-outside', {
//   bind () {
//       this.event = event => this.vm.$emit(this.expression, event)
//       this.el.addEventListener('click', this.stopProp)
//       document.body.addEventListener('click', this.event)
//   },
//   unbind() {
//     this.el.removeEventListener('click', this.stopProp)
//     document.body.removeEventListener('click', this.event)
//   },

//   stopProp(event) { event.stopPropagation() }
// })
