define([
  'vue',
  'text!./home.html'
], function(Vue, tmpl) {
  return {
    template: tmpl,
    data: function () {
      return {
        menuList: []
      }
    },
    created: function () {
    },
    methods: {
    }
  };
});