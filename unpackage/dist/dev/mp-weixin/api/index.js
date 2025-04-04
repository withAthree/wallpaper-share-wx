"use strict";
const request_index = require("../request/index.js");
const BASE_URL = "http://47.109.105.139:18823/api";
const login = (params = null) => {
  return request_index.http.post(`${BASE_URL}/auth/login`, params);
};
const getImageList = (params = null) => {
  return request_index.http.get(`${BASE_URL}/picFiles/listPage`, params);
};
exports.BASE_URL = BASE_URL;
exports.getImageList = getImageList;
exports.login = login;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/index.js.map
