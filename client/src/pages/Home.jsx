import DownloadApp from "../components/DownloadApp";
import Assure from "../components/Assure";
import LookingFor from "../components/LookingFor";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import BestSellingProducts from "../components/BestSellingProducts";
import Offer from "../components/Offer";
import FeaturedProducts from "../components/FeaturedProducts";
import Discount from "../components/Discount";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/auth");
        }
    }, []);
    return (
        <>
            <HeroSection />
            <Category />
            <BestSellingProducts />
            <Offer />
            <FeaturedProducts />
            <Discount />
            <h3>Most popular products</h3>
            <h3>Just arrived</h3>
            <DownloadApp />
            <LookingFor />
            <Assure />
        </>
    );
}

export default Home;