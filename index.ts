import createProvider from './ProviderHOC';
import React from 'react';

export default function createContext<T>(defaultValue: T): { Provider: any; Consumer: any; } {
  if ((React as any).createContext) {
    return (React as any).createContext(defaultValue);
  }

  const Provider = createProvider(defaultValue);
  const Consumer = Provider.createConsumer();
  return {
    Provider,
    Consumer,
  };
}