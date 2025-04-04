"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_swipeAction = require("../../../../tokens/swipe-action.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
const uni_modules_tuniaouiVue3_hooks_useTouch_index = require("../../../../hooks/use-touch/index.js");
require("../../../../hooks/use-z-index/index.js");
const useSwipeActionItem = (props) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSwipeActionItem", "请在 setup 中使用 useSwipeActionItem");
  }
  const uid = instance.uid;
  const swipeActionContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_swipeAction.swipeActionContextKey, null);
  if (!swipeActionContext) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSwipeActionItem", "请在 TnSwipeAction 中使用 TnSwipeActionItem");
  }
  const componentId = `tsai-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const optionComponentClass = `${componentId}-option`;
  const _a = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance), getSelectorNodeInfo = _a.getSelectorNodeInfo, getSelectorNodeInfos = _a.getSelectorNodeInfos;
  const _b = uni_modules_tuniaouiVue3_hooks_useTouch_index.useTouch(), swipeActionItemDeltaX = _b.deltaX, swipeActionItemDistanceX = _b.distanceX, swipeActionItemDistanceY = _b.distanceY, swipeActionItemTouchIsVertical = _b.isVertical, updateSwipeActionItemTouchOptions = _b.updateOptions, swipeActionItemTouchStartEvent = _b.onTouchStart, swipeActionItemTouchMoveEvent = _b.onTouchMove, swipeActionItemTouchEndEvent = _b.onTouchEnd;
  const isOptionsOpen = common_vendor.computed(() => {
    return swipeActionContext.activeUid.includes(uid);
  });
  const autoClose = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyDoubleVariableInDefault(props === null || props === void 0 ? void 0 : props.autoClose, swipeActionContext === null || swipeActionContext === void 0 ? void 0 : swipeActionContext.autoClose, true);
  });
  const disabledSwipe = common_vendor.computed(() => {
    var _a2;
    return props.disabled || !((_a2 = props.options) === null || _a2 === void 0 ? void 0 : _a2.length);
  });
  common_vendor.watch(() => {
    return disabledSwipe.value;
  }, (val) => {
    updateSwipeActionItemTouchOptions({
      disabled: val
    });
  }, {
    immediate: true
  });
  const optionsMenuWidth = common_vendor.ref(0);
  let initCount = 0;
  const getComponentNodeInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      var _a2;
      try {
        const componentRectInfo = yield getSelectorNodeInfo(`#${componentId}`);
        let optionsRectInfo = [];
        if ((_a2 = props.options) === null || _a2 === void 0 ? void 0 : _a2.length) {
          optionsRectInfo = yield getSelectorNodeInfos(`.${optionComponentClass}`);
        }
        initCount = 0;
        updateSwipeActionItemTouchOptions({
          left: componentRectInfo.left,
          right: componentRectInfo.right,
          top: componentRectInfo.top,
          bottom: componentRectInfo.bottom
        });
        optionsMenuWidth.value = optionsRectInfo.reduce((prev, curr) => {
          return prev + (curr.width || 0);
        }, 0);
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSwipeActionItem", `获取节点信息失败: ${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getComponentNodeInfo();
        }, 150);
      }
    });
  };
  const contentRightDistance = common_vendor.ref(0);
  const isSwipe = common_vendor.ref(false);
  const onTouchStart = (event) => {
    swipeActionItemTouchStartEvent(event);
  };
  const onTouchMove = (event) => {
    event.preventDefault();
    event.stopPropagation();
    swipeActionItemTouchMoveEvent(event);
    isSwipe.value = true;
    if (swipeActionItemDistanceX.value < 3 && swipeActionItemDistanceY.value > 5) {
      return;
    }
    if (isOptionsOpen.value) {
      contentRightDistance.value = optionsMenuWidth.value - swipeActionItemDeltaX.value;
    } else {
      contentRightDistance.value = -swipeActionItemDeltaX.value;
    }
    if (contentRightDistance.value < 0)
      contentRightDistance.value = 0;
    if (contentRightDistance.value > optionsMenuWidth.value)
      contentRightDistance.value = optionsMenuWidth.value;
  };
  const onTouchEnd = (event) => {
    swipeActionItemTouchEndEvent(event);
    if (swipeActionItemDistanceX.value < 3 && swipeActionItemDistanceY.value > 5) {
      return;
    }
    isSwipe.value = false;
    if (-swipeActionItemDeltaX.value > props.threshold) {
      openOptionsMenu();
    } else {
      closeOptionsMenu();
      updateAllItemOptionStatus();
    }
    if (swipeActionItemTouchIsVertical.value) {
      updateAllItemOptionStatus();
    }
  };
  const closeOptionsMenu = () => {
    isSwipe.value = false;
    contentRightDistance.value = 0;
  };
  const updateAllItemOptionStatus = () => {
    if (isOptionsOpen.value) {
      swipeActionContext === null || swipeActionContext === void 0 ? void 0 : swipeActionContext.setActiveItem(uid);
    } else {
      if (swipeActionContext === null || swipeActionContext === void 0 ? void 0 : swipeActionContext.exclusive) {
        swipeActionContext === null || swipeActionContext === void 0 ? void 0 : swipeActionContext.closeAllItemOption();
      }
    }
  };
  const openOptionsMenu = () => {
    isSwipe.value = false;
    contentRightDistance.value = optionsMenuWidth.value;
    swipeActionContext === null || swipeActionContext === void 0 ? void 0 : swipeActionContext.setActiveItem(uid);
  };
  common_vendor.watch(() => {
    return isOptionsOpen.value;
  }, (val) => {
    if (!val) {
      closeOptionsMenu();
    }
  });
  const optionClickEvent = (index) => {
    const option = props.options[index];
    if (option.disabled)
      return;
    swipeActionContext === null || swipeActionContext === void 0 ? void 0 : swipeActionContext.optionClick(uid, index);
    if (autoClose.value) {
      closeOptionsMenu();
    }
  };
  common_vendor.onMounted(() => {
    swipeActionContext === null || swipeActionContext === void 0 ? void 0 : swipeActionContext.addItem({
      uid
    });
    common_vendor.nextTick$1(() => {
      getComponentNodeInfo();
    });
  });
  common_vendor.onUnmounted(() => {
    swipeActionContext === null || swipeActionContext === void 0 ? void 0 : swipeActionContext.removeItem(uid);
  });
  return {
    componentId,
    optionComponentClass,
    isOptionsOpen,
    optionsMenuWidth,
    contentRightDistance,
    isSwipe,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    optionClickEvent
  };
};
exports.useSwipeActionItem = useSwipeActionItem;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/swipe-action/src/composables/use-swipe-action-item.js.map
