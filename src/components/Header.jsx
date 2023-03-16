import './Header.css';
import logo from './logo.png';
import profileicon from './profile-icon.png';
import basket from './basket.png';
import searchicon from './search.png';
const Header=()=>{
    return(
        <>
        <div className='header'>
        <div className="head">
<div className="contact-info">
<span>+98933829666</span>
<span>m.monfared9944@gmail.com</span>
</div>
<div className="faq">
<span>FAQ's</span>
<span>Need Helps</span>
<span>EN</span>
<span>$</span>
</div>
        </div>
        <div className="search-box">
            <img src={logo}/>
            <div className='input-search'>
                <img src={searchicon}/>
                <input type="text" placeholder='Search and hit enter...'/>
           
            </div>
            <div className='profile'>
            <div className='profile-icon'>
                    <img src={profileicon}/>
                </div>
                <div className='basket'>
                <img src={basket}/>
                </div>
            </div>
            </div>
            <div className="navbar">

            <div className='categories'>
            <span>Categories</span>
            </div>
            <div className="menu">
            <span>

            </span>
            <span>
                Home
                </span>
                <span>
                Pages
                </span>
                <span>
                User Account
                </span>
                <span>
                Vendor Account
                </span>
                <span>
                Track My Order
                </span>
                <span>
              contact
                </span>
            </div>
            </div>
            </div>
        </>
    )
}
export default Header;