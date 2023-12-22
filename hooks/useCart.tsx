import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  
  useEffect(()=>{
    const cartItems:any = localStorage.getItem("eShopCartItems")
    const cartProducts: CartProductType[] | null = JSON.parse(cartItems)

    setCartProducts(cartProducts)
  },[])
  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
        toast.success('Product added to Cart')
      }
 if (prev) {
        // Check if the product is already in the cart
        const existingProductIndex = prev.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
          // If it's already in the cart, update the quantity or any other property
          prev[existingProductIndex] = product;
          toast.success("Product updated in Cart");
        } else {
          // If it's not in the cart, add it
          updatedCart = [...prev, product];
          toast.success("Product added to Cart");
        }
      } else {
        // If there's no cart, create a new one
        updatedCart = [product];
        toast.success("Product added to Cart");
      }

      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
