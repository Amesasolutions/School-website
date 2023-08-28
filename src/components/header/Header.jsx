import React, { useRef, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  const stickyHeaderFuc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFuc();

    return window.removeEventListener("scroll", stickyHeaderFuc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[70px] leading-[70px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ===== logo start ====== */}
          <Link to="/">
            <figure className="w-[9rem]">
              <img src={logo} alt="somali school" />
            </figure>
          </Link>
          {/* ===== logo end ====== */}
          {/* ===== menu links start ====== */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex flex-col md:flex-row gap-0 md:gap-8">
              <li>
                <Link
                  to="/"
                  className={`text-[#222] font-medium hover:text-primaryColor ${
                    location.pathname === "/"
                      ? "text-primaryColor"
                      : "text-txtColor"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About-us"
                  className={`text-[#222] font-medium hover:text-primaryColor ${
                    location.pathname === "/About-us"
                      ? "text-primaryColor"
                      : "text-txtColor"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/Our-Schools"
                  className={`text-[#222] font-medium hover:text-primaryColor ${
                    location.pathname === "/Our-Schools"
                      ? "text-primaryColor"
                      : "text-txtColor"
                  }`}
                >
                  Our School
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact-us"
                  className={`text-[#222] font-medium hover:text-primaryColor ${
                    location.pathname === "/Contact-us"
                      ? "text-primaryColor"
                      : "text-txtColor"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* ===== menu links end ====== */}
          {/* ===== menu right start ====== */}
          <div className="flex items-center gap-4">
            {/* button right */}
            <Link to="/Contact-us">
              <span
                className="hidden sm:flex h-[40px] items-center justify-center  bg-white border border-solid border-primaryColor text-primaryColor py-2 px-4 
              rounded-[8px] cursor-pointer hover:bg-primaryColor hover:text-white ease-in duration-300"
              >
                <i class="ri-mail-send-line"></i>
                <span className="pl-2">Contact</span>
              </span>
            </Link>

            {/* Menu toggle */}
            <span
              onClick={toggleMenu}
              className="flex md:hidden items-center justify-center bg-primaryColor w-[40px] h-[40px] leading-[40px] text-center text-white 
            text-2xl rounded-[5px] cursor-pointer"
            >
              {/* <i class="ri-menu-4-fill"></i> */}
              <i class="ri-menu-3-fill"></i>
            </span>
          </div>
          {/* ===== menu right end ====== */}
        </div>
      </div>
    </header>
  );
}

export default Header;
