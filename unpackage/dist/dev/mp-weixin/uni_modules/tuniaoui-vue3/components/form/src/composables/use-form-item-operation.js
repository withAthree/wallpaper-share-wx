"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_index = require("../../../../libs/async-validator/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_libs_lodash_debounce = require("../../../../libs/lodash/debounce.js");
const uni_modules_tuniaouiVue3_libs_lodash_castArray = require("../../../../libs/lodash/cast-array.js");
const uni_modules_tuniaouiVue3_tokens_form = require("../../../../tokens/form.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
const uni_modules_tuniaouiVue3_utils_objects = require("../../../../utils/objects.js");
const uni_modules_tuniaouiVue3_utils_cloneDeep = require("../../../../utils/clone-deep.js");
const useFormItemOperation = (props, slots) => {
  const formContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_form.formContextKey, void 0);
  let initialValue = void 0;
  let isResettingField = false;
  const validateState = common_vendor.ref("");
  const validateStateDebounced = common_vendor.ref("");
  const validateMessage = common_vendor.ref("");
  const hasLabel = common_vendor.computed(() => {
    return !!(props.label || slots.label);
  });
  const currentLabel = common_vendor.computed(() => {
    return `${props.label || ""}${(formContext === null || formContext === void 0 ? void 0 : formContext.labelSuffix) || ""}`;
  });
  const fieldValue = common_vendor.computed(() => {
    const model = formContext === null || formContext === void 0 ? void 0 : formContext.model;
    if (!model || !props.prop) {
      return;
    }
    return uni_modules_tuniaouiVue3_utils_objects.getProp(model, props.prop).value;
  });
  const propString = common_vendor.computed(() => {
    if (!props.prop)
      return "";
    return common_vendor.isString(props.prop) ? props.prop : props.prop.join(".");
  });
  const normalizedRules = common_vendor.computed(() => {
    var e_1, _a;
    const rules = [];
    if (props.rules)
      rules.push(...uni_modules_tuniaouiVue3_libs_lodash_castArray.castArray(props.rules));
    const formRules = formContext === null || formContext === void 0 ? void 0 : formContext.rules;
    if (formRules && props.prop) {
      const _rules = uni_modules_tuniaouiVue3_utils_objects.getProp(formRules, props.prop).value;
      if (_rules)
        rules.push(...uni_modules_tuniaouiVue3_libs_lodash_castArray.castArray(_rules));
    }
    if (props.required !== void 0) {
      const requiredRules = rules.map((rule2, index2) => {
        return [rule2, index2];
      }).filter((_a2) => {
        var _b2 = common_vendor.__read(_a2, 1), rule2 = _b2[0];
        return Object.keys(rule2).includes("required");
      });
      if (requiredRules.length) {
        try {
          for (var requiredRules_1 = common_vendor.__values(requiredRules), requiredRules_1_1 = requiredRules_1.next(); !requiredRules_1_1.done; requiredRules_1_1 = requiredRules_1.next()) {
            var _b = common_vendor.__read(requiredRules_1_1.value, 2), rule = _b[0], index = _b[1];
            if (rule.required === props.required)
              continue;
            rules[index] = Object.assign(Object.assign({}, rule), { required: props.required });
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (requiredRules_1_1 && !requiredRules_1_1.done && (_a = requiredRules_1.return))
              _a.call(requiredRules_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      } else {
        rules.push({ required: props.required });
      }
    }
    return rules;
  });
  const validateEnabled = common_vendor.computed(() => {
    return normalizedRules.value.length > 0;
  });
  const isRequired = common_vendor.computed(() => {
    return normalizedRules.value.some((rule) => {
      return rule.required;
    });
  });
  const shouldShowError = common_vendor.computed(() => {
    return validateStateDebounced.value === "error" && props.showMessage && uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(formContext === null || formContext === void 0 ? void 0 : formContext.showMessage, true);
  });
  const setValidateState = (state) => {
    validateState.value = state;
  };
  const getFilterRule = (trigger) => {
    const rules = normalizedRules.value;
    return rules.filter((rule) => {
      if (!rule.trigger || !trigger)
        return true;
      if (Array.isArray(rule.trigger)) {
        return rule.trigger.includes(trigger);
      } else {
        return rule.trigger === trigger;
      }
    }).map((_a) => {
      _a.trigger;
      var rule = common_vendor.__rest(_a, ["trigger"]);
      return rule;
    });
  };
  const onValidationFailed = (error) => {
    var _a;
    const errors = error.errors, fields = error.fields;
    if (!errors || !fields) {
      common_vendor.index.__f__("error", "at uni_modules/tuniaoui-vue3/components/form/src/composables/use-form-item-operation.ts:140", error);
    }
    setValidateState("error");
    validateMessage.value = errors ? uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault((_a = errors === null || errors === void 0 ? void 0 : errors[0]) === null || _a === void 0 ? void 0 : _a.message, `${props.prop} 为必填项`) : "";
    formContext === null || formContext === void 0 ? void 0 : formContext.emits("validate", props.prop, false, validateMessage.value);
  };
  const onValidationSucceded = () => {
    setValidateState("success");
    validateMessage.value = "";
    formContext === null || formContext === void 0 ? void 0 : formContext.emits("validate", props.prop, true, "");
  };
  const doValidate = (rules) => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      const modelName = propString.value;
      const validator = new uni_modules_tuniaouiVue3_libs_asyncValidator_index.Schema({
        [modelName]: rules
      });
      return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
        onValidationSucceded();
        return true;
      }).catch((err) => {
        onValidationFailed(err);
        return Promise.reject(err);
      });
    });
  };
  const validate = (trigger, callback) => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      if (isResettingField || !props.prop)
        return false;
      const hasCallback = common_vendor.isFunction(callback);
      if (!validateEnabled.value) {
        callback === null || callback === void 0 ? void 0 : callback(false);
        return false;
      }
      const rules = getFilterRule(trigger);
      if (rules.length === 0) {
        callback === null || callback === void 0 ? void 0 : callback(true);
        return true;
      }
      setValidateState("validating");
      return doValidate(rules).then(() => {
        callback === null || callback === void 0 ? void 0 : callback(true);
        return true;
      }).catch((err) => {
        const fields = err.fields;
        callback === null || callback === void 0 ? void 0 : callback(false, fields);
        return hasCallback ? false : Promise.reject(fields);
      });
    });
  };
  const clearValidate = () => {
    setValidateState("");
    validateMessage.value = "";
    isResettingField = false;
  };
  const resetField = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      const model = formContext === null || formContext === void 0 ? void 0 : formContext.model;
      if (!model || !props.prop)
        return;
      const computedValue = uni_modules_tuniaouiVue3_utils_objects.getProp(model, props.prop);
      isResettingField = true;
      computedValue.value = uni_modules_tuniaouiVue3_utils_cloneDeep.cloneDeep(initialValue);
      yield common_vendor.nextTick$1();
      clearValidate();
      isResettingField = false;
    });
  };
  const initFieldValue = () => {
    initialValue = uni_modules_tuniaouiVue3_utils_cloneDeep.cloneDeep(fieldValue.value);
  };
  const validateStateDebouncedUpdater = uni_modules_tuniaouiVue3_libs_lodash_debounce.debounce(() => {
    validateStateDebounced.value = validateState.value;
  }, 100);
  common_vendor.watch(() => {
    return validateState.value;
  }, () => {
    return validateStateDebouncedUpdater();
  });
  common_vendor.watch(() => {
    return props.error;
  }, (val) => {
    validateMessage.value = val || "";
    setValidateState(val ? "error" : "");
  }, {
    immediate: true
  });
  common_vendor.watch(() => {
    return props.validateStatus;
  }, (val) => {
    setValidateState(val || "");
  });
  return {
    formContext,
    hasLabel,
    currentLabel,
    validateState,
    validateMessage,
    isRequired,
    shouldShowError,
    doValidate,
    validate,
    clearValidate,
    resetField,
    initFieldValue
  };
};
exports.useFormItemOperation = useFormItemOperation;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/form/src/composables/use-form-item-operation.js.map
