define([
  'vue',
  'ELEMENT',
  'common/router',
  'common/store',
], function(Vue, ELEMENT, router, store) {
  var mod = {};

  mod.init = function () {
    Vue.prototype.$ELEMENT = { size: 'medium' };
      
    Vue.use(ELEMENT);

    window.vm = new Vue({
      router: router,
      store: store
    }).$mount('#app');
  };

  return mod;
});