import {Link, NavLink} from 'react-router-dom';
import './navBar.css';
import Logo from '../images/logo.png';
import {links} from '../data';
import {FaBars} from 'react-icons/fa'


const NavBar = () => {
  return (
    <div>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt='Nav Logo' />
            </Link>
            <ul className='nav__links'>
              {
                links.map(({name, path}, index) => {
                  return (
                    <li>
                      <NavLink to={path}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <button className="nav__toggle-btn">
              <FaBars/>
            </button>
        </div>
    </div>
  )
}

export default NavBar