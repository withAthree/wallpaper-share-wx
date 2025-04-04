"use strict";
const useTag = (props, emits) => {
  const tagClickHandle = () => {
    emits("click");
  };
  return {
    tagClickHandle
  };
};
exports.useTag = useTag;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tag/src/composables/use-tag.js.map
