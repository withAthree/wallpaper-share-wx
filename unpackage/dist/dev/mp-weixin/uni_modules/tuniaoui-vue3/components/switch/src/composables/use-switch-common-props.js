"use strict";
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps = require("../../../form/src/composables/use-form-common-props.js");
const useSwitchCommonProps = (props) => {
  const size = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormSize(props.size);
  const disabled = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormDisabled(props.disabled);
  return {
    size,
    disabled
  };
};
exports.useSwitchCommonProps = useSwitchCommonProps;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/switch/src/composables/use-switch-common-props.js.map
