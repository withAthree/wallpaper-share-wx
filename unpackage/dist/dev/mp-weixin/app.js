"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./store/index.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/detail/index.js";
}
const _sfc_main = common_vendor.defineComponent({
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.uvue:6", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.uvue:9", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.uvue:12", "App Hide");
  },
  onExit: function() {
    common_vendor.index.__f__("log", "at App.uvue:33", "App Exit");
  }
});
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
