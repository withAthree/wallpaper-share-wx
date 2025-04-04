"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_components_form_src_utils = require("../utils.js");
require("../../../../libs/lodash/_baseToString.js");
const useForm = (props) => {
  const fields = [];
  const addField = (field) => {
    fields.push(field);
  };
  const removeField = (field) => {
    if (field.prop) {
      fields.splice(fields.indexOf(field), 1);
    }
  };
  const resetFields = (properties = []) => {
    if (!props.model) {
      return common_vendor.index.__f__("warn", "at uni_modules/tuniaoui-vue3/components/form/src/composables/use-form.ts:36", "[TnForm] model参数未定义");
    }
    uni_modules_tuniaouiVue3_components_form_src_utils.filterFields(fields, properties).forEach((field) => {
      return field.resetField();
    });
  };
  const clearValidate = (props2 = []) => {
    uni_modules_tuniaouiVue3_components_form_src_utils.filterFields(fields, props2).forEach((field) => {
      return field.clearValidate();
    });
  };
  const isValidatable = common_vendor.computed(() => {
    const hasModel = !!props.model;
    if (!hasModel) {
      common_vendor.index.__f__("warn", "at uni_modules/tuniaoui-vue3/components/form/src/composables/use-form.ts:51", "[TnForm] model参数未定义");
    }
    return hasModel;
  });
  const obtainValidateFields = (props2) => {
    if (fields.length === 0)
      return [];
    const filteredFields = uni_modules_tuniaouiVue3_components_form_src_utils.filterFields(fields, props2);
    if (!filteredFields.length) {
      common_vendor.index.__f__("warn", "at uni_modules/tuniaoui-vue3/components/form/src/composables/use-form.ts:63", "[TnForm] 未找到需要校验的字段");
      return [];
    }
    return filteredFields;
  };
  const validate = (callback) => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      return validateField(void 0, callback);
    });
  };
  const doValidateField = (props2) => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      var e_1, _a;
      if (!isValidatable.value)
        return false;
      const fields2 = obtainValidateFields(props2);
      if (fields2.length === 0)
        return false;
      let validationErrors = {};
      try {
        for (var fields_1 = common_vendor.__values(fields2), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
          var field = fields_1_1.value;
          try {
            yield field.validate("");
          } catch (fields3) {
            validationErrors = Object.assign(Object.assign({}, validationErrors), fields3);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return))
            _a.call(fields_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (Object.keys(validationErrors).length === 0)
        return true;
      return Promise.reject(validationErrors);
    });
  };
  const validateField = (modelProps = [], callback) => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      const shouldThrow = !common_vendor.isFunction(callback);
      try {
        const result = yield doValidateField(modelProps);
        if (result === true) {
          callback === null || callback === void 0 ? void 0 : callback(true);
        }
        return result;
      } catch (e) {
        if (e instanceof Error)
          throw e;
        const invalidFields = e;
        callback === null || callback === void 0 ? void 0 : callback(false, invalidFields);
        return shouldThrow && Promise.reject(invalidFields);
      }
    });
  };
  return {
    addField,
    removeField,
    resetFields,
    clearValidate,
    validate,
    validateField
  };
};
exports.useForm = useForm;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/form/src/composables/use-form.js.map
