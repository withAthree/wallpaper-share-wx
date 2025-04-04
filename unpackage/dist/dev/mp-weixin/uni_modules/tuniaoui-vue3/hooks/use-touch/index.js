"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useTouch = () => {
  const options = {
    disabled: false,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    faultTolerance: 10
  };
  const startX = common_vendor.ref(0);
  const startY = common_vendor.ref(0);
  const currentX = common_vendor.ref(0);
  const currentY = common_vendor.ref(0);
  const deltaX = common_vendor.ref(0);
  const deltaY = common_vendor.ref(0);
  const distanceX = common_vendor.ref(0);
  const distanceY = common_vendor.ref(0);
  const isVertical = common_vendor.ref(false);
  const isHorizontal = common_vendor.ref(false);
  const isClick = common_vendor.ref(false);
  let touchFlag;
  const updateOptions = (newOptions) => {
    Object.assign(options, newOptions);
  };
  const onTouchStart = (event) => {
    if (options.disabled || !event.changedTouches[0])
      return;
    startX.value = _edgeProcessing(event.changedTouches[0].pageX, "x");
    startY.value = _edgeProcessing(event.changedTouches[0].pageY, "y");
    touchFlag = "touch";
  };
  const onTouchMove = (event) => {
    if (options.disabled || !event.changedTouches[0])
      return;
    currentX.value = _edgeProcessing(event.changedTouches[0].pageX, "x");
    currentY.value = _edgeProcessing(event.changedTouches[0].pageY, "y");
    updateDistanceInfo();
    touchFlag = "moving";
  };
  const onTouchEnd = (event) => {
    if (options.disabled || !event.changedTouches[0] || touchFlag === "end")
      return;
    currentX.value = _edgeProcessing(event.changedTouches[0].pageX, "x");
    currentY.value = _edgeProcessing(event.changedTouches[0].pageY, "y");
    updateDistanceInfo();
    isVertical.value = distanceX.value < options.faultTolerance && distanceY.value >= options.faultTolerance;
    isHorizontal.value = distanceX.value >= options.faultTolerance && distanceY.value < options.faultTolerance;
    isClick.value = !isHorizontal.value && !isVertical.value;
    touchFlag = "end";
  };
  const updateDistanceInfo = () => {
    deltaX.value = currentX.value - startX.value;
    deltaY.value = currentY.value - startY.value;
    distanceX.value = Math.abs(deltaX.value);
    distanceY.value = Math.abs(deltaY.value);
  };
  const _edgeProcessing = (touchPosition, direction) => {
    const left = options.left, right = options.right, top = options.top, bottom = options.bottom;
    if (direction === "x") {
      if (touchPosition < left)
        return 0;
      if (touchPosition > right)
        return right - left;
      return touchPosition - left;
    } else {
      if (touchPosition < top)
        return 0;
      if (touchPosition > bottom)
        return bottom - top;
      return touchPosition - top;
    }
  };
  return {
    startX,
    startY,
    currentX,
    currentY,
    deltaX,
    deltaY,
    distanceX,
    distanceY,
    isVertical,
    isHorizontal,
    isClick,
    updateOptions,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};
exports.useTouch = useTouch;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/hooks/use-touch/index.js.map
