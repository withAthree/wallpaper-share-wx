"use strict";
require("../types/index.js");
const common_vendor = require("../common/vendor.js");
class State extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          currentResolution: { type: String, optional: false },
          currentRatios: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
          currentSort: { type: "Unknown", optional: false },
          currentDateRange: { type: "Unknown", optional: false },
          tempDir: { type: String, optional: false },
          globalLoading: { type: Boolean, optional: false },
          range: { type: "Unknown", optional: false }
        };
      },
      name: "State"
    };
  }
  constructor(options, metadata = State.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.currentResolution = this.__props__.currentResolution;
    this.currentRatios = this.__props__.currentRatios;
    this.currentSort = this.__props__.currentSort;
    this.currentDateRange = this.__props__.currentDateRange;
    this.tempDir = this.__props__.tempDir;
    this.globalLoading = this.__props__.globalLoading;
    this.range = this.__props__.range;
    delete this.__props__;
  }
}
const state = common_vendor.reactive(new State({
  currentResolution: "",
  currentRatios: [],
  currentSort: "random",
  currentDateRange: "lastMonth",
  tempDir: "",
  globalLoading: false,
  range: "more"
}));
const setTempDir = (value) => {
  state.tempDir = value;
};
const setCurrentResolution = (value, range) => {
  state.currentResolution = value;
  state.range = range;
};
const setCurrentRatios = (value) => {
  state.currentRatios = value;
};
const setCurrentSort = (value) => {
  state.currentSort = value;
};
const setCurrentDateRange = (value) => {
  state.currentDateRange = value;
};
const setGlobalLoading = (value) => {
  state.globalLoading = value;
};
exports.setCurrentDateRange = setCurrentDateRange;
exports.setCurrentRatios = setCurrentRatios;
exports.setCurrentResolution = setCurrentResolution;
exports.setCurrentSort = setCurrentSort;
exports.setGlobalLoading = setGlobalLoading;
exports.setTempDir = setTempDir;
exports.state = state;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/index.js.map
