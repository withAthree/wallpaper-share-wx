"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const swiperIndicatorPosition = [
  "left-top",
  "center-top",
  "right-top",
  "left-bottom",
  "center-bottom",
  "right-bottom"
];
const swiperIndicatorType = ["line", "dot", "number"];
const swiperProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 当前选中item的索引值
   */
  modelValue: {
    type: Number,
    default: 0
  },
  /**
   * @description swiper数据源
   */
  data: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: []
  },
  /**
   * @description 空白swiper的数量，如果设置了data则以data的数据为准
   */
  blankCount: Number,
  /**
   * @description 轮播图的宽度，默认单位rpx
   */
  width: String,
  /**
   * @description 轮播图的高度，默认单位rpx
   */
  height: String,
  /**
   * @description 是否自动播放
   */
  autoplay: {
    type: Boolean,
    default: false
  },
  /**
   * @description 自动播放的时间间隔，单位ms
   */
  interval: {
    type: Number,
    default: 5e3
  },
  /**
   * @description 动画时长，单位ms
   */
  duration: {
    type: Number,
    default: 500
  },
  /**
   * @description 是否循环播放
   */
  loop: {
    type: Boolean,
    default: false
  },
  /**
   * @description 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
   */
  previousMargin: {
    type: String,
    default: "0px"
  },
  /**
   * @description 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
   */
  nextMargin: {
    type: String,
    default: "0px"
  },
  /**
   * @description 是否显示指示器
   */
  indicator: Boolean,
  /**
   * @description 指示器的位置
   */
  indicatorPosition: {
    type: String,
    values: swiperIndicatorPosition,
    default: "center-bottom"
  },
  /**
   * @description 指示器的类型
   */
  indicatorType: {
    type: String,
    values: swiperIndicatorType,
    default: "dot"
  },
  /**
   * @description 指示器颜色，以tn开头使用图鸟内置的颜色
   */
  indicatorBgColor: String,
  /**
   * @description 指示器激活时的颜色，以tn开头使用图鸟内置的颜色
   */
  indicatorActiveBgColor: String,
  /**
   * @description 指示器文本颜色，以tn开头使用图鸟内置的颜色
   */
  indicatorTextColor: String
});
const swiperEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  /**
   * @description 选项发生改变时触发
   */
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  /**
   * @description item点击事件
   */
  "item-click": (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  }
};
exports.swiperEmits = swiperEmits;
exports.swiperProps = swiperProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/swiper/src/swiper.js.map
