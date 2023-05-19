import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    //receive the loader context from authProvider by useContext
    const { loading } = useContext(AuthContext);

    // loader for the if user refresh it will showed
    if (loading) {
        return <progress className="progress  flex justify-center progress-secondary mt-96 mx-auto text-center w-96"></progress>
    }
    return (
        <>
        <Header></Header>
        <Gallery></Gallery>
        <Testimonial></Testimonial>
        </>
    );
};

export default Home;