"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
const login_index = require("./login/index.js");
const api_index = require("./api/index.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/detail/index.js";
}
const _sfc_main = common_vendor.defineComponent({
  onLaunch: function() {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      common_vendor.index.__f__("log", "at App.uvue:9", "App Launch");
      const res = yield login_index.getLoginCode();
      const response = yield api_index.login(new UTSJSONObject({ code: res.code }));
      common_vendor.index.__f__("log", "at App.uvue:12", "response", response.data);
      if (response.code === 200) {
        common_vendor.index.setStorageSync("token", response.data.token);
      }
      store_index.setTempDir(`${common_vendor.index.env.USER_DATA_PATH}/wallpaperTempDirAAA`);
      const fileMgr = common_vendor.index.getFileSystemManager();
      fileMgr.mkdirSync(store_index.state.tempDir, false);
    });
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.uvue:24", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.uvue:27", "App Hide");
  },
  onExit: function() {
    common_vendor.index.__f__("log", "at App.uvue:48", "App Exit");
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
