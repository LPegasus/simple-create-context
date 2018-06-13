import React from 'react';
import ConsumerHOC from './ConsumerHOC';
import fakePropTypes from './fakePropTypes';
let keyUUID = 0;
export default function (defaultValue) {
    var _a;
    let uuid = 0;
    function getUUID() {
        return uuid++;
    }
    const ctxName = `__ctx_value__${keyUUID++}`;
    return _a = class ContextProvider extends React.Component {
            constructor(props) {
                super(props);
                this.register = (consumer) => {
                    const key = getUUID();
                    this._observers[key] = consumer;
                    return () => {
                        delete this._observers[key];
                    };
                };
                this._observers = {};
            }
            getChildContext() {
                return {
                    [ctxName]: this.props.value,
                    [`${ctxName}_register`]: this.register,
                };
            }
            componentDidUpdate() {
                this.flush();
            }
            flush() {
                for (const i in this._observers) {
                    if (this._observers.hasOwnProperty(i)) {
                        try {
                            this._observers[i].forceUpdate();
                        }
                        catch (_) { }
                    }
                }
            }
            render() {
                try {
                    return React.Children.only(this.props.children);
                }
                catch (_a) {
                    return React.createElement("div", null, this.props.children);
                }
            }
        },
        _a.defaultProps = {
            value: defaultValue,
        },
        _a.childContextTypes = {
            [ctxName]: fakePropTypes,
            [`${ctxName}_register`]: fakePropTypes,
        },
        _a.createConsumer = () => {
            return ConsumerHOC(ctxName, defaultValue);
        },
        _a;
}
