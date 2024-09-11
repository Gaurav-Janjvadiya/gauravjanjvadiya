import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <button
              className="btn fs-1 p-2 position-absolute"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
              style={{ top: "10px", left: "10px" }}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header sidebarcmp">
          <button
            type="button"
            className="btn-close btn-sm"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0 sidebarcmp">
          <Link
            to="/"
            className="light nav-link fs-3 fs-md-4 fs-lg-5"
            aria-label="User Profile"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="light nav-link fs-3 fs-md-4 fs-lg-5"
            aria-label="Settings"
          >
            Projects
          </Link>
          <Link
            to="/about-me"
            className="light nav-link fs-3 fs-md-4 fs-lg-5"
            aria-label="Logout"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="light nav-link fs-3 fs-md-4 fs-lg-5"
            aria-label="Logout"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
