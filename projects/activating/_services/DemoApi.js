var WebAPI = require('../../../utils/WebApi');
function dto (result) {
  console.log('custom dto parser');
  return result;
}
var DemoApi = WebAPI.extend({
  // sample testing api.
  fetchTestData: function () {
    var api = this.getApiUrl('http://localhost:5000/api/test');
    return this.request(api, {
      data: {
        name: 'tianyingchun'
      }
    }, dto);
  }
});

module.exports = DemoApi;
