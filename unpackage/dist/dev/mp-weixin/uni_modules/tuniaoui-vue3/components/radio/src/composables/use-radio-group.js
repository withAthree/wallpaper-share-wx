"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const useRadioGroup = (props, emits) => {
  const formItem = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem().formItem;
  const changeEvent = (val) => {
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, val);
    common_vendor.nextTick$1(() => {
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, val);
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
exports.useRadioGroup = useRadioGroup;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/radio/src/composables/use-radio-group.js.map
