import React from 'react';
import fakePropTypes from './fakePropTypes';
export default function ConsumerHOC(ctxName, defaultValue) {
    var _a;
    return _a = class Consumer extends React.Component {
            componentDidMount() {
                if (typeof this.context[`${ctxName}_register`] === 'function') {
                    this.remove = this.context[`${ctxName}_register`](this);
                }
            }
            componentWillUnmount() {
                if (this.remove) {
                    this.remove();
                }
            }
            render() {
                return this.props.children(this.context[ctxName] !== undefined ? this.context[ctxName] : defaultValue);
            }
        },
        _a.contextTypes = {
            [ctxName]: fakePropTypes,
            [`${ctxName}_register`]: fakePropTypes,
        },
        _a;
}
