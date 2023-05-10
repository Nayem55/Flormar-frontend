
import './Home.css'
import Banner from '../../Components/Banner/Banner';
import Featured from '../../Components/Featured/Featured';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import FeaturedCollection from '../../Components/FeaturedCollection/FeaturedCollection';
import About from '../../Components/About/About';
import SpecialProducts from '../../Components/SpecialProducts/SpecialProducts';
import HomeBrands from '../../Components/HomeBrands/HomeBrands'


const Home = () => {
    return (
        <div className='home'>
            <div>
                <Banner></Banner>
            </div>
            <div className='2xl:w-[65%] md:w-[75%] mx-auto'>
                <Featured></Featured>
                <NewArrivals></NewArrivals>
                <FeaturedCollection></FeaturedCollection>
                <SpecialProducts/>
                <HomeBrands/>
                <About></About>
            </div>
  
        </div>
    );
};

export default Home;