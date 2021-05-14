import AboutUs from "./components/about_us";
import Categories from "./components/categories";
import ClassicBridal from "./components/classic_bridal";
import Collections from "./components/collections";
import Events from "./components/events";
import Footer from "./components/footer";
import Header from "./components/header/index";
import InstagramSection from "./components/instagram";
import OriginalDesign from "./components/original_design";
import SelectedForYou from "./components/selected_for_you";
import Showcase from "./components/showcase";
import Stores from "./components/sotres";
import TheLatest from "./components/the_latest_items";
import './GlobalStyles.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Showcase/>
      <OriginalDesign/>
      <TheLatest/>
      <ClassicBridal/>
      <Categories/>
      <SelectedForYou/>
      <Collections/>
      <AboutUs/>
      <Events/>
      <InstagramSection/>
      <Stores/>
      <Footer/>
    </div>
  );
}

export default App;
