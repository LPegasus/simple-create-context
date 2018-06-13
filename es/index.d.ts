export default function createContext<T>(defaultValue: T): {
    Provider: any;
    Consumer: any;
};
