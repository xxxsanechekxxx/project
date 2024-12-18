import React, { useState } from "react";
import styles from "./formAddress.module.scss";

const formAddress: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("Choose country");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isAgreed, setIsAgreed] = useState(true);
    const [email, setEmail] = useState("");
    const [alternativeFirstName, setAlternativeFirstName] = useState("");
    const [alternativeLastName, setAlternativeLastName] = useState("");
    const [alternativeCountry, setAlternativeCountry] = useState("Choose country");
    const [alternativeAddressLine1, setAlternativeAddressLine1] = useState("");
    const [alternativeAddressLine2, setAlternativeAddressLine2] = useState("");
    const [alternativeCity, setAlternativeCity] = useState("");
    const [alternativeZipCode, setAlternativeZipCode] = useState("");
    const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("");
    const [alternativeEmail, setAlternativeEmail] = useState("");
    const [deliveryAddressType, setDeliveryAddressType] = useState("default");
    // Пример списка стран
    const countries = [
        "Choose country",
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo (Congo-Brazzaville)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (North)",
        "Korea (South)",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];

    return (
        <form className={styles.form}>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>
                    <h2>Billing Address</h2>
                </div>
                <div className={styles.inputContainer}>
                    <input
                        id="first-name"
                        name="firstName"
                        type="text"
                        placeholder=" "
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="first-name">First Name *</label>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        id="last-name"
                        name="lastName"
                        type="text"
                        placeholder=" "
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="last-name">Last Name *</label>
                </div>
                <div className={styles.inputContainer}>
                    <input
                        id="email"
                        name="e-mail"
                        type="text"
                        placeholder=" "
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">E-mail *</label>
                </div>

                {/* Выпадающий список для выбора страны */}
                <div className={styles.inputContainer}>
                    <select
                        id="country"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    >
                        <option value="" disabled hidden>
                        </option>
                        {countries.map((countryOption, index) => (
                            <option key={index} value={countryOption}>
                                {countryOption}
                            </option>
                        ))}
                    </select>
                    <label className={styles.label_country} htmlFor="country">Country *</label>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        id="address-line-1"
                        name="addressLine1"
                        type="text"
                        placeholder=" "
                        required
                        value={addressLine1}
                        onChange={(e) => setAddressLine1(e.target.value)}
                    />
                    <label htmlFor="address-line-1">Address Line 1 *</label>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        id="address-line-2"
                        name="addressLine2"
                        type="text"
                        placeholder=" "
                        value={addressLine2}
                        onChange={(e) => setAddressLine2(e.target.value)}
                    />
                    <label htmlFor="address-line-2">Address Line 2</label>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputContainer}>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            placeholder=""
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <label htmlFor="city">City / Suburb *</label>
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            id="zip"
                            name="zip"
                            type="text"
                            placeholder=" "
                            required
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                        <label htmlFor="zip">Zip / Postcode *</label>
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        id="phone-number"
                        name="phoneNumber"
                        type="text"
                        placeholder=" "
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <label htmlFor="phone-number">Phone Number *</label>
                </div>
                <div className={styles.agreementContainer}>
                    <input
                        id="agree-checkbox"
                        type="checkbox"
                        checked={isAgreed}
                        onChange={(e) => setIsAgreed(e.target.checked)}
                        required
                    />
                    <label htmlFor="agree-checkbox" className={styles.agreementText}>
                        I agree to receive information, special offers and <br /> promotions from
                        Victoria’s Secret, including its affiliated<br /> brands, like Victoria’s Secret PINK, via email. I
                        understand <br /> that I can
                        unsubscribe at any time by following the <br /> instructions in each email. For more information, view
                        the <br /><u><a href="https://www.victoriassecret.com/us/privacy-and-security" target="_blank"
                                        className={styles.link}>Victoria's Secret Privacy Policy</a></u>.
                    </label>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>
                    <h2>Delivery Address</h2>
                </div>
                <div className={styles.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            name="deliveryAddress"
                            value="default"
                            checked={deliveryAddressType === "default"}
                            onChange={() => setDeliveryAddressType("default")}
                            defaultChecked
                        />
                        Default (same as billing address)
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="deliveryAddress"
                            value="alternative"
                            checked={deliveryAddressType === "alternative"}
                            onChange={() => setDeliveryAddressType("alternative")}
                        />
                        Add an alternative delivery address
                    </label>
                </div>
                {deliveryAddressType === "alternative" && (
                    <>
                        <div className={styles.inputContainer}>
                            <input
                                id="first-name-alternative"
                                name="firstName_alternative"
                                type="text"
                                placeholder=" "
                                required
                                value={alternativeFirstName}
                                onChange={(e) => setAlternativeFirstName(e.target.value)}
                            />
                            <label htmlFor="first-name">First Name *</label>
                        </div>

                        <div className={styles.inputContainer}>
                            <input
                                id="last-name-alternative"
                                name="lastName_alternative"
                                type="text"
                                placeholder=" "
                                required
                                value={alternativeLastName}
                                onChange={(e) => setAlternativeLastName(e.target.value)}
                            />
                            <label htmlFor="last-name">Last Name *</label>
                        </div>
                        {/* Выпадающий список для выбора страны */}
                        <div className={styles.inputContainer}>
                            <select
                                id="country-alternative"
                                name="country_alternative"
                                value={alternativeCountry}
                                onChange={(e) => setAlternativeCountry(e.target.value)}
                                required
                            >
                                <option value="" disabled hidden>
                                </option>
                                {countries.map((countryOption, index) => (
                                    <option key={index} value={countryOption}>
                                        {countryOption}
                                    </option>
                                ))}
                            </select>
                            <label className={styles.label_country} htmlFor="country">Country *</label>
                        </div>

                        <div className={styles.inputContainer}>
                            <input
                                id="address-line-1-alternative"
                                name="addressLine1_alternative"
                                type="text"
                                placeholder=" "
                                required
                                value={alternativeAddressLine1}
                                onChange={(e) => setAlternativeAddressLine1(e.target.value)}
                            />
                            <label htmlFor="address-line-1">Address Line 1 *</label>
                        </div>

                        <div className={styles.inputContainer}>
                            <input
                                id="address-line-2-alternative"
                                name="addressLine2_alternative"
                                type="text"
                                placeholder=" "
                                value={alternativeAddressLine2}
                                onChange={(e) => setAlternativeAddressLine2(e.target.value)}
                            />
                            <label htmlFor="address-line-2">Address Line 2</label>
                        </div>

                        <div className={styles.inputRow}>
                            <div className={styles.inputContainer}>
                                <input
                                    id="city-alternative"
                                    name="city_alternative"
                                    type="text"
                                    placeholder=""
                                    required
                                    value={alternativeCity}
                                    onChange={(e) => setAlternativeCity(e.target.value)}
                                />
                                <label htmlFor="city">City / Suburb *</label>
                            </div>

                            <div className={styles.inputContainer}>
                                <input
                                    id="zip-alternative"
                                    name="zip_alternative"
                                    type="text"
                                    placeholder=" "
                                    required
                                    value={alternativeZipCode}
                                    onChange={(e) => setAlternativeZipCode(e.target.value)}
                                />
                                <label htmlFor="zip">Zip / Postcode *</label>
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <input
                                id="phone-number-alternative"
                                name="phoneNumber_alternative"
                                type="text"
                                placeholder=" "
                                required
                                value={alternativePhoneNumber}
                                onChange={(e) => setAlternativePhoneNumber(e.target.value)}
                            />
                            <label htmlFor="phone-number">Phone Number *</label>
                        </div>
                    </>
                )}
            </div>
        </form>
)
    ;
};

export default formAddress;
