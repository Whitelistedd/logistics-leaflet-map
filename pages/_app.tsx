import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Provider } from "react-redux";
import { wrapper } from "@/redux/store";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...props} />
    </Provider>
  );
}
