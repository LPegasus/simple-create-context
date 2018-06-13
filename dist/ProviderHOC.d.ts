import React from 'react';
import { ConsumerPropTypes } from './ConsumerHOC';
import fakePropTypes from './fakePropTypes';
export interface ContextProviderPropTypes<T> {
    readonly value?: T;
    children?: (value: T) => React.ReactElement<any>;
}
export default function <T>(defaultValue: T): {
    new (props: ContextProviderPropTypes<T>): {
        _observers: {
            [key: string]: any;
        };
        getChildContext(): {
            [x: string]: T | ((consumer: any) => () => void) | undefined;
        };
        componentDidUpdate(): void;
        register: (consumer: any) => () => void;
        flush(): void;
        render(): JSX.Element;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: ContextProviderPropTypes<T>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<ContextProviderPropTypes<T>>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    defaultProps: {
        value: T;
    };
    childContextTypes: {
        [x: string]: typeof fakePropTypes;
    };
    createConsumer: () => {
        new (props?: ConsumerPropTypes<T> | undefined, context?: any): {
            remove?: (() => void) | undefined;
            componentDidMount(): void;
            componentWillUnmount(): void;
            render(): React.ReactElement<any>;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: ConsumerPropTypes<T>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: (() => any) | undefined): void;
            forceUpdate(callBack?: (() => any) | undefined): void;
            props: Readonly<{
                children?: React.ReactNode;
            }> & Readonly<ConsumerPropTypes<T>>;
            state: Readonly<{}>;
            context: any;
            refs: {
                [key: string]: React.ReactInstance;
            };
        };
        contextTypes: {
            [x: string]: typeof fakePropTypes;
        };
    };
};
