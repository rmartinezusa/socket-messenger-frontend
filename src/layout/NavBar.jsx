import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../services/authSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/navbar.css"

function Navbar() {
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        dispatch(logout());
        navigate("/");
    }

    return (
        <nav className="navbar">
            <div className="nav-links">
                { token ? (
                    <NavLink onClick={handleLogout}>
                        Log Out
                    </NavLink>
                ) : (
                    <>
                        <NavLink to="/login">
                            login
                        </NavLink>
                        <NavLink to="/register">
                            register
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;