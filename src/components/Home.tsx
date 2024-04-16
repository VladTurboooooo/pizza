
import React from 'react';
import styles from './Home.module.css';
import head_logo from './../images/FINAL-BRANCO1.svg';
import description_photo from './../images/juan-manuel-nunez-mendez-_CaLXVUfD8g-unsplash1.svg';

function Home() {
    return (
        <div className={styles.main_container}>
            <section className={styles.main_section}>
                <img className={styles.head_logo} src={head_logo} alt="" />
            </section>
            <section className={styles.description_section}>
                <div className={styles.description_head_line}></div>
                <div className={styles.description_main_head_line}>
                    <h3 className={styles.description_head_text}>Описание</h3>
                </div>
                <div className={styles.description_conteiner}>
                    <h2 className={styles.description_about_head_text}>Немного нашей истории</h2>
                    <img className={styles.description_image} src={description_photo} alt="" />
                    <p className={styles.description_text}>Мы готовим пиццерию на рынке более 20 лет назад. Основная цель всегда заключаться в том, чтобы объединить все семьи, которые хотят прийти сюда, в составе классических ингредиентов и лучших качеств. Традиционная венецианская прическа находится в непосредственной близости от каждого клиента и представляет собой разницу в его сердце.</p>
                </div>
            </section>
            <section className={styles.places_section}>
                <h2 className={styles.places_come_head_text}>Приходите к нам!</h2>
                <div className={styles.places_adress_and_time}>
                    <div className={styles.places_adress}>
                        <h3 className={styles.places_adress_head_text}>Адрес</h3>
                        <p className={styles.places_adress_text}>Авенида Чечи, 1416 <br /> г.Планальто Паулиста <br /> Сан-Паулу</p>
                    </div>
                    <div className={styles.places_time}>
                        <h3 className={styles.places_time_head_text}>График</h3>
                        <p className={styles.places_time_text}>Вторник – четверг: с 18:00 до 23:00. <br /> Пятница и суббота: с 18:00 до 23:30. <br /> Воскресенье: с 18:00 до 23:00.</p>
                    </div>
                </div>
                <div className={styles.places_button_container}>
                    <a className={styles.places_button} href="">Сделать заказ</a>
                </div>
            </section>
        </div>
    );
}
export default Home;
