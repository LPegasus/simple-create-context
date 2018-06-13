"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var fakePropTypes_1 = tslib_1.__importDefault(require("./fakePropTypes"));
function ConsumerHOC(ctxName, defaultValue) {
    var _a;
    var _b;
    return _b = /** @class */ (function (_super) {
            tslib_1.__extends(Consumer, _super);
            function Consumer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Consumer.prototype.componentDidMount = function () {
                if (typeof this.context[ctxName + "_register"] === 'function') {
                    this.remove = this.context[ctxName + "_register"](this);
                }
            };
            Consumer.prototype.componentWillUnmount = function () {
                if (this.remove) {
                    this.remove();
                }
            };
            Consumer.prototype.render = function () {
                return this.props.children(this.context[ctxName] !== undefined ? this.context[ctxName] : defaultValue);
            };
            return Consumer;
        }(react_1.default.Component)),
        _b.contextTypes = (_a = {},
            _a[ctxName] = fakePropTypes_1.default,
            _a[ctxName + "_register"] = fakePropTypes_1.default,
            _a),
        _b;
}
exports.default = ConsumerHOC;
