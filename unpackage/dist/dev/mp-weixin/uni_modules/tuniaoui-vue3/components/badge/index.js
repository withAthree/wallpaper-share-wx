"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../base/composables/use-component-common-props/index.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_constants_types = require("../../constants/types.js");
const uni_modules_tuniaouiVue3_components_badge_src_composables_badgeCustom = require("./src/composables/badge-custom.js");
const uni_modules_tuniaouiVue3_components_badge_src_composables_useBadge = require("./src/composables/use-badge.js");
const badgeProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 徽标内容，可以是数字或者字符串，当为数字时，超过max会显示{max}+，以icon-开头则显示图标
   */
  value: {
    type: [String, Number]
  },
  /**
   * @description 徽标内容最大值，在value为number时有效，超过最大值会显示{max}+
   */
  max: {
    type: [String, Number]
  },
  /**
   * @description 徽标颜色类型
   */
  type: {
    type: String,
    values: uni_modules_tuniaouiVue3_constants_types.componentTypes,
    default: "primary"
  },
  /**
   * @description 徽标背景颜色, 以tn开头则使用图鸟内置的颜色
   */
  bgColor: String,
  /**
   * @description 徽标文字颜色, 以tn开头则使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 徽标大小
   */
  size: {
    type: [String, Number]
  },
  /**
   * @description 字体大小
   */
  fontSize: {
    type: [String, Number]
  },
  /**
   * @description 徽标加粗
   */
  bold: Boolean,
  /**
   * @description 自定义徽标样式
   */
  customStyle: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentCustomStyleProp,
  /**
   * @description 自定义徽标类
   */
  customClass: String,
  /**
   * @description 是否显示点徽标
   */
  dot: Boolean,
  /**
   * @description 是否绝对定位徽标
   */
  absolute: {
    type: Boolean,
    default: true
  },
  /**
   * @description 绝对定位的位置
   */
  absolutePosition: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Object),
    default: () => {
      return {};
    }
  },
  /**
   * @description 绝对居中对齐
   */
  absoluteCenter: {
    type: Boolean,
    default: true
  },
  /**
   * @description 点击标识
   */
  index: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentIndexProp
});
const badgeEmits = {
  /**
   * @description 点击事件
   */
  click: (index) => {
    return typeof index === "number" || typeof index === "string";
  }
};
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "badge",
  props: badgeProps,
  emits: badgeEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const slots = common_vendor.useSlots();
    const _b = uni_modules_tuniaouiVue3_components_badge_src_composables_badgeCustom.useBadgeCustomStyle(props), ns = _b.ns, contentNs = _b.contentNs, badgeContentClass = _b.badgeContentClass, badgeContentStyle = _b.badgeContentStyle;
    const _c = uni_modules_tuniaouiVue3_components_badge_src_composables_useBadge.useBadge(props, emits), showBadge = _c.showBadge, contentType = _c.contentType, content = _c.content, badgeClick = _c.badgeClick;
    const badgeClass = common_vendor.computed(() => {
      const cls = [];
      cls.push(ns.b());
      if (!(slots === null || slots === void 0 ? void 0 : slots.default)) {
        if (props.absolute) {
          cls.push(ns.e("absolute"));
          if (props.absoluteCenter)
            cls.push(ns.em("absolute", "center"));
        }
      }
      return cls.join(" ");
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.unref(showBadge)
      }), common_vendor.unref(showBadge) ? common_vendor.e(new UTSJSONObject({
        b: common_vendor.unref(content)
      }), common_vendor.unref(content) ? common_vendor.e(new UTSJSONObject({
        c: common_vendor.unref(contentType) === "icon"
      }), common_vendor.unref(contentType) === "icon" ? new UTSJSONObject({
        d: common_vendor.p(new UTSJSONObject({
          name: common_vendor.unref(content)
        }))
      }) : new UTSJSONObject({
        e: common_vendor.t(common_vendor.unref(content)),
        f: common_vendor.n(`${common_vendor.unref(contentNs).e("data")}`)
      })) : new UTSJSONObject({}), new UTSJSONObject({
        g: common_vendor.n(common_vendor.unref(badgeContentClass)),
        h: common_vendor.s(common_vendor.unref(badgeContentStyle)),
        i: common_vendor.o((...args) => {
          return common_vendor.unref(badgeClick) && common_vendor.unref(badgeClick)(...args);
        })
      })) : new UTSJSONObject({}), new UTSJSONObject({
        j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        k: common_vendor.n(badgeClass.value)
      }));
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6e3ab0bd"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Component);
exports.Component = Component;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/badge/index.js.map
