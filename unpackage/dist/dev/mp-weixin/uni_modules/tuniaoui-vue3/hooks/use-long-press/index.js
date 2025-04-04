"use strict";
const useLongPress = (event, enabled, longPressIntervel = 250) => {
  let longPressTimer = null;
  const clearLongPressTimer = () => {
    if (longPressTimer) {
      clearInterval(longPressTimer);
      longPressTimer = null;
    }
  };
  const handleLongPressEvent = (...args) => {
    if (enabled.value) {
      event(...args);
      clearLongPressTimer();
      longPressTimer = setInterval(() => {
        event(...args);
      }, longPressIntervel);
    } else {
      event(...args);
    }
  };
  return {
    handleLongPressEvent,
    clearLongPressTimer
  };
};
exports.useLongPress = useLongPress;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/hooks/use-long-press/index.js.map
