import './PopCart.css';
import {Link} from 'react-router-dom'
const PopCart = () => {
    return (
        <div className="pop-cart-container">
            
            
            <hr className='w-full' />
            <Link className='add-btn' to='/shipping'> CHECKOUT NOW</Link>
            <Link className='view-cart' to={'/cart'}> OR VIEW CART </Link>

        </div>
    );
};

export default PopCart;