import { useEffect, useState } from "react";
import axios from "axios";
import ProductsContext from "../../context";

const BASE_URL = "https://699eb2fe78dda56d396b07d3.mockapi.io";

function ProductProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/productsData`);
      setProducts(data);
    } catch (error) {
      console.error("Ошибка при получении товаров:", error);
    }
  };

  const fetchCartData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/cartData`);
      setCartData(data);
    } catch (error) {
      console.error("Ошибка при получении корзины:", error);
    }
  };

  const addToCart = async (product) => {
    try {
      const isAlreadyInCart = cartData.some((item) => item.name === product.name);

      if (isAlreadyInCart) return;

      const payload = {
        image: product.image,
        name: product.name,
        price: product.price,
      };

      const { data } = await axios.post(`${BASE_URL}/cartData`, payload);
      setCartData((prev) => [...prev, data]);
    } catch (error) {
      console.error("Ошибка при добавлении в корзину:", error);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      await axios.delete(`${BASE_URL}/cartData/${productId}`);
      setCartData((prev) => prev.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("Ошибка при удалении из корзины:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([fetchProducts(), fetchCartData()]);
    };

    loadData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartData,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
