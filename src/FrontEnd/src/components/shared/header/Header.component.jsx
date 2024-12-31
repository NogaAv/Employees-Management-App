
import { API_ROOT_URL } from '../../../App';
import './header.styles.css';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <header className="main-header">
            <Link className="title-link" to={API_ROOT_URL}><h1>Employees Management App</h1></Link>
        </header>
    );
};

export default Header;