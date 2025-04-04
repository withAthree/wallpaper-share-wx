"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_tabbar = require("../../../../tokens/tabbar.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../../libs/lodash/is-boolean.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index = require("../../../../hooks/use-ordered-children/index.js");
const useTabbar = (props) => {
  const emit = common_vendor.getCurrentInstance().emit;
  const _a = uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index.useOrderedChildren(), items = _a.children, addChild = _a.addChild, removeItem = _a.removeChild;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery().getSelectorNodeInfo;
  const rectId = `tt-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const activeUid = common_vendor.ref(-1);
  const addItem = (item) => {
    if (props.modelValue !== void 0 && activeUid.value === -1) {
      if (props.modelValue === item.name || props.modelValue === items.value.length) {
        common_vendor.nextTick$1(() => {
          updateActiveId(item.uid);
          setTimeout(() => {
            if (activeUid.value !== -1)
              return;
            activeUid.value = item.uid;
          }, 50);
        });
      }
    }
    addChild(item);
  };
  const updateActiveId = (uid, changeEmit = false) => {
    var _a2;
    activeUid.value = uid;
    const itemIndex = items.value.findIndex((item) => {
      return item.uid === uid;
    });
    const value = ((_a2 = items.value[itemIndex]) === null || _a2 === void 0 ? void 0 : _a2.name) || itemIndex;
    emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    if (changeEmit) {
      common_vendor.nextTick$1(() => {
        emit(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
      });
    }
  };
  const setActiveItem = (uid) => {
    if (!props.beforeSwitch) {
      updateActiveId(uid, true);
      return;
    }
    const index = items.value.findIndex((item) => {
      return item.uid === uid;
    });
    const shouldSwitch = props.beforeSwitch(index);
    const isPromiseOrBoolean = [
      common_vendor.isPromise(shouldSwitch),
      uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldSwitch)
    ].includes(true);
    if (!isPromiseOrBoolean) {
      uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabbar", "beforeSwitch切换前拦截函数必须返回Promise或者Boolean");
      return;
    }
    if (common_vendor.isPromise(shouldSwitch)) {
      shouldSwitch.then((res) => {
        if (res)
          updateActiveId(uid, true);
      });
    } else {
      if (shouldSwitch)
        updateActiveId(uid, true);
    }
  };
  const setActiveItemByValue = (value) => {
    var _a2;
    if (value === void 0) {
      updateActiveId(items.value[0].uid);
      return;
    }
    let item;
    if (typeof value === "number") {
      item = (_a2 = items.value) === null || _a2 === void 0 ? void 0 : _a2[value];
    }
    if (!item) {
      item = items.value.find((item2) => {
        return item2.name === value;
      });
    }
    if (!item) {
      updateActiveId(items.value[0].uid);
    } else {
      updateActiveId(item.uid);
    }
  };
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val) => {
    common_vendor.nextTick$1(() => {
      setActiveItemByValue(val);
    });
  });
  const bulgeRectInfo = common_vendor.ref({
    width: 0,
    height: 0,
    left: 0
  });
  const hasBulgeButton = common_vendor.ref(false);
  const setBulgeCircle = (itemRectInfo) => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      const left = itemRectInfo.left;
      try {
        const rectInfo = yield getSelectorNodeInfo(`#${rectId}`);
        const tabbarRectLeft = rectInfo.left;
        let width = itemRectInfo.width;
        if (itemRectInfo === null || itemRectInfo === void 0 ? void 0 : itemRectInfo.maxWidth) {
          width = itemRectInfo.maxWidth;
        }
        bulgeRectInfo.value.width = width * 0.75;
        bulgeRectInfo.value.height = bulgeRectInfo.value.width;
        bulgeRectInfo.value.left = left - (tabbarRectLeft || 0) + itemRectInfo.width / 2;
        hasBulgeButton.value = true;
      } catch (err) {
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabbar", `获取Tabbar节点信息失败: ${err}`);
      }
    });
  };
  common_vendor.provide(uni_modules_tuniaouiVue3_tokens_tabbar.tabbarContextKey, common_vendor.reactive(Object.assign(Object.assign({}, common_vendor.toRefs(props)), {
    items,
    activeUid,
    addItem,
    removeItem,
    setActiveItem,
    setBulgeCircle
  })));
  return {
    rectId,
    hasBulgeButton,
    bulgeRectInfo,
    setActiveItem,
    setActiveItemByValue
  };
};
exports.useTabbar = useTabbar;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabbar/src/composables/use-tabbar.js.map
