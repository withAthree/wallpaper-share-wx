"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_util = require("./util.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_index = require("./validator/index.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_messages = require("./messages.js");
class Schema {
  constructor(descriptor) {
    this.rules = null;
    this._messages = uni_modules_tuniaouiVue3_libs_asyncValidator_messages.messages;
    this.define(descriptor);
  }
  define(rules) {
    if (!rules) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules !== "object" || Array.isArray(rules)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules).forEach((name) => {
      const item = rules[name];
      this.rules[name] = Array.isArray(item) ? item : [item];
    });
  }
  messages(messages) {
    if (messages) {
      this._messages = uni_modules_tuniaouiVue3_libs_asyncValidator_util.deepMerge(uni_modules_tuniaouiVue3_libs_asyncValidator_messages.newMessages(), messages);
    }
    return this._messages;
  }
  validate(source_, o = {}, oc = () => {
  }) {
    let source = source_;
    let options = o;
    let callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      let errors = [];
      let fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat(...e);
        } else {
          errors.push(e);
        }
      }
      for (let i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = uni_modules_tuniaouiVue3_libs_asyncValidator_util.convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      let messages = this.messages();
      if (messages === uni_modules_tuniaouiVue3_libs_asyncValidator_messages.messages) {
        messages = uni_modules_tuniaouiVue3_libs_asyncValidator_messages.newMessages();
      }
      uni_modules_tuniaouiVue3_libs_asyncValidator_util.deepMerge(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }
    const series = {};
    const keys = options.keys || Object.keys(this.rules);
    keys.forEach((z) => {
      const arr = this.rules[z];
      let value = source[z];
      arr.forEach((r) => {
        let rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = Object.assign({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = Object.assign({}, rule);
        }
        rule.validator = this.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = this.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    const errorFields = {};
    return uni_modules_tuniaouiVue3_libs_asyncValidator_util.asyncMap(series, options, (data, doIt) => {
      var _a;
      const rule = data.rule;
      let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return Object.assign(Object.assign({}, schema), { fullField: `${rule.fullField}.${key}`, fullFields: rule.fullFields ? [...rule.fullFields, key] : [key] });
      }
      function cb(e = []) {
        let errorList = Array.isArray(e) ? e : [e];
        if (!options.suppressWarning && errorList.length) {
          Schema.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }
        let filledErrors = errorList.map(uni_modules_tuniaouiVue3_libs_asyncValidator_util.complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(uni_modules_tuniaouiVue3_libs_asyncValidator_util.complementError(rule, source));
            } else if (options.error) {
              filledErrors = [
                options.error(rule, uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages.required, rule.field))
              ];
            }
            return doIt(filledErrors);
          }
          let fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map((key) => {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = Object.assign(Object.assign({}, fieldsSchema), data.rule.fields);
          const paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach((field) => {
            const fieldSchema = fieldsSchema[field];
            const fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          const schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, (errs) => {
            const finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push(...filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push(...errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      let res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          (_a = console.error) === null || _a === void 0 ? void 0 : _a.call(console, error);
          if (!options.suppressValidatorError) {
            setTimeout(() => {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || `${rule.fullField || rule.field} fails`);
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(() => {
          return cb();
        }, (e) => {
          return cb(e);
        });
      }
    }, (results) => {
      complete(results);
    }, source);
  }
  getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !uni_modules_tuniaouiVue3_libs_asyncValidator_validator_index.validators.hasOwnProperty(rule.type)) {
      throw new Error(uni_modules_tuniaouiVue3_libs_asyncValidator_util.format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  }
  getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    const keys = Object.keys(rule);
    const messageIndex = keys.indexOf("message");
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === "required") {
      return uni_modules_tuniaouiVue3_libs_asyncValidator_validator_index.validators.required;
    }
    return uni_modules_tuniaouiVue3_libs_asyncValidator_validator_index.validators[this.getType(rule)] || void 0;
  }
}
Schema.register = function register(type, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  uni_modules_tuniaouiVue3_libs_asyncValidator_validator_index.validators[type] = validator;
};
Schema.warning = uni_modules_tuniaouiVue3_libs_asyncValidator_util.warning;
Schema.messages = uni_modules_tuniaouiVue3_libs_asyncValidator_messages.messages;
Schema.validators = uni_modules_tuniaouiVue3_libs_asyncValidator_validator_index.validators;
exports.Schema = Schema;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/libs/async-validator/index.js.map
