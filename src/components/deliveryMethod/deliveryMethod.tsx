import React from "react";
import styles from "./deliveryMethod.module.scss";

const DeliveryMethod = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);

    // Форматируем дату в формат: "Month Day, Year"
    const deliveryDate = currentDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
    });

    return (
        <div>
            <div className={styles.sectionTitle}>
                <h2>Delivery Method</h2>
            </div>
            <div className={styles.info}>
                <label className={styles.label}>
                    <input
                        type="radio"
                        name="deliveryAddress"
                        value="default"
                        defaultChecked
                    />
                    Free
                </label>
                <p className={styles.text}>Express Courier (Air)</p>
                <p className={styles.text}>Est. delivery by {deliveryDate}th</p>
            </div>
        </div>
    );
};

export default DeliveryMethod;