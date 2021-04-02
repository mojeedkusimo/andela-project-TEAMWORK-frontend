import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/post">Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/feed">Feed</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;