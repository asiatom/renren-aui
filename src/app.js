define([
  'vue',
  'ELEMENT',
  'router/index',
  'store/index',
  'utils/http',
  'lodash',
  'icons'
], function(Vue, ELEMENT, router, store, http, _) {
  Vue.prototype.$ELEMENT = { size: 'medium' };
      
  Vue.use(ELEMENT);

  // 挂载全局
  Vue.prototype.$http = http
  // Vue.prototype.$hasPermission = hasPermission

  // 保存整站vuex本地储存初始状态
  window.SITE_CONFIG['storeState'] = _.cloneDeep(store.state)

  window.vm = new Vue({
    router: router,
    store: store
  }).$mount('#app');
});