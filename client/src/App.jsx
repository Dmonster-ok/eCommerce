import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Preloader from "./components/Preloader"; // Import Preloader
import Swiper from "swiper";
import Chocolat from "chocolat";
import { jarallax } from "jarallax";
import "swiper/css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return; // Prevent initializing scripts when still loading

    // Initialize Chocolat Lightbox
    Chocolat(document.querySelectorAll(".image-link"), {
      imageSize: "contain",
      loop: true,
    });

    // Initialize Swipers
    new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    new Swiper(".category-carousel", {
      slidesPerView: 8,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
        1500: { slidesPerView: 8 },
      },
    });

    document.querySelectorAll(".products-carousel").forEach((carousel) => {
      new Swiper(`#${carousel.id} .swiper`, {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        navigation: {
          nextEl: `#${carousel.id} .products-carousel-next`,
          prevEl: `#${carousel.id} .products-carousel-prev`,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          991: { slidesPerView: 4 },
          1500: { slidesPerView: 5 },
        },
      });
    });

    const thumbSlider = new Swiper(".product-thumbnail-slider", {
      slidesPerView: 5,
      spaceBetween: 20,
      direction: window.innerWidth >= 992 ? "vertical" : "horizontal",
    });

    new Swiper(".product-large-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      thumbs: { swiper: thumbSlider },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Product quantity spinner
    document.querySelectorAll(".product-qty").forEach((el) => {
      const quantityInput = el.querySelector("#quantity");

      el.querySelector(".quantity-right-plus")?.addEventListener("click", (e) => {
        e.preventDefault();
        quantityInput.value = parseInt(quantityInput.value) + 1;
      });

      el.querySelector(".quantity-left-minus")?.addEventListener("click", (e) => {
        e.preventDefault();
        if (parseInt(quantityInput.value) > 0) {
          quantityInput.value = parseInt(quantityInput.value) - 1;
        }
      });
    });

    // Initialize Jarallax
    jarallax(document.querySelectorAll(".jarallax"));
    jarallax(document.querySelectorAll(".jarallax-keep-img"), { keepImg: true });
  }, [loading]); // Re-run effects after loading is finished

  return (
    <>
      {loading && <Preloader setLoading={setLoading} />}

      {!loading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="auth" element={<Auth />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
