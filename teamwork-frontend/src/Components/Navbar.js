import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="#">Tee_W</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link react-links" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link react-links" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link react-links" to="/post">Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link react-links" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link react-links" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link react-links" to="/feed">Feed</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}