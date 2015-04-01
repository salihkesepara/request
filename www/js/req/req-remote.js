angular.module('req.remote', ['req.config', 'req.http'])

.factory('remote', ['req', 'http', function (req, http) {

  function login(userName, pass)  {
    req.login.data.UserName = userName;
    req.login.data.Password = pass;
    
    function parserCallBack(result) {
      // Parse here!
      return result.ApiKey;
    }
    
    return http.request(req.login).then(parserCallBack);
  }

  return {
    login: login
  };
}])