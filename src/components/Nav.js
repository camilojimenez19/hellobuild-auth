import React from "react";
import { useAuth } from "../context/AuthContex";

function Nav({ setCurrentPage, searchOnChange, search }) {

  const { logout, setIsSignIn } = useAuth();  

  /* Handle for logout user */
  const handleLogout = async () => {
    await logout();
    setIsSignIn(false);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            CamiloDev
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#" onClick={() => setCurrentPage('repositories')}>
                  Repositories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#" onClick={() => setCurrentPage('profile')} >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={handleLogout}
                  href="/#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Logout
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                value={search}
                onChange={searchOnChange}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
