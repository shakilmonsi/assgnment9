import React from "react";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HomePart/HomePart.css";

const Header = () => {
  return (
    <div>
      <div className="navbar  bg-black text-white p-0">
        <div className="dropdown dropdown-hover mr-[120px] flex-none">
          <label tabIndex={0} className="btn m-1 lg:hidden">
            <FontAwesomeIcon icon={faBars} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-right"
          >
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "p-2  font-medium bg-opacity-90 bg-orange-600 text-white"
                    : "p-2 font-medium"
                }
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quizes"
                className={({ isActive }) =>
                  isActive
                    ? "p-2  font-medium bg-opacity-90 bg-orange-600 text-white"
                    : "p-2 font-medium"
                }
              >
                Quizes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive
                    ? "p-2  font-medium bg-opacity-90 bg-orange-600 text-white"
                    : "p-2 font-medium"
                }
              >
                {" "}
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "p-2  font-medium bg-opacity-90 bg-orange-600 text-white"
                    : "p-2 font-medium"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Quiz percent</a>
        </div>
        <div className="flex-none bar-item mr-6">
          <ul className="menu menu-horizontal p-0 m-2">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "p-2  font-medium bg-opacity-90 bg-orange-600 text-white"
                    : "p-2 font-medium"
                }
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quizes"
                className={({ isActive }) =>
                  isActive
                    ? "p-2  font-medium bg-opacity-90 bg-orange-600 text-white"
                    : "p-2 font-medium"
                }
              >
                Quizes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive
                    ? "p-2  font-medium bg-opacity-90 bg-orange-600 text-white"
                    : "p-2 font-medium"
                }
              >
                {" "}
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "p-2  font-medium bg-opacity-90 bg-orange-600 text-white"
                    : "p-2 font-medium"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
