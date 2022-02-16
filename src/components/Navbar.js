import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Show</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;