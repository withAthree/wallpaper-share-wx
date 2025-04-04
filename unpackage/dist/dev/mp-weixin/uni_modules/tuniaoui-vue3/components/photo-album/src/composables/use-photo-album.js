"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const usePhotoAlbum = (props, emits) => {
  const imageData = common_vendor.computed(() => {
    const maxLength = Math.min(props.data.length, props.max);
    return props.data.slice(0, maxLength);
  });
  const imageClickEvent = (index) => {
    emits("click", index);
    if (!props.preview)
      return;
    common_vendor.index.previewImage({
      urls: imageData.value,
      current: index
    });
  };
  return {
    imageData,
    imageClickEvent
  };
};
exports.usePhotoAlbum = usePhotoAlbum;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/photo-album/src/composables/use-photo-album.js.map
