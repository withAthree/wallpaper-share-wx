"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_utils_cloneDeep = require("../../../../utils/clone-deep.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const useWaterFall = (props) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnWaterFall", "请在 setup 中使用 useWaterFall");
  }
  const componentId = `twf-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const leftData = common_vendor.ref([]);
  const rightData = common_vendor.ref([]);
  let leftContainerHeight = 0;
  let rightContainerHeight = 0;
  const getContainerHeight = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const leftContainerRectInfo = yield getSelectorNodeInfo(`#${componentId}-left`);
        const rightContainerRectInfo = yield getSelectorNodeInfo(`#${componentId}-right`);
        leftContainerHeight = leftContainerRectInfo.height || leftContainerHeight;
        rightContainerHeight = rightContainerRectInfo.height || rightContainerHeight;
      } catch (err) {
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnWaterFall", `获取容器高度信息失败：${err}`);
      }
    });
  };
  let oldUserData = [];
  const splitData = (data) => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      if (!data || !data.length)
        return;
      if (props.mode === "calc") {
        yield getContainerHeight();
        if (leftContainerHeight <= rightContainerHeight) {
          leftData.value.push(data.shift());
        } else {
          rightData.value.push(data.shift());
        }
        common_vendor.nextTick$1(() => {
          setTimeout(() => {
            splitData(data);
          }, 200);
        });
      } else if (props.mode === "normal") {
        let firstLeft = true;
        yield getContainerHeight();
        if (leftData.value.length > rightData.value.length) {
          firstLeft = false;
        }
        let leftSmall = false;
        if (leftContainerHeight < rightContainerHeight) {
          leftSmall = true;
        }
        data.forEach((item, index) => {
          if (index % 2 === 0 && firstLeft || leftSmall) {
            leftData.value.push(item);
          } else {
            rightData.value.push(item);
          }
          if (!firstLeft) {
            firstLeft = true;
          }
          if (leftSmall && index >= 2) {
            leftSmall = false;
          }
        });
      }
    });
  };
  const resetWaterFall = () => {
    if (!props.data)
      return;
    leftData.value = [];
    rightData.value = [];
    leftContainerHeight = 0;
    rightContainerHeight = 0;
    common_vendor.nextTick$1(() => {
      oldUserData = props.data;
      splitData(props.data);
    });
  };
  common_vendor.watch(() => {
    return props.data;
  }, (val) => {
    if (!val)
      return;
    if (oldUserData.length === val.length)
      return;
    const newData = uni_modules_tuniaouiVue3_utils_cloneDeep.cloneDeep(val.slice(oldUserData.length));
    if (!newData.length) {
      leftData.value = [];
      rightData.value = [];
      leftContainerHeight = 0;
      rightContainerHeight = 0;
    }
    common_vendor.nextTick$1(() => {
      oldUserData = val;
      splitData(newData);
    });
  }, {
    immediate: true
  });
  return {
    componentId,
    leftData,
    rightData,
    resetWaterFall
  };
};
exports.useWaterFall = useWaterFall;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/water-fall/src/composables/use-water-fall.js.map
