"use strict";
const rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
const rsAstral = `[${rsAstralRange}]`, rsCombo = `[${rsComboRange}]`, rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = `(?:${rsCombo}|${rsFitz})`, rsNonAstral = `[^${rsAstralRange}]`, rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
const reOptMod = `${rsModifier}?`, rsOptVar = `[${rsVarRange}]?`, rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join("|")})${rsOptVar}${reOptMod})*`, rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = `(?:${[
  `${rsNonAstral + rsCombo}?`,
  rsCombo,
  rsRegional,
  rsSurrPair,
  rsAstral
].join("|")})`;
const reUnicode = new RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol}${rsSeq}`, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
exports.unicodeToArray = unicodeToArray;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/libs/lodash/_unicodeToArray.js.map
