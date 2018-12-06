define([
  'text!./header.html'
], function(tmpl) {
  return {
    template: tmpl,
    data () {
      return {
        searchVisible: false,
        search: ''
      }
    },
    methods: {
    }
  };
});