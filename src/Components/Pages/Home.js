import '../../App.css';
import Cards from '../Cards';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../../Components/NavBar/Navbar';
import TestiMonials from '../../Components/TestiMonials/TestiMonials';
import { NavLink } from 'react-router-dom';
import UploadImage from './ImageUpload';
function Home (){
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <TestiMonials/>
        <Cards/>
        <UploadImage/>
        <Footer/>
        </>
    )
}
export default Home;