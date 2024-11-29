import styles from "./items.module.scss"
import Item from "../item/item";
import panty from "../../assets/1124983996O5_OM_F.png";
import React from "react";
import Total from "../total/total";

const Items = () => {
    return (
        <>
            <div className={styles.items}>
                <p className={styles.title}>Items In Bag</p>
            </div>
            <div>
                <Item brand="Very Sexy" img={panty} name="Shine Strap Rose Lace Crotchless Brazilian Panty" color="Campari Red" quantity={1} price={12.45}
                      size="S"/>
            </div>
            <div>
                <Total sum={12.45} />
            </div>
        </>
    )
}

export default Items;