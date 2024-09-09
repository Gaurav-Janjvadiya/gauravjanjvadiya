import { Link } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="">
      <button
        className="btn material-symbols-outlined fs-1 p-2 p-md-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        menu
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
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
            to="/profile"
            className="btn-light nav-link fs-3 fs-md-4 fs-lg-5"
            aria-label="User Profile"
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="btn-light nav-link fs-3 fs-md-4 fs-lg-5"
            aria-label="Settings"
          >
            Settings
          </Link>
          <Link
            to="/logout"
            className="btn-light nav-link fs-3 fs-md-4 fs-lg-5"
            aria-label="Logout"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
