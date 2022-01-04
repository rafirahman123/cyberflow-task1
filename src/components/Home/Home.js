import React from 'react';
import Banner from '../Banner/Banner';
import ClientSpeak from '../ClientSpeak/ClientSpeak';
import Compliant from '../Compliant/Compliant';
import Contact from '../Contact/Contact';
import Savvy from '../Savvy/Savvy';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Compliant />
            <Service />
            <Savvy />
            <ClientSpeak />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;