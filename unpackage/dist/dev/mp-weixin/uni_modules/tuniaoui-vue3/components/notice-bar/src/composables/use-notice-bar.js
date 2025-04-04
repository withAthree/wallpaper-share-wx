"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_noticeBar = require("../../../../tokens/notice-bar.js");
const useNoticeBar = (props, emits) => {
  const showNoticeBar = common_vendor.computed(() => {
    return props.show && !(props.autoHide && props.data.length === 0);
  });
  const play = common_vendor.computed(() => {
    return !props.pause;
  });
  const click = (index) => {
    emits("click", index);
  };
  const leftIconClick = () => {
    emits("left-icon-click");
  };
  const rightIconClick = () => {
    emits("right-icon-click");
  };
  common_vendor.provide(uni_modules_tuniaouiVue3_tokens_noticeBar.noticeBarKey, common_vendor.reactive(Object.assign(Object.assign({}, common_vendor.toRefs(props)), {
    play,
    click
  })));
  return {
    showNoticeBar,
    leftIconClick,
    rightIconClick
  };
};
exports.useNoticeBar = useNoticeBar;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notice-bar/src/composables/use-notice-bar.js.map
