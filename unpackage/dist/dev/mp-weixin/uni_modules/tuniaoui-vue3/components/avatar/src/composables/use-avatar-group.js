"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_avatar = require("../../../../tokens/avatar.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index = require("../../../../hooks/use-ordered-children/index.js");
const useAvatarGroup = (props, emits) => {
  const _a = uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index.useOrderedChildren(), avatarItems = _a.children, addItem = _a.addChild, removeItem = _a.removeChild;
  const handleItemClick = (uid) => {
    const index = avatarItems.value.findIndex((item) => {
      return item.uid === uid;
    });
    emits("click", index);
  };
  common_vendor.provide(uni_modules_tuniaouiVue3_tokens_avatar.avatarGroupContextKey, common_vendor.reactive(Object.assign(Object.assign({}, common_vendor.toRefs(props)), {
    avatarItems,
    addItem,
    removeItem,
    handleItemClick
  })));
};
exports.useAvatarGroup = useAvatarGroup;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/avatar/src/composables/use-avatar-group.js.map
