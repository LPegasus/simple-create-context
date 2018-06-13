"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ProviderHOC_1 = tslib_1.__importDefault(require("./ProviderHOC"));
var react_1 = tslib_1.__importDefault(require("react"));
function createContext(defaultValue) {
    if (react_1.default.createContext) {
        return react_1.default.createContext(defaultValue);
    }
    var Provider = ProviderHOC_1.default(defaultValue);
    var Consumer = Provider.createConsumer();
    return {
        Provider: Provider,
        Consumer: Consumer,
    };
}
exports.default = createContext;
