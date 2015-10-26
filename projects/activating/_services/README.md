place all restfull api here for current project
----------
Note: each webserver should be extends from /utils/WebApi.js

```javascript

var WebAPI = require('../../../utils/WebApi');
function dto (result) {
  console.log('custom dto parser');
  return result;
}
var DemoApi = WebAPI.extend({
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

module.exports = DemoApi;

```
