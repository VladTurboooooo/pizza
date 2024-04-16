
// Cart.tsx
import React from 'react';
import { useCart } from './CartContext';
import styles from './Cart.module.css'; // Импорт модульных стилей CSS


function Cart() {
  const { cartItems, removeFromCart } = useCart();

  // Функция для удаления товара из корзины
  const handleRemoveFromCart = (itemId: number) => {
    removeFromCart(itemId);
  };

  return (
    <div className={styles.main_container}>
      <h2>Корзина</h2>
      <ul className={styles.content}>
        {cartItems.map((item) => (
          <li className={styles.item_cart} key={item.id}>
            <img className={styles.image_cart} src={item.image} alt={item.name} />
            <span>{item.name} - {item.quantity} шт. - ${item.price.toFixed(2)} </span>
            <button className={styles.button_cart} onClick={() => handleRemoveFromCart(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <p className={styles.sum}>
        Общая сумма: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </p>
    </div>

  );
}

export default Cart;
