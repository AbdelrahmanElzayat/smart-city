import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import NavMobile from "./NavMobile";
const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <header className="py-3 md:py-4 lg:py-6 sticky top-0 left-0 w-full backdrop-blur-custom z-50">
      <div className="container">
        <div className="flex items-center justify-between gap-3">
          <div className="logo">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" className="w-[150px] h-[44px]" />
            </NavLink>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              <li>
                <NavLink
                  to={"/"}
                  className={(navClass) =>
                    `link text-textPrimary text-xs font-light capitalize opacity-75 ${
                      navClass.isActive ? "activeNav" : ""
                    }`
                  }
                >
                  الرئيسيـة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={(navClass) =>
                    `link text-textPrimary text-xs font-light capitalize opacity-75 ${
                      navClass.isActive ? "activeNav" : ""
                    }`
                  }
                >
                  منهجية الشركة فى ادارة المشروع
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={(navClass) =>
                    `link text-textPrimary text-xs font-light capitalize opacity-75 ${
                      navClass.isActive ? "activeNav" : ""
                    }`
                  }
                >
                  مراحل انشاء المشروع
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/project-parts"}
                  className={(navClass) =>
                    `link text-textPrimary text-xs font-light capitalize opacity-75 ${
                      navClass.isActive ? "activeNav" : ""
                    }`
                  }
                >
                  اجزاء المشروع
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={(navClass) =>
                    `link text-textPrimary text-xs font-light capitalize opacity-75 ${
                      navClass.isActive ? "activeNav" : ""
                    }`
                  }
                >
                  المنصة و غرفة التحكم
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={(navClass) =>
                    `link text-textPrimary text-xs font-light capitalize opacity-75 ${
                      navClass.isActive ? "activeNav" : ""
                    }`
                  }
                >
                  شركاؤنا
                </NavLink>
              </li>
            </ul>
          </nav>
          <Link
            to={"/"}
            className="hidden lg:block rounded-lg bg-[#C8A04F] shadow-custom py-3 px-6 text-white text-xs font-normal text-center"
          >
            تواصل معنا
          </Link>
          <button
            className="md:hidden text-[#C8A04F] text-2xl"
            onClick={toggleMobileNav}
          >
            ☰
          </button>
          {isMobileNavOpen && <NavMobile closeMenu={toggleMobileNav} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
