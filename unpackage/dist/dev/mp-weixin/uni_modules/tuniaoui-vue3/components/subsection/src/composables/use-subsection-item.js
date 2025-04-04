"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_subsection = require("../../../../tokens/subsection.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const useSubsectionItem = (props, emits) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSubsectionItem", "请在 setup 中使用 useSubsectionItem");
  }
  const uid = instance.uid;
  const subsectionContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_subsection.subsectionContextKey);
  if (!subsectionContext) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSubsectionItem", "请在 TnSubsection 中使用 TnSubsectionItem");
  }
  const componentId = `tsi-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const active = common_vendor.computed(() => {
    return (subsectionContext === null || subsectionContext === void 0 ? void 0 : subsectionContext.activeUid) === uid;
  });
  const componentRectInfo = {
    left: 0,
    width: 0
  };
  let initCount = 0;
  const getSubsectionItemRectInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const rectInfo = yield getSelectorNodeInfo(`#${componentId}`);
        initCount = 0;
        componentRectInfo.left = rectInfo.left || 0;
        componentRectInfo.width = rectInfo.width || 0;
        subsectionContext === null || subsectionContext === void 0 ? void 0 : subsectionContext.addItem(Object.assign(Object.assign({}, props), { uid, element: componentRectInfo }));
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSubsectionItem", `获取节点信息失败: ${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getSubsectionItemRectInfo();
        }, 150);
      }
    });
  };
  const itemClickEvent = () => {
    if ((subsectionContext === null || subsectionContext === void 0 ? void 0 : subsectionContext.disabled) || props.disabled)
      return;
    subsectionContext === null || subsectionContext === void 0 ? void 0 : subsectionContext.setActiveItem(uid);
    emits("click", props.title);
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getSubsectionItemRectInfo();
    });
  });
  common_vendor.onUnmounted(() => {
    subsectionContext === null || subsectionContext === void 0 ? void 0 : subsectionContext.removeItem(uid);
  });
  return {
    componentId,
    active,
    itemClickEvent
  };
};
exports.useSubsectionItem = useSubsectionItem;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/subsection/src/composables/use-subsection-item.js.map
