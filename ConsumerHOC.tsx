import React from 'react';
import fakePropTypes from './fakePropTypes';

export interface ConsumerPropTypes<T> { children: (value: T) => any }

export default function ConsumerHOC<T>(ctxName: string, defaultValue: T) {
  return class Consumer extends React.Component<ConsumerPropTypes<T>> {
    remove?: () => void;
    static contextTypes = {
      [ctxName]: fakePropTypes,
      [`${ctxName}_register`]: fakePropTypes,
    }

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
      return this.props.children(this.context[ctxName] !== undefined ? this.context[ctxName] : defaultValue) as React.ReactElement<any>;
    }
  };
}
