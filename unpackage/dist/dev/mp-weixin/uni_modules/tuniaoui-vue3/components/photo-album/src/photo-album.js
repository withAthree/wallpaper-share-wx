"use strict";
const uni_modules_tuniaouiVue3_constants_imgMode = require("../../../constants/img-mode.js");
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const photoAlbumProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 图片地址列表
   */
  data: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return [];
    }
  },
  /**
   * @description 最大允许显示图片的数量
   */
  max: {
    type: Number,
    default: 9
  },
  /**
   * @description 一行显示的图片数量
   */
  column: {
    type: Number,
    default: 3
  },
  /**
   * @description 图片模式
   */
  imgMode: {
    type: String,
    values: uni_modules_tuniaouiVue3_constants_imgMode.componentImgModes,
    default: "aspectFill"
  },
  /**
   * @description 是否开启懒加载
   */
  lazyLoad: {
    type: Boolean,
    default: true
  },
  /**
   * @description 点击图片进行预览
   */
  preview: {
    type: Boolean,
    default: true
  }
});
const photoAlbumEmits = {
  /**
   * @description 点击图片时触发
   */
  click: (index) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index);
  }
};
exports.photoAlbumEmits = photoAlbumEmits;
exports.photoAlbumProps = photoAlbumProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/photo-album/src/photo-album.js.map
