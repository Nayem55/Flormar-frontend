
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTruck, faStar, faCartShopping, faBurst} from '@fortawesome/free-solid-svg-icons'
import Banner from '../../Components/Banner/Banner';
import Featured from '../../Components/Featured/Featured';

const Home = () => {
    return (
        <div className='home'>
            <div className='flex justify-center py-6'>
                <p className='font-bold mr-12'><FontAwesomeIcon icon={faBurst}></FontAwesomeIcon> EXCLUSIVE IMPORTER </p>
                <p className='font-bold mr-12'><FontAwesomeIcon icon={faTruck}></FontAwesomeIcon> SHIPPING ACCROSS BANGLADESH </p>
                <p className='font-bold mr-12'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> GENUINE PRODUCT GUARANTEE </p>
                <p className='font-bold mr-12'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> FREE DELIVERY ABOVE 999 TK. </p>
            </div>
            <div>
                <Banner></Banner>
            </div>
            {/* Featured category */}
            <div>
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;