"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_tokens_form = require("../../tokens/form.js");
const uni_modules_tuniaouiVue3_components_form_src_form = require("./src/form.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_formCustom = require("./src/composables/form-custom.js");
require("../../hooks/use-z-index/index.js");
require("../../libs/async-validator/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useForm = require("./src/composables/use-form.js");
const uni_modules_tuniaouiVue3_components_form_src_formItem = require("./src/form-item.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_formItemCustom = require("./src/composables/form-item-custom.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps = require("./src/composables/use-form-common-props.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItemOperation = require("./src/composables/use-form-item-operation.js");
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "form",
  props: uni_modules_tuniaouiVue3_components_form_src_form.formProps,
  emits: uni_modules_tuniaouiVue3_components_form_src_form.formEmits,
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const formClass = uni_modules_tuniaouiVue3_components_form_src_composables_formCustom.useFormCustomStyle().formClass;
    const _b = uni_modules_tuniaouiVue3_components_form_src_composables_useForm.useForm(props), addField = _b.addField, removeField = _b.removeField, resetFields = _b.resetFields, clearValidate = _b.clearValidate, validate = _b.validate, validateField = _b.validateField;
    common_vendor.watch(() => {
      return props.rules;
    }, () => {
      if (props.validateOnRuleChange)
        validate();
    }, {
      deep: true
    });
    common_vendor.provide(uni_modules_tuniaouiVue3_tokens_form.formContextKey, common_vendor.reactive(new UTSJSONObject(Object.assign(Object.assign({}, common_vendor.toRefs(props)), {
      emits,
      resetFields,
      clearValidate,
      validateField,
      addField,
      removeField
    }))));
    __expose(new UTSJSONObject({
      /**
       * @description 对整个表单的内容进行验证。 接收一个回调函数或返回Promise
       */
      validate,
      /**
       * @description 验证具体的某个字段
       */
      validateField,
      /**
       * @description 重置表单
       */
      resetFields,
      /**
       * @description 清除表单验证
       */
      clearValidate
    }));
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        b: common_vendor.n(common_vendor.unref(formClass))
      };
      return __returned__;
    };
  }
});
const Form = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-ebf51555"]]);
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "form-item",
  props: uni_modules_tuniaouiVue3_components_form_src_formItem.formItemProps,
  setup(__props, _a) {
    var __expose = _a.expose;
    const props = __props;
    const slots = common_vendor.useSlots();
    const _b = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItemOperation.useFormItemOperation(props, slots), formContext = _b.formContext, validateState = _b.validateState, validateMessage = _b.validateMessage, hasLabel = _b.hasLabel, currentLabel = _b.currentLabel, shouldShowError = _b.shouldShowError, isRequired = _b.isRequired, resetField = _b.resetField, clearValidate = _b.clearValidate, validate = _b.validate, initFieldValue = _b.initFieldValue;
    const _c = uni_modules_tuniaouiVue3_components_form_src_composables_formItemCustom.useFormItemCustomStyle(props, hasLabel, isRequired), formItemNs = _c.ns, labelId = _c.labelId, formItemClass = _c.formItemClass, formItemLabelClass = _c.formItemLabelClass, formItemLabelStyle = _c.formItemLabelStyle, formItemErrorMessageStyle = _c.formItemErrorMessageStyle, initLabelContainerWidth = _c.initLabelContainerWidth;
    const _size = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormSize(void 0, { formItem: false });
    const context = common_vendor.reactive(new UTSJSONObject(Object.assign(Object.assign({}, common_vendor.toRefs(props)), {
      size: _size,
      validateState,
      hasLabel,
      resetField,
      clearValidate,
      validate
    })));
    common_vendor.onMounted(() => {
      if (props.prop) {
        formContext === null || formContext === void 0 ? void 0 : formContext.addField(context);
        initFieldValue();
      }
      common_vendor.nextTick$1(() => {
        initLabelContainerWidth();
      });
    });
    common_vendor.onBeforeUnmount(() => {
      formContext === null || formContext === void 0 ? void 0 : formContext.removeField(context);
    });
    common_vendor.provide(uni_modules_tuniaouiVue3_tokens_form.formItemContextKey, context);
    __expose(new UTSJSONObject({
      /**
       * @description 表单尺寸
       */
      size: _size,
      /**
       * @description 校验信息
       */
      validateMessage,
      /**
       * @description 校验状态
       */
      validateState,
      /**
       * @description 对表单Item的内容进行验证。 接收一个回调函数或返回Promise
       */
      validate,
      /**
       * @description 重置当前字段信息
       */
      resetField,
      /**
       * @description 清除表单字段验证
       */
      clearValidate
    }));
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.unref(hasLabel)
      }), common_vendor.unref(hasLabel) ? new UTSJSONObject({
        b: common_vendor.t(common_vendor.unref(currentLabel)),
        c: common_vendor.sei(common_vendor.unref(labelId), "view"),
        d: common_vendor.n(common_vendor.unref(formItemLabelClass)),
        e: common_vendor.s(common_vendor.unref(formItemLabelStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        f: common_vendor.n(common_vendor.unref(formItemNs).e("content")),
        g: common_vendor.n(common_vendor.unref(formItemNs).e("wrapper")),
        h: common_vendor.unref(shouldShowError)
      }), common_vendor.unref(shouldShowError) ? new UTSJSONObject({
        i: common_vendor.t(common_vendor.unref(validateMessage)),
        j: common_vendor.n(common_vendor.unref(formItemNs).e("error-message")),
        k: common_vendor.s(common_vendor.unref(formItemErrorMessageStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        m: common_vendor.n(common_vendor.unref(formItemClass))
      }));
      return __returned__;
    };
  }
});
const FormItem = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9bb1a075"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Form, {
  FormItem
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(FormItem);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/form/index.js.map
