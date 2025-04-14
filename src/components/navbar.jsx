import "./hero.css"
import logo from "../images/main-logo.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar(){
    return(
        <>
            <nav className="navbar">
             <div className="navbar-content">
                <div className="navbar-menu">
                  <a href="/" className="navbar-logo">
                  <img src={logo} alt="The Relax Beach Logo" className="logo" /> 
                  </a>
                </div>
                < ul className="navbar-list">
                  < li className="navbar-item"><a href="/">Home</a></li>
                  < li className="navbar-item"><AnchorLink href='#about'>About</AnchorLink></li>
                    <li className="navbar-item"><AnchorLink href="#gallery">Gallery</AnchorLink></li>
                    <li className="navbar-item"><AnchorLink href="#footer">Contact</AnchorLink></li>
                  </ul>
                <div className="navbar-contact">
                  <span className="tobook"><p>TO BOOK</p></span>
                  <span className="phonenum"><a href="tel:+919188211822">9188211822</a></span>
                </div>
              </div>
            </nav>
        </>
    )
}