"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../utils/error.js");
const DEFAULT_STATUS_BAR_HEIGHT = 45;
const useUniAppSystemRectInfo = () => {
  const navBarInfo = common_vendor.reactive({
    height: 0,
    statusHeight: DEFAULT_STATUS_BAR_HEIGHT
  });
  const navBarBoundingInfo = common_vendor.reactive({
    width: 0,
    height: 32,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginRight: 0
  });
  const systemScreenInfo = common_vendor.reactive({
    width: 0,
    height: 0,
    operationHeight: 0
  });
  const getSystemRectInfo = () => {
    try {
      const uniSystemInfo = common_vendor.index.getSystemInfoSync();
      const statusBarHeight = uniSystemInfo.statusBarHeight, windowWidth = uniSystemInfo.windowWidth, windowHeight = uniSystemInfo.windowHeight, titleBarHeight = uniSystemInfo.titleBarHeight;
      let height = 0;
      const _a = common_vendor.index.getMenuButtonBoundingClientRect(), menuButtonWidth = _a.width, menuButtonHeight = _a.height, menuButtonBottom = _a.bottom, menuButtonTop = _a.top, menuButtonLeft = _a.left, menuButtonRight = _a.right;
      navBarBoundingInfo.width = menuButtonWidth;
      navBarBoundingInfo.height = menuButtonHeight + 2;
      navBarBoundingInfo.bottom = menuButtonBottom;
      navBarBoundingInfo.top = menuButtonTop;
      navBarBoundingInfo.left = menuButtonLeft;
      navBarBoundingInfo.right = menuButtonRight;
      navBarBoundingInfo.marginRight = windowWidth - navBarBoundingInfo.right;
      const menuButtonMarginTopHeight = menuButtonTop - statusBarHeight;
      height = menuButtonBottom + (menuButtonMarginTopHeight < 4 ? 4 : menuButtonMarginTopHeight);
      navBarInfo.height = height;
      navBarInfo.statusHeight = statusBarHeight;
      systemScreenInfo.width = windowWidth;
      systemScreenInfo.height = windowHeight;
      systemScreenInfo.operationHeight = windowHeight - height;
    } catch (err) {
      uni_modules_tuniaouiVue3_utils_error.debugWarn("useUniAppSystemRectInfo", `[TnGetSystemRectInfo]获取系统容器信息失败: ${err}`);
    }
  };
  getSystemRectInfo();
  return {
    navBarInfo,
    navBarBoundingInfo,
    systemScreenInfo,
    getSystemRectInfo
  };
};
exports.useUniAppSystemRectInfo = useUniAppSystemRectInfo;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/hooks/use-uniapp-system-rect-info/index.js.map
