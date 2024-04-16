import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reviewData from '../data/reviews.json';
import styles from './Reviews.module.css';

interface Reviews {
    id: number;
    author: string;
    text: string;
    rating: number;
}

function Reviews() {
    const { reviewId } = useParams<{ reviewId?: string }>();
    const parsedreviewId = reviewId ? parseInt(reviewId, 10) : null;
    const [reviews, setReviews] = useState<Reviews[] | null>(null);

    useEffect(() => {
        if (parsedreviewId !== null) {
            const foundReview = reviewData.filter((item) => item.id === parsedreviewId);
            if (foundReview.length > 0) {
                setReviews(foundReview);
            }
        } else {

            setReviews(reviewData);
        }
    }, [parsedreviewId]);

    return (
        <div className={styles.reviews_container}>
            <h1>Отзывы</h1>
            <ul className={styles.reviews_list}>
                {reviews !== null &&
                    reviews.map((review) => (
                        <li className={styles.li_list} key={review.id}>
                            <p className={styles.review_author}>{review.author}</p>
                            <p className={styles.review_text}>{review.text}</p>
                            <p className={styles.review_rating}>Рейтинг: {review.rating}</p>
                            </li>
                    ))}
        </ul>
        </div >
    );
}

export default Reviews;