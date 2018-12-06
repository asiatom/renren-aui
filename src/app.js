define([
  'vue',
  'ELEMENT',
  'router/index',
  'store/index',
], function(Vue, ELEMENT, router, store) {
  Vue.prototype.$ELEMENT = { size: 'medium' };
      
  Vue.use(ELEMENT);

  new Vue({
    router: router,
    store: store
  }).$mount('#app');
});