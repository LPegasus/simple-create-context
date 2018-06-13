import createProvider, { ContextProviderPropTypes } from './ProviderHOC';
import React from 'react';
import { ConsumerPropTypes } from './ConsumerHOC';

export default function createContext<T>(defaultValue: T): {
  Provider: any;
  Consumer: any;
 } {
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