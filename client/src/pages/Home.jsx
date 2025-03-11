import DownloadApp from "../components/DownloadApp";
import Assure from "../components/Assure";
import LookingFor from "../components/LookingFor";
import HeroSection from "../components/HeroSection";
import Offer from "../components/Offer";
import Discount from "../components/Discount";

const Home = () => {
    return (
        <>
            <HeroSection />
            <h3>Category</h3>
            <h3>Best selling products</h3>
            <Offer />
            <h3>Featured products</h3>
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