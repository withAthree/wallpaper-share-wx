"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../../libs/lodash/is-boolean.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_components_switch_src_composables_useSwitchCommonProps = require("./use-switch-common-props.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const useSwitch = (props) => {
  const emit = common_vendor.getCurrentInstance().emit;
  const formItem = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem().formItem;
  const disabled = uni_modules_tuniaouiVue3_components_switch_src_composables_useSwitchCommonProps.useSwitchCommonProps(props).disabled;
  const selected = common_vendor.computed(() => {
    return props.modelValue === props.activeValue;
  });
  const handleSwitch = () => {
    const value = props.modelValue === props.activeValue ? props.inactiveValue : props.activeValue;
    emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    common_vendor.nextTick$1(() => {
      return emit(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
    });
  };
  const switchClickEvent = () => {
    if (disabled.value || props.loading)
      return;
    const beforeChange = props.beforeChange;
    if (!beforeChange) {
      handleSwitch();
      return;
    }
    const shouldChange = beforeChange();
    const isPromiseOrBool = [
      common_vendor.isPromise(shouldChange),
      uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldChange)
    ].includes(true);
    if (!isPromiseOrBool) {
      throw new Error("[TnSwitch] beforeChange 返回值必须是 Promise 或者 boolean");
    }
    if (common_vendor.isPromise(shouldChange)) {
      shouldChange.then((res) => {
        if (res)
          handleSwitch();
      }).catch((err) => {
        common_vendor.index.__f__("warn", "at uni_modules/tuniaoui-vue3/components/switch/src/composables/use-switch.ts:61", `[TnSwitch] some error occured: ${err}`);
      });
    } else if (shouldChange) {
      handleSwitch();
    }
  };
  common_vendor.watch(() => {
    return props.modelValue;
  }, () => {
    var _a;
    if (props.validateEvent) {
      (_a = formItem === null || formItem === void 0 ? void 0 : formItem.validate) === null || _a === void 0 ? void 0 : _a.call(formItem, "change").catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
      });
    }
  });
  return {
    selected,
    switchClickEvent
  };
};
exports.useSwitch = useSwitch;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/switch/src/composables/use-switch.js.map
