"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const imageExtensions = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "webp",
  "ico"
];
const imageUploadProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 已上传的图片列表绑定值，传递的是图片的url地址
   */
  modelValue: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return [];
    }
  },
  /**
   * @description 禁止上传
   */
  disabled: Boolean,
  /**
   * @description 图片上传地址
   */
  action: String,
  /**
   * @description 图片上传的字段名称
   */
  name: {
    type: String,
    default: "file"
  },
  /**
   * @description 图片上传的header, header 中不能设置 Referer
   */
  header: {
    type: Object,
    default: () => {
      return {};
    }
  },
  /**
   * @description 图片上传HTTP 请求中其他额外的 form data
   */
  formData: {
    type: Object,
    default: () => {
      return {};
    }
  },
  /**
   * @description 最大允许上传个数
   */
  limit: {
    type: Number,
    default: 9
  },
  /**
   * @description 自动上传
   */
  autoUpload: {
    type: Boolean,
    default: true
  },
  /**
   * @description 显示删除按钮
   */
  showRemove: {
    type: Boolean,
    default: true
  },
  /**
   * @description 显示错误提示信息
   */
  showErrorTips: {
    type: Boolean,
    default: true
  },
  /**
   * @description 显示上传进度条
   */
  showUploadProgress: {
    type: Boolean,
    default: true
  },
  /**
   * @description 上传图片的SizeType
   */
  sizeType: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return ["original", "compressed"];
    }
  },
  /**
   * @description 上传图片的来源
   */
  sourceType: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return ["album", "camera"];
    }
  },
  /**
   * @description 允许多选图片
   */
  multiple: {
    type: Boolean,
    default: true
  },
  /**
   * @description 允许上传的最大图片大小，单位为byte
   */
  maxSize: {
    type: Number,
    default: 10 * 1024 * 1024
  },
  /**
   * @description 允许上传的图片类型
   */
  extensions: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return imageExtensions;
    }
  },
  /**
   * @description 自动移除上传失败的图片
   */
  autoRemoveFaildFile: {
    type: Boolean,
    default: false
  },
  /**
   * @description 自定义上传函数
   */
  customUploadHandler: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Function)
  },
  /**
   * @description 自定义上传回调处理函数
   */
  customUploadCallback: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Function)
  },
  /**
   * @description 上传前的钩子函数
   */
  beforeUpload: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Function)
  },
  /**
   * @description 删除前的钩子函数
   */
  beforeRemove: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Function)
  },
  /**
   * @description 值发生修改时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const imageUploadEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isArray(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isArray(value);
  },
  /**
   * @description 图片超过最大尺寸或者文件不支持时触发
   */
  oversizeOrNoSupport: (file) => {
    return true;
  },
  /**
   * @description 图片上传成功回调
   */
  success: (file) => {
    return true;
  },
  /**
   * @description 图片上传失败回调
   */
  fail: (error, file) => {
    return true;
  },
  /**
   * @description 图片删除成功回调
   */
  remove: (url) => {
    return true;
  },
  /**
   * @description 图片预览回调
   */
  preview: (url) => {
    return true;
  }
};
exports.imageUploadEmits = imageUploadEmits;
exports.imageUploadProps = imageUploadProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/image-upload/src/image-upload.js.map
