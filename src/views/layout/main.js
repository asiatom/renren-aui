define([
  'text!./main.html',
  'views/modules/home'
], function(tmpl, home) {
  return {
    template: tmpl,
    components: {
      home
    },
    created () {
    },
    methods: {
    }
  };
});