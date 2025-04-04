"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
const uni_modules_tuniaouiVue3_hooks_useTouch_index = require("../../../../hooks/use-touch/index.js");
require("../../../../hooks/use-z-index/index.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_components_rate_src_composables_useRateItemData = require("./use-rate-item-data.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const useRate = (props, emits) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnRate", "请在setup函数中使用useRate");
  }
  const componentId = `tr-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const formItem = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem().formItem;
  const rateItemData = uni_modules_tuniaouiVue3_components_rate_src_composables_useRateItemData.useRateItemData(props).rateItemData;
  const _a = uni_modules_tuniaouiVue3_hooks_useTouch_index.useTouch(), rateCurrentX = _a.currentX, updateRateTouchOptions = _a.updateOptions, rateTouchStartHandler = _a.onTouchStart, rateTouchMoveHandler = _a.onTouchMove, rateTouchEndHandler = _a.onTouchEnd;
  const updateValue = (value) => {
    if (Number.isNaN(value)) {
      uni_modules_tuniaouiVue3_utils_error.debugWarn("TnRate", "Rate回填数据发生错误");
      value = 0;
    }
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    common_vendor.nextTick$1(() => {
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
      if (props.validateEvent) {
        formItem === null || formItem === void 0 ? void 0 : formItem.validate("change").catch((err) => {
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnRate", `Rate验证发生错误: ${err}`);
        });
      }
    });
  };
  let componentItemWidth = 0;
  const activeItemWidth = common_vendor.ref(0);
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val) => {
    if (!props.allowHalf) {
      val = Math.ceil(val);
    }
    activeItemWidth.value = val * componentItemWidth;
  });
  let initCount = 0;
  const getComponentRectInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const itemRectInfo = yield getSelectorNodeInfo(`#${componentId} .tn-rate__item`);
        if (!(itemRectInfo === null || itemRectInfo === void 0 ? void 0 : itemRectInfo.width)) {
          throw new Error("获取组件容器宽度失败");
        }
        componentItemWidth = itemRectInfo.width || 0;
        const left = itemRectInfo.left || 0;
        updateRateTouchOptions({
          left,
          right: componentItemWidth * props.max + left,
          top: itemRectInfo.top,
          bottom: itemRectInfo.bottom
        });
        let initValue = props.modelValue || 0;
        if (props.modelValue && props.modelValue < props.min) {
          initValue = props.min;
        }
        activeItemWidth.value = initValue * componentItemWidth;
        updateValue(initValue);
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnRate", `获取组件容器信息失败: ${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getComponentRectInfo();
        }, 300);
      }
    });
  };
  const onTouchStart = (event) => {
    rateTouchStartHandler(event);
  };
  const onTouchMove = (event) => {
    rateTouchMoveHandler(event);
    if (props.readonly)
      return;
    activeItemWidth.value = rateCurrentX.value;
  };
  const onTouchEnd = (event) => {
    rateTouchEndHandler(event);
    if (props.readonly)
      return;
    if (props.allowHalf) {
      const componentItemWidthHalf = componentItemWidth / 2;
      let count = Math.ceil(rateCurrentX.value / componentItemWidthHalf);
      if (count % 2 !== 0) {
        if (rateCurrentX.value < componentItemWidthHalf * (count - 1) + componentItemWidthHalf / 2) {
          count -= 1;
        }
      } else {
        if (rateCurrentX.value < componentItemWidthHalf * (count - 1) + componentItemWidthHalf / 3) {
          count -= 1;
        }
      }
      if (rateCurrentX.value < componentItemWidthHalf * (count - 1) + componentItemWidthHalf / 2 && count % 2 !== 0) {
        count -= 1;
      }
      if (count < props.min * 2) {
        count = props.min * 2;
      }
      activeItemWidth.value = componentItemWidthHalf * count;
      updateValue(count / 2);
    } else {
      let count = Math.ceil(rateCurrentX.value / componentItemWidth);
      if (count > 1 && rateCurrentX.value < componentItemWidth * (count - 1)) {
        count -= 1;
      }
      if (count < props.min) {
        count = props.min;
      }
      activeItemWidth.value = componentItemWidth * count;
      updateValue(count);
    }
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getComponentRectInfo();
    });
  });
  return {
    componentId,
    rateItemData,
    activeItemWidth,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};
exports.useRate = useRate;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/rate/src/composables/use-rate.js.map
