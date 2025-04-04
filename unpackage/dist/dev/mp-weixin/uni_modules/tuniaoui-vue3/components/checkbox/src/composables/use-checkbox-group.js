"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
require("../../../form/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const useCheckboxGroup = (props, emits) => {
  const formItem = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem().formItem;
  const changeEvent = (val) => {
    const modelValue = props.modelValue, max = props.max;
    const selectValues = [...modelValue];
    const hasLabel = selectValues.includes(val);
    if (hasLabel) {
      selectValues.splice(selectValues.indexOf(val), 1);
    } else {
      if (max && selectValues.length >= max) {
        return;
      }
      selectValues.push(val);
    }
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, selectValues);
    common_vendor.nextTick$1(() => {
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, selectValues);
    });
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
    changeEvent
  };
};
exports.useCheckboxGroup = useCheckboxGroup;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/checkbox/src/composables/use-checkbox-group.js.map
