define([
  'text!./main.html',
  '../modules/home'
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