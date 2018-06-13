"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ConsumerHOC_1 = tslib_1.__importDefault(require("./ConsumerHOC"));
var fakePropTypes_1 = tslib_1.__importDefault(require("./fakePropTypes"));
var keyUUID = 0;
function default_1(defaultValue) {
    var _a;
    var _b;
    var uuid = 0;
    function getUUID() {
        return uuid++;
    }
    var ctxName = "__ctx_value__" + keyUUID++;
    return _b = /** @class */ (function (_super) {
            tslib_1.__extends(ContextProvider, _super);
            function ContextProvider(props) {
                var _this = _super.call(this, props) || this;
                _this.register = function (consumer) {
                    var key = getUUID();
                    _this._observers[key] = consumer;
                    return function () {
                        delete _this._observers[key];
                    };
                };
                _this._observers = {};
                return _this;
            }
            ContextProvider.prototype.getChildContext = function () {
                var _a;
                return _a = {},
                    _a[ctxName] = this.props.value,
                    _a[ctxName + "_register"] = this.register,
                    _a;
            };
            ContextProvider.prototype.componentDidUpdate = function () {
                this.flush();
            };
            ContextProvider.prototype.flush = function () {
                for (var i in this._observers) {
                    if (this._observers.hasOwnProperty(i)) {
                        try {
                            this._observers[i].forceUpdate();
                        }
                        catch (_) { }
                    }
                }
            };
            ContextProvider.prototype.render = function () {
                try {
                    return react_1.default.Children.only(this.props.children);
                }
                catch (_a) {
                    return react_1.default.createElement("div", null, this.props.children);
                }
            };
            return ContextProvider;
        }(react_1.default.Component)),
        _b.defaultProps = {
            value: defaultValue,
        },
        _b.childContextTypes = (_a = {},
            _a[ctxName] = fakePropTypes_1.default,
            _a[ctxName + "_register"] = fakePropTypes_1.default,
            _a),
        _b.createConsumer = function () {
            return ConsumerHOC_1.default(ctxName, defaultValue);
        },
        _b;
}
exports.default = default_1;
