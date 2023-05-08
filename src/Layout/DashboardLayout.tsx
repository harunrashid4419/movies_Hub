import React, { useContext } from "react";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiFilm } from "react-icons/bi";
import { MdOutlineRequestQuote } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../UserContext/UserContext";

const DashboardLayout = () => {
  const { user }: any = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile container">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div
          style={{
            borderRadius: "5px",
            border: "1px solid #ffffff52",
          }}
          className="drawer-content flex-col bg-[#0B0F29] mt-24 mb-12 lg:ml-8"
        >
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul
            style={{
              borderRadius: "5px",
              border: "1px solid #ffffff52",
              padding: "48px 20px",
            }}
            className="menu mb-12 mt-24 w-72 bg-[#0B0F29] text-base-content"
          >
            <li className="text-white text-xl mb-3">
              <NavLink
                style={{ borderRadius: "5px" }}
                className={({ isActive }) =>
                  isActive ? "bg-[#E0D5D5] && text-red-600" : "undefined"
                }
                to="/dashboard/myRequest"
              >
                <MdOutlineRequestQuote /> My Request
              </NavLink>
            </li>
            {isAdmin && (
              <>
                <li className="text-white text-xl mb-3">
                  <NavLink
                    style={{ borderRadius: "5px" }}
                    className={({ isActive }) =>
                      isActive ? "bg-[#E0D5D5] && text-red-600" : "undefined"
                    }
                    to="/dashboard/user"
                  >
                    <FaUsers /> Users
                  </NavLink>
                </li>
                <li className="text-white text-xl mb-3">
                  <NavLink
                    style={{ borderRadius: "5px" }}
                    className={({ isActive }) =>
                      isActive ? " bg-[#E0D5D5] && text-red-600" : "undefined"
                    }
                    to="/dashboard/UserRequestedMovies"
                  >
                    <BiFilm /> Requested Movies
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
