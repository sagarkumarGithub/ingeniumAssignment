import "./App.css";
import Banner from "./components/banner/Banner";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Blogs/>
      <Footer />
    </>
  );
}

export default App;
