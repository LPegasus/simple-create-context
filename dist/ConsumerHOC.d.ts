import React from 'react';
import fakePropTypes from './fakePropTypes';
export interface ConsumerPropTypes<T> {
    children: (value: T) => any;
}
export default function ConsumerHOC<T>(ctxName: string, defaultValue: T): {
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
