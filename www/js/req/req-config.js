angular.module('req.config', [])

.factory('req', [function () {
  var self = this;

  self.baseURL = '';

  self.login = {
    method: 'POST',
    url: self.baseURL + 'Public/Login',
    data: {
      IsPlain: true,
      Password: '',
      UserName: ''
    }
  };


  return self;
}])