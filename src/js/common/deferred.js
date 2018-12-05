define([
  'require',
  'q',
  'lodash'
], function(require, Q, _) {
  return function (dep) {
    return function () {
      var deferred = Q.defer();
      require(_.isArray(dep) ? dep : [dep], function (res) {
        deferred.resolve(res);
      });
      return deferred.promise;
    }
  }
});