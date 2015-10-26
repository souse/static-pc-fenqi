var WebAPI = require('../../../utils/WebApi');
var jQuery = require('jquery');
function dto (result) {
  console.log('custom dto parser');
  var _new = {
    username : result.name
  }
  return _new;
}
var PaymentService = WebAPI.extend({
  // sample testing api.
  fetchTestData: function () {
    var api = this.getApiUrl('/test');
    return this.request(api, {
      data: {
        name: 'tianyingchun'
      }
    }, dto);
  }
});

module.exports = TestApi;

