import styles from "./footer.module.scss"
import sectigo from "../../assets/sectigo.png"

const footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a className={styles.link} href="https://globale-prod.s3-eu-west-1.amazonaws.com/GlobaleLegalDocuments/GlobaleTermsandConditions/Global-e_Terms_of_Sales_US.pdf">Contact Us</a>
                <p className={styles.link}>|</p>
                <a className={styles.link} href="https://customercare.victoriassecret.com/s/">Help</a>
                <p className={styles.link}>|</p>
                <a className={styles.link} href="https://web.global-e.com/checkoutv2/GetLegalDocumentByKey?key=VictoriasSecret.checkout.Legal.TOS&merchantId=1721&cultureId=1033">Terms & Conditions</a>
                <p className={styles.link}>|</p>
                <a className={styles.link} href="https://www.global-e.com/consumer-privacy-policy">Privacy Policy</a>
            </div>
            <div className={styles.sectigo}>
                <a href="#">
                    <img src={sectigo} alt="Secured by Sectigo"/>
                </a>
                <a className={styles.sectigo_link} href="https://www.sectigo.com/about">Sectigo Wildcard SSL</a>
            </div>
        </footer>
    )
}

export default footer;