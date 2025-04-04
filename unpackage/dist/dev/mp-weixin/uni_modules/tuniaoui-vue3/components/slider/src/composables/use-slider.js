"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const useSlider = (props) => {
  const emit = common_vendor.getCurrentInstance().emit;
  const formItem = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem().formItem;
  const isFormItem = common_vendor.computed(() => {
    return !!formItem;
  });
  const sliderValue = common_vendor.ref(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props.modelValue, 0));
  const initSliderValue = () => {
    let val = props.modelValue;
    if (common_vendor.isArray(val)) {
      if (val.length === 0) {
        val = [0, 0];
      } else if (val.length === 1) {
        val = [0, Math.min(val[0], props.max)];
      } else {
        val = [
          Math.max(Math.min(val[0], val[1]), props.min),
          Math.min(Math.max(val[0], val[1], props.min), props.max)
        ];
      }
    } else {
      val = Math.min(Math.max(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(val, 0), props.min), props.max);
    }
    common_vendor.nextTick$1(() => {
      emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, val);
    });
  };
  initSliderValue();
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val) => {
    sliderValue.value = val;
  });
  const mode = common_vendor.computed(() => {
    return common_vendor.isArray(sliderValue.value) ? "range" : "single";
  });
  const precision = common_vendor.computed(() => {
    const precision2 = [props.min, props.max, props.step].map((item) => {
      const decimal = `${item}`.split(".")[1];
      return decimal ? decimal.length : 0;
    });
    return Math.max.apply(null, precision2);
  });
  const handleInputValue = (value, type) => {
    if (mode.value === "single") {
      return value;
    } else {
      const minValue = sliderValue.value[0];
      const maxValue = sliderValue.value[1];
      if (type === "min") {
        return [
          Math.min(Math.max(props.min, value), maxValue),
          sliderValue.value[1]
        ];
      } else {
        return [
          sliderValue.value[0],
          Math.max(Math.min(value, props.max), minValue)
        ];
      }
    }
  };
  const updateSliderValue = (_value, type) => {
    const value = handleInputValue(_value, type);
    emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    common_vendor.nextTick$1(() => {
      emit(uni_modules_tuniaouiVue3_constants_event.INPUT_EVENT, value);
    });
    if (props.validateEvent) {
      formItem === null || formItem === void 0 ? void 0 : formItem.validate("input").catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
      });
    }
  };
  const changeSliderValue = (_value, type) => {
    const value = handleInputValue(_value, type);
    emit(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
    if (props.validateEvent) {
      formItem === null || formItem === void 0 ? void 0 : formItem.validate("change").catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
      });
    }
  };
  return {
    isFormItem,
    sliderValue,
    mode,
    precision,
    updateSliderValue,
    changeSliderValue
  };
};
exports.useSlider = useSlider;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/slider/src/composables/use-slider.js.map
