import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import Collection from "./pages/Collection/Collection";
import Category from "./pages/Category/Category";
import ContactUs from "./pages/ContactUs/ContactUs";
import SearchComponent from "./components/Search/Search";

function App() {
  const onFocus = () => {
    document.title = "TRENDS";
  };

  const offFocus = () => {
    document.title = "TRENDS";
  };

  const onBlur = () => {
    document.title = "📞 Trends calling...";
  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("focus", offFocus);
      window.removeEventListener("blur", onBlur);
    };
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="collection" element={<Collection />}></Route>
          <Route path="category" element={<Category />}></Route>
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="search" element={<SearchComponent />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
