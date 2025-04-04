"use strict";
const BASE_URL = "http://192.168.1.6:5002";
const imgs = [];
for (let i = 1; i <= 20; i++) {
  imgs.push(new UTSJSONObject({
    src: `${BASE_URL}/${i}.${i === 10 || i === 17 ? "png" : "jpg"}`
  }));
}
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/config.js.map
