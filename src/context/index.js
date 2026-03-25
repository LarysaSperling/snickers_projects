import { createContext, useContext } from "react";

const ProductsContext = createContext(null);

export const useCart = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useCart должен использоваться внутри ProductProvider");
  }

  return context;
};

export default ProductsContext;
