"use strict";
const en = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};
exports.en = en;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/libs/dayjs/locale/en.js.map
