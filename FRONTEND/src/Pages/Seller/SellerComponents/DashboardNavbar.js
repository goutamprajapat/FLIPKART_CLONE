import React, { memo } from "react";
import { BiMessage } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Components/Buttons/Button";

const DashboardNavbar = ({ name, subname }) => {
  const navigate = useNavigate();
  const handleOnClickLogout = () => {
    navigate("/seller");
    localStorage.clear("_token");
  };
  return (
    <div className="flex items-center justify-between border-b navbar">
      <div className="flex-col items-start">
        <div className="text-xl font-semibold tracking-wide dark:text-white ">
          {name}
        </div>
        <div className="text-sm text-personal-900/70 dark:text-personal-20/70">
          {subname}
        </div>
      </div>
      <section className="items-center">
        <div className="flex items-center flex-1 gap-4 text-2xl ">
          <button className="bg-transparent btn btn-circle">
            <div className="indicator">
              <BiMessage className="text-xl" />

              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Button
                    className="py-1 bg-white"
                    onClick={handleOnClickLogout}
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(DashboardNavbar);
