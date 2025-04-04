"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_tabbar = require("../../../../tokens/tabbar.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const useTabbarItem = (props, emit) => {
  const tabbarContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_tabbar.tabbarContextKey);
  const instance = common_vendor.getCurrentInstance();
  if (!tabbarContext) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabbarItem", "TnTabbarItem必须在TnTabbar中使用");
  }
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabbarItem", "TnTabbarItem必须在setup中使用");
  }
  const uid = instance.uid || uni_modules_tuniaouiVue3_utils_rand.generateId();
  const itemId = `tti-${uid}`;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const isActive = common_vendor.computed(() => {
    return (tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.activeUid) === uid;
  });
  const iconSize = common_vendor.computed(() => {
    return props.iconSize || (tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.iconSize) || "";
  });
  const hasBadge = common_vendor.computed(() => {
    return !!props.badge;
  });
  const itemClick = () => {
    if (isActive.value || props.disabled)
      return;
    tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.setActiveItem(uid);
    emit("click");
  };
  const itemRectInfo = common_vendor.ref({
    width: 0,
    height: 0,
    left: 0
  });
  let initRectCount = 0;
  const getItemRectInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const rectInfo = yield getSelectorNodeInfo(`#${itemId}`);
        if (rectInfo.width && rectInfo.width < 30) {
          throw new Error("获取TabbarItem节点宽度失败");
        }
        initRectCount = 0;
        itemRectInfo.value.width = rectInfo.width || 0;
        itemRectInfo.value.height = rectInfo.height || 0;
        itemRectInfo.value.left = rectInfo.left || 0;
        if (itemRectInfo.value.width > 80) {
          itemRectInfo.value.maxWidth = 80;
        }
        tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.setBulgeCircle(itemRectInfo.value);
      } catch (err) {
        if (initRectCount > 10) {
          initRectCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabbarItem", `获取TabbarItem节点信息失败: ${err}`);
          return;
        }
        initRectCount++;
        setTimeout(() => {
          getItemRectInfo();
        }, 150);
      }
    });
  };
  tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.addItem({
    uid,
    name: props.name
  });
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      if (props.bulge)
        getItemRectInfo();
    });
  });
  common_vendor.onUnmounted(() => {
    tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.removeItem(uid);
  });
  return {
    itemId,
    isActive,
    itemRectInfo,
    iconSize,
    hasBadge,
    itemClick
  };
};
exports.useTabbarItem = useTabbarItem;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabbar/src/composables/use-tabbar-item.js.map
