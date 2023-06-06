import { Link, NavLink } from 'react-router-dom';
import  './Sidebar.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
            </Link>
            <nav>
                <NavLink to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink to='/about' className='about-link'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink to='/contact' className='contact-link'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <Link target="_blank" to='https://www.linkedin.com/in/sakib669/'>
                        <FontAwesomeIcon
                         icon={faLinkedin} color='#4d4d4e' />
                    </Link>
                </li>
                <li>
                    <Link target="_blank" to='https://github.com/Sakib669'>
                        <FontAwesomeIcon
                         icon={faGithub} color='#4d4d4e' />
                    </Link>
                </li>
                <li>
                    <Link target="_blank" to='https://www.facebook.com/sakib.hossain.75641/'>
                        <FontAwesomeIcon
                         icon={faFacebook} color='#4d4d4e' />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;