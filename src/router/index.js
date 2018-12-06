define([
  'vue',
  'vueRouter',
  'utils/_import'
], function(Vue, VueRouter, _import) {
  Vue.use(VueRouter);

  // 全局路由(无需嵌套上左右整体布局)
  var globalRoutes = [
    { path: '/404', component: _import('views/pages/404'), name: '404', meta: { title: '404未找到' } },
    { path: '/login', component: _import('views/pages/login'), name: 'login', meta: { title: '登录' } }
  ]

  // 主入口路由(需嵌套上左右整体布局)
  var mainRoutes = {
    path: '/',
    component: _import('views/main'),
    name: 'main',
    redirect: { name: 'home' },
    meta: { title: '主入口整体布局' },
    children: [
      { path: '/home', component: _import('views/modules/home'), name: 'home', meta: { title: '首页' } }
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

  var router = new VueRouter({
    mode: 'hash',
    scrollBehavior: function () { return { y: 0 } },
    routes: globalRoutes.concat(mainRoutes)
  });

  return router;
});
