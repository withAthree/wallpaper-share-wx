"use strict";
const common_vendor = require("../common/vendor.js");
class State extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          currentFilterMode: { type: "Unknown", optional: false }
        };
      }
    };
  }
  constructor(options, metadata = State.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.currentFilterMode = this.__props__.currentFilterMode;
    delete this.__props__;
  }
}
const state = common_vendor.reactive(new State({ currentFilterMode: "date_added" }));
exports.state = state;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/index.js.map
