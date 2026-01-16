"use client"
import ProductPage from "@/components/ProductListing/ProductPage";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>

      <Provider store={store}>
        <ProductPage />
      </Provider>
    </>
  );
}
