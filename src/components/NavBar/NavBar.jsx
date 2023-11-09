import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavoriteContext from "../../contexts/FavoriteContext";

const NavBar = () => {
  const { favPhones } = useContext(FavoriteContext);
  const setLinkStatus = ({ isActive, isPending }) => {
    if (isPending) {
      return "pending";
    } else if (isActive) {
      return "text-[#9333ea] text-lg font-semibold underline";
    } else {
      return "text-lg";
    }
  };
  const navBarLinks = (
    <>
      <li>
        <NavLink to="/" className={setLinkStatus}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorites" className={setLinkStatus}>
          Favorites
          {favPhones.length ? (
            <div className="lg:relative right-3 bottom-3 badge  border-0 text-red-600 bg-transparent">
              {favPhones.length}
            </div>
          ) : (
            ""
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={setLinkStatus}>
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-xl">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBarLinks}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            React Phone Shop
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navBarLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
