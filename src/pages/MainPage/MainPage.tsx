import React from 'react';
import Header from "../../components/header/header";
import Items from "../../components/items/items";
import FormAddress from "../../components/formAddress/formAddress";
import DeliveryMethod from "../../components/deliveryMethod/deliveryMethod";
import Payment from "../../components/payment/payment";
import Footer from "../../components/footer/footer";

const MainPage = () => {
    return (
        <div>
            <Items />
            <FormAddress />
            <DeliveryMethod />
            <Payment />
            <Footer />
        </div>
    );
};

export default MainPage;
