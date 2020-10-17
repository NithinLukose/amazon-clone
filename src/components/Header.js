import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {auth} from '../firebase/firebase'

const Header = ({count,user}) => {

    const handleAuthentication = () => {
        if(user){
            auth.signOut()
        }
    }

    return(
        <div className="header">
            <Link to='/'>
                <img alt="amazon_logo" className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header_search">
                <input 
                    className="header_searchInput"
                    type="text"
                />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div className="header_option" onClick={handleAuthentication}> 
                        <span className='header_optionLineOne'>hello {user?user.email:"Guest"}</span>
                        <span className='header_optionLineTwo'>{user?"Sign out":"Sign in"}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>
                <div className="header_option">

                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>prime</span>   

                </div>

                <div className="header_optionBasket">
                    <Link to='/checkout'>
                        <ShoppingBasketIcon  />
                    </Link>    
                    <span className="header_optionLineTwo header_basketCount">{count}</span>
                    
                </div>
                
            </div>

        </div>
    )
}

export default Header