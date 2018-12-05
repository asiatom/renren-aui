define([
  'vue',
  'vueRouter',
  './deferred'
], function(Vue, VueRouter, Deferred) {
  Vue.use(VueRouter);

  var catalog = '../../views';

  // 全局路由(无需嵌套上左右整体布局)
  var globalRoutes = [
    { path: '/404', component: Deferred(catalog + '/common/404'), name: '404', meta: { title: '404未找到' } },
    { path: '/login', component: Deferred(catalog + '/common/login'), name: 'login', meta: { title: '登录' } }
  ]

  // 主入口路由(需嵌套上左右整体布局)
  var mainRoutes = {
    path: '/',
    component: Deferred(catalog + '/main'),
    name: 'main',
    redirect: { name: 'home' },
    meta: { title: '主入口整体布局' },
    children: [
      { path: '/home', component: Deferred(catalog + '/modules/home'), name: 'home', meta: { title: '首页' } }
    ],
    beforeEnter (to, from, next) {
      // if (!Cookies.get('token')) {
      //   clearLoginInfo()
      //   next({ name: 'login', replace: true })
      // } else {
      //   next()
      // }
      next()
    }
  }

  console.log(globalRoutes.concat(mainRoutes))

  var router = new VueRouter({
    mode: 'hash',
    scrollBehavior: function () { return { y: 0 } },
    routes: globalRoutes.concat(mainRoutes)
  });

  return router;
});
