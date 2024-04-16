import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuData from '../../../data/menu.json';
import styles from "./Menu.module.css";
import cart from '../../../images/cart_image.png';

function Menu() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  return (

    <div className={styles.main_container}>
      <h1 className={styles.main_category_text}>Меню</h1>
      <h2 className={styles.middle_category_text}>Пицца</h2>
      <div className={styles.pizza_menu_container}>
        <ul className={styles.list}>
          {menuData.map((pizza) => (
            <li key={pizza.id} className={styles['menu-item']}>
              <div className={styles.menu_description}>
                <Link to={`/catalog/${pizza.id}`}>
                  <img className={styles.pizza_images} src={pizza.images[0]} alt={pizza.name} />
                  <h2 className={styles.pizza_names}>{pizza.name}</h2>
                  <p className={styles.pizza_description}>{pizza.description}</p>
                  <p className={styles.pizza_price}>Цена ${pizza.price}</p>
                  <div className={styles.buy_container}>
                    <button className={styles.cart_button}><img className={styles.cart_img} src={cart} alt="" />  Поместить в корзину</button>
                    <Link className={styles.checkout} to="/cart">
                      Оформить заказ
                    </Link>
                  </div>
                  <p className={styles.sum_amount}>Общая стоимость: ${pizza.price * (quantities[pizza.id] || 1)}</p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu