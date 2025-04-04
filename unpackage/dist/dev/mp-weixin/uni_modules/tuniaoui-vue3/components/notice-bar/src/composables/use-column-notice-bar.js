"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_noticeBar = require("../../../../tokens/notice-bar.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const useColumnNoticeBar = () => {
  const noticeBar = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_noticeBar.noticeBarKey, null);
  const data = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.data, []);
  });
  const interval = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.speed, 3e3);
  });
  const play = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.play, true);
  });
  const vertical = common_vendor.computed(() => {
    return (noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.direction) === "vertical";
  });
  const noticeClickEvent = (index) => {
    noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.click(index);
  };
  return {
    data,
    interval,
    play,
    vertical,
    noticeClickEvent
  };
};
exports.useColumnNoticeBar = useColumnNoticeBar;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notice-bar/src/composables/use-column-notice-bar.js.map
