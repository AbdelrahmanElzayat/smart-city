import React from "react";
import { Link } from "react-router-dom";

const NavMobile = ({ closeMenu }) => {
  const links = [
    { href: "/", label: "الرئيسيـة" },
    { href: "/", label: "منهجية الشركة فى ادارة المشروع" },
    { href: "/", label: "مراحل انشاء المشروع" },
    { href: "/project-parts", label: "اجزاء المشروع" },
    { href: "/control-room", label: "المنصة و غرفة التحكم" },
    { href: "/", label: "شركاؤنا" },
    { href: "/", label: "تواصل معنا" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-screen bg-white z-[999] flex flex-col items-center justify-center gap-8 ">
      <button
        className="absolute top-4 right-4 text-textPrimary text-2xl font-bold"
        onClick={closeMenu}
      >
        ✕
      </button>
      <ul className="flex flex-col items-center justify-center gap-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="text-textPrimary text-lg font-medium uppercase"
              onClick={() => {
                closeMenu();
                // pathname === "/" ? window.scrollTo(0, 0) : closeMenu();
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
