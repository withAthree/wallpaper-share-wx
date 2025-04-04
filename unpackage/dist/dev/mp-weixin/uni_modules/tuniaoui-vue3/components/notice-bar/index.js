"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_noticeBar_src_noticeBar = require("./src/notice-bar.js");
const uni_modules_tuniaouiVue3_components_noticeBar_src_composables_noticeBarCommonProps = require("./src/composables/notice-bar-common-props.js");
const uni_modules_tuniaouiVue3_components_noticeBar_src_composables_useNoticeBar = require("./src/composables/use-notice-bar.js");
if (!Math) {
  (TnIcon + TnColumnNoticeBar + TnRowNoticeBar)();
}
const TnIcon = () => "../icon/src/icon.js";
const TnColumnNoticeBar = () => "./src/column-notice-bar.js";
const TnRowNoticeBar = () => "./src/row-notice-bar.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "notice-bar",
  props: uni_modules_tuniaouiVue3_components_noticeBar_src_noticeBar.noticeBarProps,
  emits: uni_modules_tuniaouiVue3_components_noticeBar_src_noticeBar.noticeBarEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("notice-bar");
    const _b = uni_modules_tuniaouiVue3_components_noticeBar_src_composables_useNoticeBar.useNoticeBar(props, emits), showNoticeBar = _b.showNoticeBar, leftIconClick = _b.leftIconClick, rightIconClick = _b.rightIconClick;
    const _c = uni_modules_tuniaouiVue3_components_noticeBar_src_composables_noticeBarCommonProps.useNoticeBarCommonProps(props), commonClass = _c.commonClass, commonStyle = _c.commonStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.unref(showNoticeBar)
      }), common_vendor.unref(showNoticeBar) ? common_vendor.e(new UTSJSONObject({
        b: _ctx.leftIcon
      }), _ctx.leftIcon ? new UTSJSONObject({
        c: common_vendor.p(new UTSJSONObject({
          name: _ctx.leftIcon
        })),
        d: common_vendor.n(common_vendor.unref(ns).e("left-icon")),
        e: common_vendor.n(common_vendor.unref(commonClass)("leftIcon")),
        f: common_vendor.s(common_vendor.unref(commonStyle)("leftIcon")),
        g: common_vendor.o((...args) => {
          return common_vendor.unref(leftIconClick) && common_vendor.unref(leftIconClick)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        h: _ctx.direction === "vertical" || _ctx.direction === "horizontal" && !_ctx.loop
      }), _ctx.direction === "vertical" || _ctx.direction === "horizontal" && !_ctx.loop ? new UTSJSONObject({}) : new UTSJSONObject({}), new UTSJSONObject({
        i: common_vendor.n(common_vendor.unref(ns).e("content")),
        j: _ctx.rightIcon
      }), _ctx.rightIcon ? new UTSJSONObject({
        k: common_vendor.p(new UTSJSONObject({
          name: _ctx.rightIcon
        })),
        l: common_vendor.n(common_vendor.unref(ns).e("right-icon")),
        m: common_vendor.n(common_vendor.unref(commonClass)("rightIcon")),
        n: common_vendor.s(common_vendor.unref(commonStyle)("rightIcon")),
        o: common_vendor.o((...args) => {
          return common_vendor.unref(rightIconClick) && common_vendor.unref(rightIconClick)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        p: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        q: common_vendor.n(common_vendor.unref(ns).b()),
        r: common_vendor.n(common_vendor.unref(commonClass)("normal")),
        s: common_vendor.s(common_vendor.unref(commonStyle)("normal"))
      })) : new UTSJSONObject({}));
      return __returned__;
    };
  }
});
const NoticeBar = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9e6b003f"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(NoticeBar);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notice-bar/index.js.map
