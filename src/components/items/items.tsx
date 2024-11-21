import styles from "./items.module.scss"
import Item from "../item/item";
import panty from "../../assets/1124983996O5_OM_F.png";
import bra from "../../assets/bra.png"
import bralette from "../../assets/bralette.png"
import React from "react";
import Total from "../total/total";

const Items = () => {
    return (
        <>
            <div className={styles.items}>
                <p className={styles.title}>Items In Bag</p>
            </div>
            <div>
                <Item brand="Very Sexy" img={panty} name="Shine Strap Rose Lace Crotchless Brazilian Panty" color="Campari Red" quantity={1} price={24.95}
                      size="S"/>
                <Item brand="Very Sexy" img={bra} name="The Fabulous by Victoria's Secret Full-Cup Shine Strap Rose Lace Bra" color="Campari Red" quantity={1} price={69.95}
                      size="34D"/>
                <Item brand="Victoria's Secret" img={bralette} name="BODYWEAR by Victoria with FeatherSoft™ Innovation Bralette" color="COCONUT WHITE" quantity={1} price={29.95}
                      size="S"/>
            </div>
            <div>
                <Total sum={124.85} />
            </div>
        </>
    )
}

export default Items;