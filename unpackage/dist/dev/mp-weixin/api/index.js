"use strict";
const request_index = require("../request/index.js");
const BASE_URL = "http://192.168.65.53:8080/api";
const login = (params = null) => {
  return request_index.http.post(`${BASE_URL}/auth/login`, params);
};
exports.login = login;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/index.js.map
