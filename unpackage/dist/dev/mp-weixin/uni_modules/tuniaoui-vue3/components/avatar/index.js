"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_avatar_src_avatar = require("./src/avatar.js");
const uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatarIconProps = require("./src/composables/use-avatar-icon-props.js");
const uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatarProps = require("./src/composables/use-avatar-props.js");
const uni_modules_tuniaouiVue3_components_avatar_src_composables_avatarCustom = require("./src/composables/avatar-custom.js");
const uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatar = require("./src/composables/use-avatar.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatarBadgeProps = require("./src/composables/use-avatar-badge-props.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_components_avatar_src_avatarGroup = require("./src/avatar-group.js");
const uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatarGroup = require("./src/composables/use-avatar-group.js");
if (!Math) {
  (TnIcon + TnBadge)();
}
const TnIcon = () => "../icon/src/icon.js";
const TnBadge = () => "../badge/src/badge.js";
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "avatar",
  props: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps,
  emits: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatar.useAvatar(props, emits), componentId = _b.componentId, avatarGroupIndex = _b.avatarGroupIndex, avatarWidth = _b.avatarWidth, avatarClick = _b.avatarClick;
    const _c = uni_modules_tuniaouiVue3_components_avatar_src_composables_avatarCustom.useAvatarCustomStyle(props, avatarGroupIndex, avatarWidth), ns = _c.ns, avatarClass = _c.avatarClass, avatarStyle = _c.avatarStyle;
    const imgMode = uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatarProps.useAvatarProps(props).imgMode;
    const _d = uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatarIconProps.useAvatarIconConfig(props.iconConfig), iconSize = _d.iconSize, iconColor = _d.iconColor, iconBold = _d.iconBold;
    const badgeConfig = uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatarBadgeProps.useAvatarBadgeProps(props).badgeConfig;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.url
      }), _ctx.url ? new UTSJSONObject({
        b: _ctx.url,
        c: common_vendor.unref(imgMode),
        d: common_vendor.n(common_vendor.unref(ns).e("image"))
      }) : _ctx.icon ? new UTSJSONObject({
        f: common_vendor.p(new UTSJSONObject({
          name: _ctx.icon,
          color: common_vendor.unref(iconColor),
          size: common_vendor.unref(iconSize),
          bold: common_vendor.unref(iconBold)
        })),
        g: common_vendor.n(common_vendor.unref(ns).e("icon"))
      }) : new UTSJSONObject({
        h: common_vendor.n(common_vendor.unref(ns).e("custom"))
      }), new UTSJSONObject({
        e: _ctx.icon,
        i: common_vendor.p(new UTSJSONObject(Object.assign({}, common_vendor.unref(badgeConfig)))),
        j: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
        k: common_vendor.n(common_vendor.unref(avatarClass)),
        l: common_vendor.s(common_vendor.unref(avatarStyle)),
        m: common_vendor.o((...args) => {
          return common_vendor.unref(avatarClick) && common_vendor.unref(avatarClick)(...args);
        })
      }));
      return __returned__;
    };
  }
});
const Avatar = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-aba3476d"]]);
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "avatar-group",
  props: uni_modules_tuniaouiVue3_components_avatar_src_avatarGroup.avatarGroupProps,
  emits: uni_modules_tuniaouiVue3_components_avatar_src_avatarGroup.avatarGroupEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("avatar");
    uni_modules_tuniaouiVue3_components_avatar_src_composables_useAvatarGroup.useAvatarGroup(props, emits);
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        b: common_vendor.n(`${common_vendor.unref(ns).b("group")}`)
      };
      return __returned__;
    };
  }
});
const AvatarGroup = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6783c2b3"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Avatar, {
  AvatarGroup
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(AvatarGroup);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/avatar/index.js.map
