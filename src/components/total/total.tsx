import styles from "./total.module.scss"
import {FC} from "react";

type TTotal = {
    sum: number;
}

const Total: FC<TTotal> = ({sum}) => {
    return (
        <div className={styles.total}>
            <p className={styles.currency}>Items total</p>
            <p className={styles.reduce}>${sum}</p>
        </div>
    )
}


export default Total