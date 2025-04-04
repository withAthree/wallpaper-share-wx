"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_indexList_src_indexList = require("./src/index-list.js");
const uni_modules_tuniaouiVue3_components_indexList_src_composables_indexListCustom = require("./src/composables/index-list-custom.js");
const uni_modules_tuniaouiVue3_components_indexList_src_composables_useIndexList = require("./src/composables/use-index-list.js");
if (!Math) {
  TnSticky();
}
const TnSticky = () => "../sticky/src/sticky.js";
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "index-list", props: uni_modules_tuniaouiVue3_components_indexList_src_indexList.indexListProps, emits: uni_modules_tuniaouiVue3_components_indexList_src_indexList.indexListEmits, setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emits = __emit;
  const _b = uni_modules_tuniaouiVue3_components_indexList_src_composables_useIndexList.useIndexList(props, emits), componentContentClass = _b.componentContentClass, contentContainerHeight = _b.contentContainerHeight, keysData = _b.keysData, listData = _b.listData, scrollViewTopValue = _b.scrollViewTopValue, componentKeyListId = _b.componentKeyListId, keyListTipsTopValue = _b.keyListTipsTopValue, currentTouchKeyIndex = _b.currentTouchKeyIndex, currentTouchKeyValue = _b.currentTouchKeyValue, onKeyListTouchStart = _b.onKeyListTouchStart, onKeyListTouchMove = _b.onKeyListTouchMove, onKeyListTouchEnd = _b.onKeyListTouchEnd;
  const _c = uni_modules_tuniaouiVue3_components_indexList_src_composables_indexListCustom.useIndexListCustomStyle(props), ns = _c.ns, titleClass = _c.titleClass, titleStyle = _c.titleStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = common_vendor.e(new UTSJSONObject({
      a: common_vendor.f(common_vendor.unref(listData), (item = null, index = null, i0 = null) => {
        return new UTSJSONObject({
          a: common_vendor.t(item.title),
          b: "be55a938-0-" + i0,
          c: common_vendor.f(item.data, (dataItem = null, dataIndex = null, i1 = null) => {
            return new UTSJSONObject({
              a: "d-" + i0 + "-" + i1,
              b: common_vendor.r("d", new UTSJSONObject({
                data: dataItem
              }), i0 + "-" + i1),
              c: dataIndex
            });
          }),
          d: index
        });
      }),
      b: common_vendor.n(common_vendor.unref(titleClass)),
      c: common_vendor.s(common_vendor.unref(titleStyle)),
      d: common_vendor.p(new UTSJSONObject({
        ["offset-top"]: _ctx.stickyOffsetTop
      })),
      e: common_vendor.n(common_vendor.unref(ns).e("content-item")),
      f: common_vendor.n(common_vendor.unref(ns).e("content")),
      g: common_vendor.n(common_vendor.unref(componentContentClass)),
      h: `${_ctx.stickyOffsetTop || 0}px`,
      i: common_vendor.n(common_vendor.unref(ns).e("scroll-view")),
      j: common_vendor.unref(scrollViewTopValue),
      k: _ctx.showKeysList
    }), _ctx.showKeysList ? common_vendor.e(new UTSJSONObject({
      l: common_vendor.f(common_vendor.unref(keysData), (item = null, index = null, i0 = null) => {
        return new UTSJSONObject({
          a: common_vendor.t(item),
          b: index
        });
      }),
      m: common_vendor.n(common_vendor.unref(ns).e("key-list-value")),
      n: common_vendor.unref(currentTouchKeyIndex) !== -1
    }), common_vendor.unref(currentTouchKeyIndex) !== -1 ? new UTSJSONObject({
      o: common_vendor.t(common_vendor.unref(currentTouchKeyValue)),
      p: common_vendor.n(common_vendor.unref(ns).e("key-list-tips-value")),
      q: `${common_vendor.unref(keyListTipsTopValue)}px`
    }) : new UTSJSONObject({}), new UTSJSONObject({
      r: common_vendor.sei(common_vendor.unref(componentKeyListId), "view"),
      s: common_vendor.n(common_vendor.unref(ns).e("key-list")),
      t: common_vendor.o((...args) => {
        return common_vendor.unref(onKeyListTouchStart) && common_vendor.unref(onKeyListTouchStart)(...args);
      }),
      v: common_vendor.o((...args) => {
        return common_vendor.unref(onKeyListTouchMove) && common_vendor.unref(onKeyListTouchMove)(...args);
      }),
      w: common_vendor.o((...args) => {
        return common_vendor.unref(onKeyListTouchEnd) && common_vendor.unref(onKeyListTouchEnd)(...args);
      })
    })) : new UTSJSONObject({}), new UTSJSONObject({
      x: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      y: common_vendor.n(common_vendor.unref(ns).b()),
      z: `${common_vendor.unref(contentContainerHeight)}px`
    }));
    return __returned__;
  };
} }));
const IndexList = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-be55a938"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(IndexList);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/index-list/index.js.map
