import { Link, BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Post from "./Post";
import Home from "./Home";

let Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <BrowserRouter>
        <Route exact="/" component={Home}/>
        <Route exact="/signin" component={Login}/>
        <Route exact="/post" component={Post}/>
        <Route exact="/dashboard" component={Dashboard}/>
        </BrowserRouter>
    </div>
    );
}

export default Navbar;