/**
 * 站点配置
 */
(function () {
  window.SITE_CONFIG = {};
  window.SITE_CONFIG.env = 'dev';                        // 运行环境
  window.SITE_CONFIG.version = 'v1.0.0-beta.2';          // 版本号
  window.SITE_CONFIG.apiURL = '';                        // api请求地址
  window.SITE_CONFIG.storeState = {};                    // vuex本地储存初始化状态（用于不刷新页面的情况下，也能重置初始化项目中所有状态）
  window.SITE_CONFIG.contentTabDefault = {
    name: '',        // 名称，由 this.$route.name 自动赋值（默认，名称 === 路由名称 === 路由路径）
    params: {},      // 参数，由 this.$route.params 自动赋值
    query: {},       // 查询参数，由 this.$route.query 自动赋值
    menuId: '',      // 菜单id（用于选中侧边栏菜单，与this.$store.state.sidebarMenuActiveName进行匹配）
    title: '',       // 标题
    isTab: true,     // 是否通过tab展示内容？
    iframeURL: ''    // 是否通过iframe嵌套展示内容? (以http[s]://开头，自动匹配)
  };
  window.SITE_CONFIG.menuList = [];                      // 左侧菜单列表（后台返回，未做处理）
  window.SITE_CONFIG.permissions = [];                   // 页面按钮操作权限（后台返回，未做处理）
  window.SITE_CONFIG.dynamicRoutes = [];                 // 动态路由列表
  window.SITE_CONFIG.dynamicMenuRoutes = [];             // 动态(菜单)路由列表
  window.SITE_CONFIG.dynamicMenuRoutesHasAdded = false;  // 动态(菜单)路由是否已经添加的状态标示（用于判断是否需要重新拉取数据并进行动态添加操作）
})();

/**
 * requireJS配置
 */
(function () {
  require.config({
    baseUrl: './',
    urlArgs: 'v=' + (window.SITE_CONFIG.env === 'dev' ? new Date().getTime() : window.SITE_CONFIG.version),
    waitSeconds: 0,
    map: {
      '*': {
        css: ['plugins/require-css-0.1.10/css.min']
      }
    },
    paths: {
      // 业务
      router: 'router',
      store: 'store',
      utils: 'utils',
      views: 'views',
      // 插件
      axios: 'plugins/axios-0.18.0/axios.min',
      echarts: 'plugins/echarts-3.8.5/echarts.min',
      ELEMENT: 'plugins/element-2.4.5/index',
      promise: 'plugins/es6-promise-4.2.4/es6-promise.auto.min',
      cookie: 'plugins/js-cookie-2.2.0/js-cookie.min',
      lodash: 'plugins/lodash-4.17.10/lodash.min',
      qs: 'plugins/qs-6.5.2/qs.min',
      quill: 'plugins/q-2.0.2/q.min',
      text : 'plugins/require-text-2.0.15/text.min',
      screenfull: 'plugins/screenfull-3.3.2/screenfull.min',
      vue: (window.SITE_CONFIG.env === 'dev' ? 'plugins/vue-2.5.17/vue' : 'plugins/vue-2.5.17/vue.min'),
      vueI18n: 'plugins/vue-i18n-8.1.0/vue-i18n.min',
      vueRouter: 'plugins/vue-router-3.0.1/vue-router.min',
      vuex: 'plugins/vuex-3.0.1/vuex.min'
    },
    shim: {
      ELEMENT: { deps: ['vue'] },
      quill: { deps: ['css!plugins/q-2.0.2/q.min/quill.snow.css'] },
      vueRouter: { deps: ['vue', 'promise'] },
      vuex: { deps: ['vue', 'promise'] }
    }
  });
})();