"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_noticeBar = require("../../../../tokens/notice-bar.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const useRowNoticeBar = () => {
  const instance = common_vendor.getCurrentInstance();
  const noticeBar = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_noticeBar.noticeBarKey, null);
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const componentId = `trnb-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const componentTextId = `${componentId}-text`;
  const data = common_vendor.computed(() => {
    var _a;
    if (!((_a = noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.data) === null || _a === void 0 ? void 0 : _a.length))
      return "";
    return noticeBar.data.join(" ");
  });
  const speed = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.speed, 80);
  });
  let animationDuration = 0;
  let animation = null;
  const animationData = common_vendor.ref(null);
  let animationLoopTimer = null;
  const createAnimation = () => {
    animation = common_vendor.index.createAnimation({
      duration: animationDuration,
      timingFunction: "linear"
    });
    animation.translateX(-(contentWidth + contentTextWidth) + Number(Math.random() * 10)).step({
      duration: animationDuration
    });
    animation.translateX(0).step({
      duration: 0
    });
    animationData.value = animation.export();
  };
  const createLoopAnimation = () => {
    createAnimation();
    animationLoopTimer = setInterval(() => {
      createAnimation();
    }, animationDuration + 80);
  };
  const stopAnimation = () => {
    animation = null;
    animationData.value = null;
    if (animationLoopTimer) {
      clearInterval(animationLoopTimer);
      animationLoopTimer = null;
    }
  };
  common_vendor.watch(() => {
    return noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.play;
  }, (newVal) => {
    if (newVal) {
      createLoopAnimation();
    } else {
      stopAnimation();
    }
  });
  let initCount = 0;
  let contentWidth = 0;
  let contentTextWidth = 0;
  const getContentRectInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const contentRectInfo = yield getSelectorNodeInfo(`#${componentId}`);
        const contentTextRectInfo = yield getSelectorNodeInfo(`#${componentTextId}`);
        initCount = 0;
        contentWidth = contentRectInfo.width || 0;
        contentTextWidth = contentTextRectInfo.width || 0;
        animationDuration = (contentWidth + contentTextWidth) / speed.value * 1e3;
        if ((noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.play) && (noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.autoPlay)) {
          setTimeout(() => {
            createLoopAnimation();
          }, 50);
        }
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnNoticeBar", `获取通知栏容器信息失败: ${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getContentRectInfo();
        }, 150);
      }
    });
  };
  common_vendor.watch(() => {
    return noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.speed;
  }, () => {
    stopAnimation();
    getContentRectInfo();
  });
  const noticeClickEvent = () => {
    noticeBar === null || noticeBar === void 0 ? void 0 : noticeBar.click(0);
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getContentRectInfo();
    });
  });
  return {
    componentId,
    componentTextId,
    data,
    animationData,
    noticeClickEvent
  };
};
exports.useRowNoticeBar = useRowNoticeBar;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notice-bar/src/composables/use-row-notice-bar.js.map
