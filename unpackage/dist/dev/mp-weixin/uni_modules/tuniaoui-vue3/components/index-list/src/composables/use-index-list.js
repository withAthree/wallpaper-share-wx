"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
const uni_modules_tuniaouiVue3_hooks_useTouch_index = require("../../../../hooks/use-touch/index.js");
const uni_modules_tuniaouiVue3_hooks_useUniappSystemRectInfo_index = require("../../../../hooks/use-uniapp-system-rect-info/index.js");
require("../../../../hooks/use-z-index/index.js");
const useIndexList = (props, emits) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnIndexList", "请在 setup 中使用 useIndexList");
  }
  const componentId = uni_modules_tuniaouiVue3_utils_rand.generateId();
  const componentContentClass = `tilc-${componentId}`;
  const componentKeyListId = `tilkl-${componentId}`;
  const _a = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance), getSelectorNodeInfo = _a.getSelectorNodeInfo, getSelectorNodeInfos = _a.getSelectorNodeInfos;
  const keysData = common_vendor.computed(() => {
    return Object.keys(props.data);
  });
  const listData = common_vendor.ref([]);
  common_vendor.watch(() => {
    return props.data;
  }, (val) => {
    const starData = {
      key: "★",
      title: "★",
      data: []
    };
    listData.value = Object.entries(val).map((_a2) => {
      var _b2 = common_vendor.__read(_a2, 2), key = _b2[0], value = _b2[1];
      starData.data = starData.data.concat(value.data.filter((item) => {
        return item === null || item === void 0 ? void 0 : item.star;
      }));
      return {
        key,
        title: value.title,
        data: value.data
      };
    });
    if (starData.data.length) {
      if (!keysData.value.includes("★")) {
        keysData.value.unshift("★");
      }
      listData.value.unshift(starData);
    }
  }, {
    immediate: true
  });
  const systemScreenInfo = uni_modules_tuniaouiVue3_hooks_useUniappSystemRectInfo_index.useUniAppSystemRectInfo().systemScreenInfo;
  const contentContainerHeight = common_vendor.computed(() => {
    return props.height || systemScreenInfo.height - props.stickyOffsetTop;
  });
  let contentTopValues = [];
  const scrollViewTopValue = common_vendor.ref(0);
  let initCount = 0;
  const getContentItemNodeInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const contentNodeInfos = yield getSelectorNodeInfos(`.${componentContentClass}`);
        initCount = 0;
        contentTopValues = contentNodeInfos.map((item) => {
          return item.top || 0;
        });
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnIndexList", `获取全部列表项的节点信息失败：${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getContentItemNodeInfo();
        }, 150);
      }
    });
  };
  const _b = uni_modules_tuniaouiVue3_hooks_useTouch_index.useTouch(), keyListTouchCurrentY = _b.currentY, updateKeyListTouchOptions = _b.updateOptions, keyListTouchStartEvent = _b.onTouchStart, keyListTouchMoveEvent = _b.onTouchMove, keyListTouchEndEvent = _b.onTouchEnd;
  let keyListTop = 0;
  let keyListItemRectInfo = [];
  const getKeyListNodeInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const keyListNodeInfo = yield getSelectorNodeInfo(`#${componentKeyListId}`);
        const keyListItemNodeInfo = yield getSelectorNodeInfos(`#${componentKeyListId} .key-value`);
        initCount = 0;
        keyListTop = keyListNodeInfo.top || 0;
        keyListItemRectInfo = keyListItemNodeInfo.map((item) => {
          return {
            top: (item.top || 0) - keyListTop,
            height: item.height || 0
          };
        });
        updateKeyListTouchOptions({
          left: keyListNodeInfo.left,
          right: keyListNodeInfo.right,
          top: keyListNodeInfo.top,
          bottom: keyListNodeInfo.bottom
        });
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnIndexList", `获取索引列表的容器信息失败：${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getKeyListNodeInfo();
        }, 150);
      }
    });
  };
  const keyListTipsTopValue = common_vendor.ref(0);
  const currentTouchKeyIndex = common_vendor.ref(-1);
  const currentTouchKeyValue = common_vendor.computed(() => {
    return keysData.value[currentTouchKeyIndex.value];
  });
  const updateKeyListIndexValue = () => {
    let index = -1;
    index = keyListItemRectInfo.findLastIndex((item) => {
      return item.top < keyListTouchCurrentY.value;
    });
    if (index !== -1) {
      const keyListRectItem = keyListItemRectInfo[index];
      keyListTipsTopValue.value = keyListRectItem.top + keyListRectItem.height / 2;
      const top_1 = contentTopValues[index];
      scrollViewTopValue.value = top_1 - contentTopValues[0];
      currentTouchKeyIndex.value = index;
    }
  };
  const onKeyListTouchStart = (event) => {
    keyListTouchStartEvent(event);
  };
  const onKeyListTouchMove = (event) => {
    keyListTouchMoveEvent(event);
    updateKeyListIndexValue();
  };
  const onKeyListTouchEnd = (event) => {
    keyListTouchEndEvent(event);
    updateKeyListIndexValue();
    emits("click", currentTouchKeyValue.value);
    currentTouchKeyIndex.value = -1;
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getContentItemNodeInfo();
      if (props.showKeysList)
        getKeyListNodeInfo();
    });
  });
  return {
    componentContentClass,
    contentContainerHeight,
    keysData,
    listData,
    scrollViewTopValue,
    componentKeyListId,
    keyListTipsTopValue,
    currentTouchKeyIndex,
    currentTouchKeyValue,
    onKeyListTouchStart,
    onKeyListTouchMove,
    onKeyListTouchEnd
  };
};
exports.useIndexList = useIndexList;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/index-list/src/composables/use-index-list.js.map
