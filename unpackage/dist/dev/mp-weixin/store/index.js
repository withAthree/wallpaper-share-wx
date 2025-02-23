"use strict";
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
          currentDateRange: { type: "Unknown", optional: false }
        };
      }
    };
  }
  constructor(options, metadata = State.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.currentResolution = this.__props__.currentResolution;
    this.currentRatios = this.__props__.currentRatios;
    this.currentSort = this.__props__.currentSort;
    this.currentDateRange = this.__props__.currentDateRange;
    delete this.__props__;
  }
}
const state = common_vendor.reactive(new State({
  currentResolution: "",
  currentRatios: [],
  currentSort: "random",
  currentDateRange: "last_month"
}));
const setCurrentResolution = (value) => {
  state.currentResolution = value;
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
exports.setCurrentDateRange = setCurrentDateRange;
exports.setCurrentRatios = setCurrentRatios;
exports.setCurrentResolution = setCurrentResolution;
exports.setCurrentSort = setCurrentSort;
exports.state = state;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/index.js.map
