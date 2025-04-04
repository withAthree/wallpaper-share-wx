"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
const login_index = require("./login/index.js");
const api_index = require("./api/index.js");
if (!Math) {
  "./pages/home/index.js";
  "./subPages/pages/detail/index.js";
}
const fileMgr = common_vendor.index.getFileSystemManager();
const _sfc_main = common_vendor.defineComponent(new UTSJSONObject({
  onLaunch: function() {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      common_vendor.index.__f__("log", "at App.uvue:11", "App Launch");
      common_vendor.wx$1.showShareMenu(new UTSJSONObject({
        withShareTicket: true,
        //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
        menus: ["shareAppMessage", "shareTimeline"]
      }));
      store_index.setGlobalLoading(true);
      store_index.setTempDir(`${common_vendor.index.env.USER_DATA_PATH}/wallpaperTempDirAAA`);
      if (!common_vendor.index.getStorageSync("token")) {
        const res = yield login_index.getLoginCode();
        const response = yield api_index.login(new UTSJSONObject({ code: res.code }));
        if (response.statusCode === 200) {
          common_vendor.index.setStorageSync("token", response.data.token);
        }
      }
      try {
        fileMgr.rmdirSync(store_index.state.tempDir, true);
      } catch (err) {
        common_vendor.index.__f__("error", "at App.uvue:34", "删除临时文件夹失败: ", err);
      }
      try {
        fileMgr.mkdirSync(store_index.state.tempDir, false);
        common_vendor.index.__f__("log", "at App.uvue:40", "创建临时文件夹成功");
      } catch (err) {
        common_vendor.index.__f__("error", "at App.uvue:42", err);
      } finally {
        store_index.setGlobalLoading(false);
      }
    });
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.uvue:48", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.uvue:51", "App Hide");
  },
  onExit: function() {
    common_vendor.index.__f__("log", "at App.uvue:72", "App Exit");
  }
}));
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
