import createContext from "..";

const { Provider, Consumer } = createContext({ age: 18, name: 'LP' });

export const FormProvider = Provider;
export const FormConsumer = Consumer;
