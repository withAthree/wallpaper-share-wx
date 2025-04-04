"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_swipeAction = require("../../../../tokens/swipe-action.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index = require("../../../../hooks/use-ordered-children/index.js");
const useSwipeAction = (props, emits) => {
  const _a = uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index.useOrderedChildren(), items = _a.children, addItem = _a.addChild, removeItem = _a.removeChild;
  const activeUid = common_vendor.ref([]);
  const setActiveItem = (uid) => {
    const itemIndex = items.value.findIndex((item) => {
      return item.uid === uid;
    });
    const index = activeUid.value.indexOf(uid);
    if (props.exclusive) {
      activeUid.value = index !== -1 ? [] : [uid];
    } else {
      if (index !== -1) {
        activeUid.value.splice(index, 1);
      } else {
        activeUid.value.push(uid);
      }
    }
    emits("open", itemIndex);
  };
  const closeAllItemOption = () => {
    activeUid.value = [];
  };
  const optionClick = (uid, optionIndex) => {
    const itemIndex = items.value.findIndex((item) => {
      return item.uid === uid;
    });
    emits("select", itemIndex, optionIndex);
  };
  common_vendor.provide(uni_modules_tuniaouiVue3_tokens_swipeAction.swipeActionContextKey, common_vendor.reactive(Object.assign(Object.assign({}, common_vendor.toRefs(props)), {
    items,
    addItem,
    removeItem,
    activeUid,
    setActiveItem,
    closeAllItemOption,
    optionClick
  })));
};
exports.useSwipeAction = useSwipeAction;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/swipe-action/src/composables/use-swipe-action.js.map
