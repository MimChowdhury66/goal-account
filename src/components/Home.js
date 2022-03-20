import React from 'react';
import Navbar from "../components/Navbar";
import Banner from '../components/Banner'
import Container from "../components/Container"
import FAQandTERM from "../components/FAQandTERM";
import About from "../components/About";
import AllTips from '../components/AllTips';
const Home=() =>{
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Container></Container>
            <About></About>
            <FAQandTERM />
            <AllTips></AllTips>
        </div>
    );
}

export default Home;