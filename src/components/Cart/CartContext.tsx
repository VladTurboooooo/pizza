// CartContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { saveCartToLocalStorage, loadCartFromLocalStorage } from '../../data/localStorageUtils';

// Определение интерфейса для объекта товара
interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem, quantity: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(loadCartFromLocalStorage());

  // Функция для добавления товара в корзину
  const addToCart = (item: CartItem, quantity: number) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
      setCartItems([...cartItems]);
    } else {
      const newItem = { ...item, quantity };
      setCartItems([...cartItems, newItem]);
    }
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (itemId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Функция для вычисления общей стоимости корзины
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
