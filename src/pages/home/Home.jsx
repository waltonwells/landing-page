import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import assets from '../../assets/lag.jpeg'


const Home = () => {
  return (
    <div>
      
      
      <div className="imgCont">
<img 
src={assets} alt="" width='200' height='200'/>   
</div>
<Header/>
      <div className="homeContainer">

        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
