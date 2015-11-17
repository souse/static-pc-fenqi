var WebAPI = require('../../../utils/WebApi');
function dto (result) {
  console.log('custom dto parser');
  return result;
}
var DemoApi = WebAPI.extend({
  // sample testing api.
  fetchTestData: function () {
    // var api = this.getApiUrl('http://localhost:5000/api/test');
    var api = this.getApiUrl('http://localhost:8080/thymeleaf/activating_setpassword');
    return this.request(api, {
      data: {
        name: 'yejun'
      }
    }, dto);
  }
});

module.exports = DemoApi;
