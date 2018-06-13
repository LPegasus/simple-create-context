import React from 'react';
import fakePropTypes from './fakePropTypes';
export default function ConsumerHOC<T>(ctxName: string, defaultValue: T): {
    new (props?: {
        children: (value: T) => React.ReactElement<any> | null;
    } | undefined, context?: any): {
        remove?: (() => void) | undefined;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): React.ReactElement<any> | null;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: {
            children: (value: T) => React.ReactElement<any> | null;
        }) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<{
            children: (value: T) => React.ReactElement<any> | null;
        }>;
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
