"use strict";
const common_vendor = require("../../../../common/vendor.js");
const defaultNamespace = "tn";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("localContextKey");
const useGetDerivedNamespace = () => {
  const derivedNamespace = common_vendor.inject(namespaceContextKey, common_vendor.ref(defaultNamespace));
  const namespace = common_vendor.computed(() => {
    return common_vendor.unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => {
    return _bem(namespace.value, block, blockSuffix, "", "");
  };
  const e = (element) => {
    return element ? _bem(namespace.value, block, "", element, "") : "";
  };
  const m = (modifier) => {
    return modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  };
  const be = (blockSuffix, element) => {
    return blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  };
  const em = (element, modifier) => {
    return element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  };
  const bm = (blockSuffix, modifier) => {
    return blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  };
  const bem = (blockSuffix, element, modifier) => {
    return blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  };
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `is-${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => {
    return `--${namespace.value}-${name}`;
  };
  const cssVarBlockName = (name) => {
    return `--${namespace.value}-${block}-${name}`;
  };
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // css
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
exports.useNamespace = useNamespace;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/hooks/use-namespace/index.js.map
