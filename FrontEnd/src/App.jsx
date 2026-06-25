import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header.jsx";
import Home from "./screen/Home.jsx";
import Shop from "./screen/shop.jsx";
import Contact from "./screen/contact.jsx";
import About from "./screen/about.jsx";
import Blog_list from "./screen/blog_list.jsx";
import DashboardScreen from "./screen/dashboard.jsx";
import ProductDetail from "./screen/product_detail.jsx";
import Cart from "./pages/Cart.jsx";
import Shoping_cart from "./screen/shoping_cart.jsx";
import CheckoutForm from "./screen/checkout.jsx";
import SuccessPage from "./screen/success.jsx";
import Faq from "./screen/faq.jsx";
import ProductList from "./screen/productlist.jsx";
import AccountSettings from "./screen/setting.jsx";
import SingleBlog from "./screen/single_blog.jsx";

// Category Pages
import FreshFruit from "./categories/FreshFruit.jsx";
import FreshVegetables from "./categories/FreshVegetables.jsx";
import MeatAndFish from "./categories/MeatAndFish.jsx";
import Snacks from "./categories/Snacks.jsx";
import Beverages from "./categories/Beverages.jsx";
import DairyAndEggs from "./categories/DairyAndEggs.jsx";
import BreadAndBakery from "./categories/BreadAndBakery.jsx";
import GrainsAndPulses from "./categories/GrainsAndPulses.jsx";
import SpicesAndMasala from "./categories/SpicesAndMasala.jsx";
import DiabeticFood from "./categories/DiabeticFood.jsx";
import DishDetergents from "./categories/DishDetergents.jsx";
import Oil from "./categories/Oil.jsx";

import Footer from "./component/footer/footer.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCart } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/single_blog" element={<SingleBlog/>}/>

        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/product_detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shoping_cart" element={<Shoping_cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/view" element={<ProductList/>}/>
        <Route path="/setting" element={<AccountSettings/>}/>
        <Route path="/blog" element={<Blog_list/>}/>
        
        {/* Category Routes */}
        <Route path="/fresh-fruit" element={<FreshFruit />} />
        <Route path="/fresh-vegetables" element={<FreshVegetables />} />
        <Route path="/meat-fish" element={<MeatAndFish />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/dairy-eggs" element={<DairyAndEggs />} />
        <Route path="/bread-bakery" element={<BreadAndBakery />} />
        <Route path="/grains-pulses" element={<GrainsAndPulses />} />
        <Route path="/spices-masala" element={<SpicesAndMasala />} />
        <Route path="/diabetic-food" element={<DiabeticFood />} />
        <Route path="/dish-detergents" element={<DishDetergents />} />
        <Route path="/oil" element={<Oil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
