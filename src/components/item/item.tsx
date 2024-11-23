import React from "react";
import styles from './item.module.scss'

type TItem = {
    img: string;
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    brand: string;
}

const item: React.FC<TItem> = ({img, name,brand,  color, size, price, quantity}) => {
    return (
        <div className={styles.item}>
            <img src={img} alt={name}/>
            <div className={styles.description}>
                <p className={`${styles.text} ${styles.gray}`}>{brand}</p>
                <p className={styles.name}>{name}</p>
                <p className={styles.text}>In Stock</p>
                <div className={styles.group}>
                    <p className={styles.category}>Color</p>
                    <p className={styles.text}>{color}</p>
                </div>
                <div className={styles.group}>
                    <p className={`${styles.text} ${styles.gray}`}>Size</p>
                    <p className={styles.text}>{size}</p>
                </div>
                <div className={styles.group}>
                    <p className={`${styles.text} ${styles.gray}`}>Quantity</p>
                    <p className={styles.text}>{quantity}</p>
                </div>
                <div className={styles.group}>
                    <p className={`${styles.text} ${styles.gray}`}>Price</p>
                    <p className={styles.text}>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default item;