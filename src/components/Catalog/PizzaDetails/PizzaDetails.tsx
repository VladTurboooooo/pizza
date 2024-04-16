import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import menuData from '../../../data/menu.json';
import styles from './PizzaDetails.module.css';
import BiCart from '../../../images/cart_image.png';
import { useCart } from '../../Cart/CartContext';
import Carousel from './Carousel';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  details: string;
  ingredients: string[];
  reviews: { name: string; comment: string }[];
}

interface ReviewItem {
  id: number;
  name: string;
  comment: string;
}

interface Image {
  src: string;
  alt: string;
}

// interface Image {
//   src: string;
//   alt: string;
// }

// // Состояние для текущего индекса элемента в карусели
// const [currentIndex, setCurrentIndex] = useState(0);  // Функция для переключения на следующий слайд
// const nextSlide = () => {
//   setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
// };  // Функция для переключения на предыдущий слайд
// const prevSlide = () => {
//   setCurrentIndex((prevIndex) =>
//     prevIndex === 0 ? items.length - 1 : prevIndex - 1
//   );
// };



function PizzaDetails() {
  const { pizzaId } = useParams<{ pizzaId?: string }>();
  const parsedPizzaId = pizzaId ? parseInt(pizzaId, 10) : null;
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const [newReviewText, setNewReviewText] = useState<string>('');

  const addReview = () => {
    if (newReviewText.trim() === '') {
      return;
    }

    const newReview: ReviewItem = {
      id: Date.now(),
      name: `Денис`,
      comment: newReviewText,
    };

    if (pizza !== null) {
      setPizza((prevPizza) => ({
        ...prevPizza!,
        id: prevPizza ? prevPizza.id : 0,
        reviews: [...(prevPizza?.reviews || []), newReview]
      }));
      setNewReviewText('');
    }
  };

  useEffect(() => {
    if (parsedPizzaId !== null) {
      const foundPizza = menuData.find((item) => item.id === parsedPizzaId);
      if (foundPizza) {
        setPizza(foundPizza);
      }
    }
  }, [parsedPizzaId]);


  const [imageCount, setImageCount] = useState<number>(0);

  useEffect(() => {
    if (pizza) {
      setImageCount(pizza.images.length);
    }
  }, [pizza]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const incrementQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const { addToCart } = useCart();


  // // Состояние для текущего индекса элемента в карусели
  // const [currentIndex, setCurrentIndex] = useState(0);  // Функция для переключения на следующий слайд
  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  // };  // Функция для переключения на предыдущий слайд
  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? items.length - 1 : prevIndex - 1
  //   );

  return (
    <div className={styles.PizzaDetails}>
      {pizza ? (
        <div>
          <h2 className={styles.pizzaName}>{pizza.name}</h2>
          <div className={styles.Carousel}>
            <Carousel items={pizza.images} renderItem={(image) => (
              <img className={styles.detailsImg}src={image} key={image}></img>
            )}></Carousel>
          </div>

          <p className={styles.pizzaDescription}>{pizza.description}</p>

          <div className={styles.cart_button_container}>
            <button
              className={`btn btn-primary ${styles.addToCartButton}`}
            onClick={() => {
              addToCart(
                {
                  id: pizza.id,
                  image: pizza.images[0],
                  name: pizza.name,
                  price: pizza.price,
                  quantity: selectedQuantity,
                },
                selectedQuantity
              );
            }}
            >
              <img className={styles.checkout1} src={BiCart} /> Поместить в корзину
            </button>

            <Link className={styles.checkout2} to="/cart">
              Оформить заказ
            </Link>
            <p>Общая стоимость: ${(selectedQuantity * pizza.price).toFixed(2)}</p>

            <div className={styles.quantityContainer}>
              <button onClick={decrementQuantity}>-</button>
              <p>{selectedQuantity}</p>
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <h3>Ингредиенты:</h3>
          <ul className={styles.ingredients_list}>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <p className={styles.details}>{pizza.details}</p>

          <div className={styles.reviews}>
            <h3>Отзывы:</h3>
            <ul className={styles.list_reviews}>
              {pizza.reviews.map((review, index) => (
                <li className={styles.review_item} key={index}>
                  {Object.values(review)[0]}: {Object.values(review)[1]}
                </li>
              ))}
            </ul>
          </div>

          <h3 className={styles.reviews_main_text}>Оставить отзыв:</h3>
          <form className={styles.form_review} action="">
            <textarea className={styles.input_review} name="review" id=""></textarea>
            <button className={`btn btn-primary ${styles.button_review}`}>Отправить</button>
          </form>

        </div>
      ) : (
        <div>Пицца не найдена</div>
      )}
    </div>
  );
}

export default PizzaDetails;