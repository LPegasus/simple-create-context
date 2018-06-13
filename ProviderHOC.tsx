import React from 'react';
import ConsumerHOC, { ConsumerPropTypes } from './ConsumerHOC';
import fakePropTypes from './fakePropTypes';

let keyUUID: number = 0;

function noop() {
  return 1;
}

export interface ContextProviderPropTypes<T> { readonly value?: T; children?: (value: T) => React.ReactElement<any> }

export default function <T>(defaultValue: T) {
  let uuid = 0;
  function getUUID() {
    return uuid++;
  }

  const ctxName = `__ctx_value__${keyUUID++}`;

  return class ContextProvider extends React.Component<ContextProviderPropTypes<T>> {
    static defaultProps = {
      value: defaultValue,
    };

    static childContextTypes = {
      [ctxName]: fakePropTypes,
      [`${ctxName}_register`]: fakePropTypes,
    }

    static createConsumer = () => {
      return ConsumerHOC(ctxName, defaultValue);
    }

    _observers: { [key: string]: any };

    constructor(props: ContextProviderPropTypes<T>) {
      super(props);
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

    register = (consumer: any) => {
      const key = getUUID();
      this._observers[key] = consumer;
      return () => {
        delete this._observers[key];
      };
    }

    flush() {
      for (const i in this._observers) {
        if (this._observers.hasOwnProperty(i)) {
          try {
            this._observers[i].forceUpdate();
          } catch (_) { }
        }
      }
    }

    render() {
      try {
        return React.Children.only(this.props.children);
      } catch {
        return <div>{this.props.children}</div>;
      }
    }
  };
}
