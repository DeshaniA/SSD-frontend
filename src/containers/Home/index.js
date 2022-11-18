import React from 'react';
import Layout from '../../components/Layout'
import './style.css';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Cards from './Cards';
import Speakers from './Speakers';
import Organised from './Organised';
import Venues from './venues';

const Home = (props) => {

    return ( 
        <Layout >
            <>
           
        <HeroSection/>
        <Footer/>
        </>
        {/* </Header> */}
           
        </Layout>
    )
}


export default Home