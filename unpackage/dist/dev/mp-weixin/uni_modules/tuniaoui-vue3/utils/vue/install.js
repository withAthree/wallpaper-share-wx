"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../is-empty.js");
const withInstall = (main, extra) => {
  var e_1, _a;
  main.install = (app) => {
    var e_2, _a2;
    try {
      for (var _b2 = common_vendor.__values([
        main,
        ...Object.values(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(extra, {}))
      ]), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
        var comp2 = _c2.value;
        app.component(comp2.name, comp2);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a2 = _b2.return))
          _a2.call(_b2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
  };
  if (extra) {
    try {
      for (var _b = common_vendor.__values(Object.entries(extra)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = common_vendor.__read(_c.value, 2), key = _d[0], comp = _d[1];
        ;
        main[key] = comp;
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = () => {
  };
  return component;
};
exports.withInstall = withInstall;
exports.withNoopInstall = withNoopInstall;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/utils/vue/install.js.map
