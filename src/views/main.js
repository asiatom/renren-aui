define([
  'vue',
  'text!./main.html',
  './layout/header',
  './layout/aside',
  './layout/control',
  './layout/footer',
], function(Vue, tmpl, layoutHeader, layoutAside, layoutControl, layoutFooter) {
  var self = null;

  return {
    template: tmpl,
    data: function () {
      return {
        loading: true
      }
    },
    components: {
      layoutHeader,
      layoutAside,
      layoutControl,
      layoutFooter
    },
    beforeCreate: function () {
      self = this;
    },
    created () {
      self.loading = false;
      // self.getUserInfo().then(function () {
      // });
    },
    mounted () {
      // 窗口resize实现媒体查询
      // self.$store.state.sidebarFold = document.documentElement['clientWidth'] <= 992 || false;
      // window.addEventListener('resize', _.debounce(function () {
      //   self.$store.state.sidebarFold = document.documentElement['clientWidth'] <= 992 || false;
      // }, 150));
    },
    methods: {
      // 获取当前管理员信息
      getUserInfo: function () {
        return self.$http.get('./json/sys-user-info.json').then(function (res) {
          if (res.data && res.data.code === 0) {
            self.$store.state.user.id = res.data.user.userId;
            self.$store.state.user.name = res.data.user.username;
          }
        });
      }
    }
  };
});