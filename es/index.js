import createProvider from './ProviderHOC';
import React from 'react';
export default function createContext(defaultValue) {
    if (React.createContext) {
        return React.createContext(defaultValue);
    }
    const Provider = createProvider(defaultValue);
    const Consumer = Provider.createConsumer();
    return {
        Provider,
        Consumer,
    };
}
