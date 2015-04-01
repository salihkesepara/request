angular.module('req.http', [])

.factory('http', ['$http', '$q', function ($http, $q) {
  var self = this;

  self.request = function (req) {
    var deferred = $q.defer();
      $http(req).
      success(function (data) {
        deferred.resolve(data);
      }).
      error(function (data) {
        deferred.reject(data);
      });
    return deferred.promise;
  }

  return self;
}])