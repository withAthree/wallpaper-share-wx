"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../libs/lodash/is-number.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../base/composables/use-component-common-props/index.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../constants/event.js");
const uni_modules_tuniaouiVue3_components_input_src_composables_inputCustom = require("./src/composables/input-custom.js");
const uni_modules_tuniaouiVue3_components_input_src_composables_useInput = require("./src/composables/use-input.js");
const inputTypes = [
  "text",
  "number",
  "idcard",
  "digit",
  "textarea",
  "password",
  "select"
];
const inputConfirmTypes = [
  "",
  "send",
  "search",
  "next",
  "go",
  "done",
  "return"
];
const inputProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 绑定的值
   */
  modelValue: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  /**
   * @description 输入框尺寸
   */
  size: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useFormSizeProps,
  /**
   * @description 输入框高度
   */
  height: {
    type: [String, Number]
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
  /**
   * @description 输入框类型
   */
  type: {
    type: String,
    values: inputTypes,
    default: "text"
  },
  /**
   * @description 输入框占位文本
   */
  placeholder: String,
  /**
   * @description 文字对齐方式
   */
  textAlign: {
    type: String,
    values: ["left", "center", "right"],
    default: "left"
  },
  /**
   * @description 输入框占位文本的样式
   */
  placeholderStyle: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentCustomStyleProp,
  /**
   * @description 是否显示边框
   */
  border: {
    type: Boolean,
    default: true
  },
  /**
   * @description 边框颜色
   */
  borderColor: {
    type: String,
    default: "tn-gray-disabled"
  },
  /**
   * @description 下划线边框
   */
  underline: Boolean,
  /**
   * @description 自定义样式
   */
  customStyle: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentCustomStyleProp,
  /**
   * @description 自定义类名
   */
  customClass: String,
  /**
   * @description 最大可输入长度，设置为 -1 的时候不限制最大长度
   */
  maxlength: {
    type: Number,
    default: -1
  },
  /**
   * @description 根据内容自动调整高度，仅在 textarea 模式下生效，如果设置了 height 则优先级最高
   */
  autoHeight: {
    type: Boolean,
    default: true
  },
  /**
   * @description 设置键盘右下角按钮的文字，仅在使用系统键盘时生效
   */
  confirmType: {
    type: String,
    values: inputConfirmTypes,
    default: "done"
  },
  /**
   * @description 获取焦点
   */
  focus: Boolean,
  /**
   * @description 是否展示清除按钮
   */
  clearable: Boolean,
  /**
   * @description 是否显示切换密码显示/隐藏按钮，仅在 type="password" 时生效
   */
  showPassword: {
    type: Boolean,
    default: true
  },
  /**
   * @description 指定光标与键盘的距离，单位 px
   */
  cursorSpacing: {
    type: Number,
    default: 0
  },
  /**
   * @description 光标起始位置，自动聚集时有效，需与selection-end搭配使用
   */
  selectionStart: {
    type: Number,
    default: -1
  },
  /**
   * @description 光标结束位置，自动聚集时有效，需与selection-start搭配使用
   */
  selectionEnd: {
    type: Number,
    default: -1
  },
  /**
   * @description 是否展示键盘上方带有”完成“按钮那一栏
   */
  showConfirmBar: {
    type: Boolean,
    default: true
  },
  /**
   * @description 显示输入框右图标
   */
  rightIcon: String,
  /**
   * @description 自动去除两端空格
   */
  trim: {
    type: Boolean,
    default: true
  },
  /**
   * @description 显示字数统计，只有在 textarea 模式下且设置maxlength时生效
   */
  showWordLimit: {
    type: Boolean,
    default: false
  },
  /**
   * @description 字数统计文字颜色，以tn开头使用图鸟内置的颜色
   */
  wordLimitColor: String,
  /**
   * @description 输入时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const inputEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  /**
   * @description 输入框输入内容时触发
   */
  [uni_modules_tuniaouiVue3_constants_event.INPUT_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  /**
   * @description 输入框内容变化时触发
   */
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  /**
   * @description 输入框点击时触发
   */
  click: () => {
    return true;
  },
  /**
   * @description 输入框聚焦时触发
   */
  focus: (e) => {
    return common_vendor.isObject(e);
  },
  /**
   * @description 输入框失去焦点时触发
   */
  blur: (e) => {
    return common_vendor.isObject(e);
  },
  /**
   * @description 点击清除按钮时触发
   */
  clear: () => {
    return true;
  },
  /**
   * @description 点击键盘右下角按钮时触发
   */
  confirm: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  }
};
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "input",
  props: inputProps,
  emits: inputEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_input_src_composables_useInput.useInput(props, emits), inputText = _b.inputText, needStatusIcon = _b.needStatusIcon, validateState = _b.validateState, validateIcon = _b.validateIcon, passwordVisible = _b.passwordVisible, passwordIcon = _b.passwordIcon, showIcon = _b.showIcon, disabled = _b.disabled, showWordLimit = _b.showWordLimit, currentWordCount = _b.currentWordCount, togglePasswordVisible = _b.togglePasswordVisible, inputInputEvent = _b.inputInputEvent, inputFocusEvent = _b.inputFocusEvent, inputBlurEvent = _b.inputBlurEvent, clearClickEvent = _b.clearClickEvent, confirmEvent = _b.confirmEvent, inputClickEvent = _b.inputClickEvent;
    const _c = uni_modules_tuniaouiVue3_components_input_src_composables_inputCustom.useInputCustomStyle(props, validateState, disabled), ns = _c.ns, inputClass = _c.inputClass, inputStyle = _c.inputStyle, placeholderStyle = _c.placeholderStyle, wordLimitClass = _c.wordLimitClass, wordLimitStyle = _c.wordLimitStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.$slots.prefix
      }), _ctx.$slots.prefix ? new UTSJSONObject({
        b: common_vendor.n(common_vendor.unref(ns).em("slot", "left"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        c: _ctx.type === "textarea"
      }), _ctx.type === "textarea" ? new UTSJSONObject({
        d: common_vendor.n(common_vendor.unref(ns).e("base")),
        e: common_vendor.n(common_vendor.unref(ns).e("textarea")),
        f: common_vendor.n(common_vendor.unref(ns).is("custom-height", !!_ctx.height)),
        g: common_vendor.unref(inputText),
        h: _ctx.placeholder,
        i: common_vendor.unref(placeholderStyle),
        j: common_vendor.unref(disabled),
        k: _ctx.maxlength,
        l: _ctx.focus,
        m: _ctx.confirmType,
        n: !_ctx.height && _ctx.autoHeight,
        o: _ctx.selectionStart,
        p: _ctx.selectionEnd,
        q: _ctx.cursorSpacing,
        r: _ctx.showConfirmBar,
        s: common_vendor.o((...args) => {
          return common_vendor.unref(inputInputEvent) && common_vendor.unref(inputInputEvent)(...args);
        }),
        t: common_vendor.o((...args) => {
          return common_vendor.unref(inputFocusEvent) && common_vendor.unref(inputFocusEvent)(...args);
        }),
        v: common_vendor.o((...args) => {
          return common_vendor.unref(inputBlurEvent) && common_vendor.unref(inputBlurEvent)(...args);
        }),
        w: common_vendor.o((...args) => {
          return common_vendor.unref(confirmEvent) && common_vendor.unref(confirmEvent)(...args);
        })
      }) : new UTSJSONObject({
        x: common_vendor.n(common_vendor.unref(ns).e("base")),
        y: common_vendor.n(common_vendor.unref(ns).e("input")),
        z: common_vendor.n(common_vendor.unref(ns).em("input", _ctx.type)),
        A: _ctx.type === "password" || _ctx.type === "select" ? "text" : _ctx.type,
        B: common_vendor.unref(inputText),
        C: _ctx.placeholder,
        D: _ctx.type === "password" && !common_vendor.unref(passwordVisible),
        E: common_vendor.unref(placeholderStyle),
        F: common_vendor.unref(disabled) || _ctx.type === "select",
        G: _ctx.maxlength,
        H: _ctx.focus,
        I: _ctx.confirmType,
        J: _ctx.selectionStart,
        K: _ctx.selectionEnd,
        L: _ctx.cursorSpacing,
        M: _ctx.showConfirmBar,
        N: common_vendor.o((...args) => {
          return common_vendor.unref(inputInputEvent) && common_vendor.unref(inputInputEvent)(...args);
        }),
        O: common_vendor.o((...args) => {
          return common_vendor.unref(inputFocusEvent) && common_vendor.unref(inputFocusEvent)(...args);
        }),
        P: common_vendor.o((...args) => {
          return common_vendor.unref(inputBlurEvent) && common_vendor.unref(inputBlurEvent)(...args);
        }),
        Q: common_vendor.o((...args) => {
          return common_vendor.unref(confirmEvent) && common_vendor.unref(confirmEvent)(...args);
        })
      }), new UTSJSONObject({
        R: common_vendor.unref(showIcon)
      }), common_vendor.unref(showIcon) ? common_vendor.e(new UTSJSONObject({
        S: _ctx.rightIcon
      }), _ctx.rightIcon ? new UTSJSONObject({
        T: common_vendor.p(new UTSJSONObject({
          name: _ctx.rightIcon
        })),
        U: common_vendor.n(common_vendor.unref(ns).em("icon", "custom"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        V: _ctx.type === "password" && _ctx.showPassword
      }), _ctx.type === "password" && _ctx.showPassword ? new UTSJSONObject({
        W: common_vendor.p(new UTSJSONObject({
          name: common_vendor.unref(passwordIcon)
        })),
        X: common_vendor.n(common_vendor.unref(ns).em("icon", "password")),
        Y: common_vendor.o((...args) => {
          return common_vendor.unref(togglePasswordVisible) && common_vendor.unref(togglePasswordVisible)(...args);
        })
      }) : _ctx.clearable && common_vendor.unref(inputText) ? new UTSJSONObject({
        aa: common_vendor.p(new UTSJSONObject({
          name: "close"
        })),
        ab: common_vendor.n(common_vendor.unref(ns).em("icon", "clear")),
        ac: common_vendor.o((...args) => {
          return common_vendor.unref(clearClickEvent) && common_vendor.unref(clearClickEvent)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        Z: _ctx.clearable && common_vendor.unref(inputText),
        ad: common_vendor.unref(validateState) && common_vendor.unref(validateIcon) && common_vendor.unref(needStatusIcon)
      }), common_vendor.unref(validateState) && common_vendor.unref(validateIcon) && common_vendor.unref(needStatusIcon) ? new UTSJSONObject({
        ae: common_vendor.p(new UTSJSONObject({
          name: common_vendor.unref(validateIcon)
        })),
        af: common_vendor.n(common_vendor.unref(ns).em("icon", `validate-${common_vendor.unref(validateState)}`))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        ag: common_vendor.n(common_vendor.unref(ns).e("icon"))
      })) : new UTSJSONObject({}), new UTSJSONObject({
        ah: _ctx.$slots.suffix
      }), _ctx.$slots.suffix ? new UTSJSONObject({
        ai: common_vendor.n(common_vendor.unref(ns).em("slot", "right"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        aj: common_vendor.unref(showWordLimit)
      }), common_vendor.unref(showWordLimit) ? new UTSJSONObject({
        ak: common_vendor.t(common_vendor.unref(currentWordCount)),
        al: common_vendor.t(_ctx.maxlength),
        am: common_vendor.n(common_vendor.unref(wordLimitClass)),
        an: common_vendor.s(common_vendor.unref(wordLimitStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        ao: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        ap: common_vendor.n(common_vendor.unref(inputClass)),
        aq: common_vendor.n(`${_ctx.type === "textarea" ? common_vendor.unref(ns).m("textarea") : common_vendor.unref(ns).m("input")}`),
        ar: common_vendor.n(common_vendor.unref(ns).is("show-word-limit", common_vendor.unref(showWordLimit))),
        as: common_vendor.s(common_vendor.unref(inputStyle)),
        at: common_vendor.o((...args) => {
          return common_vendor.unref(inputClickEvent) && common_vendor.unref(inputClickEvent)(...args);
        })
      }));
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1d7e0215"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Component);
exports.Component = Component;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/input/index.js.map
