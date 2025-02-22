"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_lodash_fromPairs = require("../../../libs/lodash/from-pairs.js");
require("../../../libs/lodash/_baseToString.js");
const tnPropKey = "__tnPropKey";
const definePropType = (val) => {
  return val;
};
const isTnProp = (val) => {
  return common_vendor.isObject(val) && !!val[tnPropKey];
};
const buildProp = (prop, key) => {
  if (!common_vendor.isObject(prop) || isTnProp(prop))
    return prop;
  const values = prop.values, required = prop.required, defaultValue = prop.default, type = prop.type, validator = prop.validator;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (common_vendor.hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => {
        return JSON.stringify(value);
      }).join(", ");
      common_vendor.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const tnProp = {
    type,
    required: !!required,
    validator: _validator,
    [tnPropKey]: true
  };
  if (common_vendor.hasOwn(prop, "default"))
    tnProp.default = defaultValue;
  return tnProp;
};
const buildProps = (props) => {
  return uni_modules_tuniaouiVue3_libs_lodash_fromPairs.fromPairs(Object.entries(props).map((_a) => {
    var _b = common_vendor.__read(_a, 2), key = _b[0], option = _b[1];
    return [
      key,
      buildProp(option, key)
    ];
  }));
};
exports.buildProp = buildProp;
exports.buildProps = buildProps;
exports.definePropType = definePropType;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/utils/vue/props/runtime.js.map
