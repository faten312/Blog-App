import { Link } from 'react-router-dom';
import SignOut from './SignOut';
import { auth } from './firebase.config'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navHome"><h4>Home</h4></Link>
            <div className="links">
                {auth.currentUser && <Link to="/create"><button className="add">Admin</button></Link>}
                <SignOut />
            </div>
        </nav>
    );
}

export default Navbar;