"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_searchBox_src_searchBox = require("./src/search-box.js");
const uni_modules_tuniaouiVue3_components_searchBox_src_composables_searchBoxCustom = require("./src/composables/search-box-custom.js");
const uni_modules_tuniaouiVue3_components_searchBox_src_composables_useSearchBox = require("./src/composables/use-search-box.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search-box",
  props: uni_modules_tuniaouiVue3_components_searchBox_src_searchBox.searchBoxProps,
  emits: uni_modules_tuniaouiVue3_components_searchBox_src_searchBox.searchBoxEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_searchBox_src_composables_useSearchBox.useSearchBox(props, emits), showPlaceholder = _b.showPlaceholder, inputValue = _b.inputValue, inputFocus = _b.inputFocus, searchBoxClickEvent = _b.searchBoxClickEvent, inputFocusEvent = _b.inputFocusEvent, inputBlurEvent = _b.inputBlurEvent, inputValueEvent = _b.inputValueEvent, clearClickEvent = _b.clearClickEvent, searchBtnClickEvent = _b.searchBtnClickEvent;
    const _c = uni_modules_tuniaouiVue3_components_searchBox_src_composables_searchBoxCustom.useSearchBoxCustomStyle(props), ns = _c.ns, searchBoxClass = _c.searchBoxClass, searchBoxStyle = _c.searchBoxStyle, placeholderClass = _c.placeholderClass, placeholderStyle = _c.placeholderStyle, searchButtonClass = _c.searchButtonClass, searchButtonStyle = _c.searchButtonStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.unref(showPlaceholder)
      }), common_vendor.unref(showPlaceholder) ? common_vendor.e(new UTSJSONObject({
        b: _ctx.placeholderIcon
      }), _ctx.placeholderIcon ? new UTSJSONObject({
        c: common_vendor.p(new UTSJSONObject({
          name: _ctx.placeholderIcon
        })),
        d: common_vendor.n(common_vendor.unref(ns).e("placeholder-icon"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        e: _ctx.placeholder
      }), _ctx.placeholder ? new UTSJSONObject({
        f: common_vendor.t(_ctx.placeholder),
        g: common_vendor.n(common_vendor.unref(ns).e("placeholder-text"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        h: common_vendor.n(common_vendor.unref(placeholderClass)),
        i: common_vendor.s(common_vendor.unref(placeholderStyle))
      })) : common_vendor.e(new UTSJSONObject({
        j: common_vendor.n(common_vendor.unref(ns).e("input")),
        k: common_vendor.n(common_vendor.unref(ns).em("input", _ctx.textAlign)),
        l: common_vendor.unref(inputFocus),
        m: common_vendor.o((...args) => {
          return common_vendor.unref(inputFocusEvent) && common_vendor.unref(inputFocusEvent)(...args);
        }),
        n: common_vendor.o((...args) => {
          return common_vendor.unref(inputBlurEvent) && common_vendor.unref(inputBlurEvent)(...args);
        }),
        o: common_vendor.o([($event = null) => {
          return common_vendor.isRef(inputValue) ? inputValue.value = $event.detail.value : null;
        }, (...args) => {
          return common_vendor.unref(inputValueEvent) && common_vendor.unref(inputValueEvent)(...args);
        }]),
        p: common_vendor.o((...args) => {
          return common_vendor.unref(searchBtnClickEvent) && common_vendor.unref(searchBtnClickEvent)(...args);
        }),
        q: common_vendor.unref(inputValue),
        r: _ctx.clearable && common_vendor.unref(inputValue)
      }), _ctx.clearable && common_vendor.unref(inputValue) ? new UTSJSONObject({
        s: common_vendor.p(new UTSJSONObject({
          name: "close-fill"
        })),
        t: common_vendor.n(common_vendor.unref(ns).e("clear-button")),
        v: common_vendor.o((...args) => {
          return common_vendor.unref(clearClickEvent) && common_vendor.unref(clearClickEvent)(...args);
        })
      }) : new UTSJSONObject({})), new UTSJSONObject({
        w: common_vendor.n(common_vendor.unref(ns).e("content")),
        x: _ctx.searchButton
      }), _ctx.searchButton ? new UTSJSONObject({
        y: common_vendor.t(_ctx.searchButtonText),
        z: common_vendor.n(common_vendor.unref(searchButtonClass)),
        A: common_vendor.s(common_vendor.unref(searchButtonStyle)),
        B: common_vendor.o((...args) => {
          return common_vendor.unref(searchBtnClickEvent) && common_vendor.unref(searchBtnClickEvent)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        C: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        D: common_vendor.n(common_vendor.unref(searchBoxClass)),
        E: common_vendor.s(common_vendor.unref(searchBoxStyle)),
        F: common_vendor.o((...args) => {
          return common_vendor.unref(searchBoxClickEvent) && common_vendor.unref(searchBoxClickEvent)(...args);
        })
      }));
      return __returned__;
    };
  }
});
const SearchBox = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d40686ce"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(SearchBox);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/search-box/index.js.map
