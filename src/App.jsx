import "./App.css";
import Navbar from "./components/Navbar";
import CategoryCards from "./components/CategoryCards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionHeader from "./components/SectionHeader";
import Carousel from "./components/Carousel";
import ProductCarousel from "./components/ProductCarousel";
import BCAAProductCarousel from "./components/BCAAProductCarousel";
import CreatineProductCarousel from "./components/CreatineProductCarousel";
import CategoryCard from "./components/CategoryCard";
import CategorySection from "./components/CategorySection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <CategoryCards />
      <Carousel />
      <SectionHeader title="WHEY PROTEINS" buttonText="MORE" />
      <ProductCarousel />
      <SectionHeader title="BCAA & EAA" buttonText="MORE" />
      <BCAAProductCarousel />
      <SectionHeader title="CREATINE & Pre-Workout" buttonText="MORE" />
      <CreatineProductCarousel />
      <CategorySection />
      <TestimonialsCarousel />
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Categories />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
        {/* <Route path="/" element={<Brands />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
