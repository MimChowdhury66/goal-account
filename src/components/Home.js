import React from 'react';
import Navbar from "../components/Navbar";
import Banner from '../components/Banner'
import Container from "../components/Container"
import Tips from "../components/Tips"
import FAQandTERM from "../components/FAQandTERM";
import About from "../components/About";
const Home=() =>{
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Container></Container>
            <About></About>
            <FAQandTERM />
             <Tips />
        </div>
    );
}

export default Home;