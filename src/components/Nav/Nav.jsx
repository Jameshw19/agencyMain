import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Logo from "../../../public/assets/logo.png";
import Link from "next/link";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  // window.onscroll = () => {
  //   window.scrollY > 800 ? setIsSticky(true) : setIsSticky(false);
  // };

  const isOpen = () => {
    document.body.classList += " menu__open";
  };

  const isClose = () => {
    document.body.classList.remove("menu__open");
  };

  return (
    <section>
      <nav className={`${isSticky && "fixed-top"} nav__custom`}>
        <div className="nav__container ">
          <div className="nav__logo">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              href="/"
              className="nav__logo--link"
              draggable="false"
            >
              <Image className="nav__logo--img" src={Logo} alt="logo" />
            </Link>
          </div>
          <ul className="nav__link--list">
            <li className="nav__link">
              <a
                href="#works"
                className="
                nav__link--anchor 
                link__hover-effect 
                link__hover-effect--pink"
              >
                Works
              </a>
            </li>
            <li className="nav__link">
              <a
                href="#about"
                className="
                nav__link--anchor 
                link__hover-effect 
                link__hover-effect--pink"
              >
                About
              </a>
            </li>
            <li className="nav__link">
              <a
                href="#services"
                className="
                        nav__link--anchor 
                        link__hover-effect 
                        link__hover-effect--pink"
              >
                Services
              </a>
            </li>
            {/* <li className="nav__link">
              <a
                href="#clients"
                className="
                nav__link--anchor 
                link__hover-effect 
                link__hover-effect--pink"
              >
                Clients
              </a>
            </li> */}
            <li className="nav__link">
              <a
                href="#contact"
                className="
                nav__link--anchor 
                link__hover-effect 
                link__hover-effect--pink"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="menu__backdrop">
            <button
              className="btn__menu btn__menu--close"
              onClick={() => isClose()}
            >
              <IoMdClose />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <a
                  href="#header"
                  className="menu__link"
                  onClick={() => isClose()}
                >
                  Home
                </a>
              </li>
              <li className="menu__list">
                <a
                  href="#services"
                  className="menu__link"
                  onClick={() => isClose()}
                >
                  Services
                </a>
              </li>
              <li className="menu__list">
                <a
                  href="#works"
                  className="menu__link"
                  onClick={() => isClose()}
                >
                  Works
                </a>
              </li>
              <li className="menu__list">
                <a
                  href="#about"
                  className="menu__link"
                  onClick={() => isClose()}
                >
                  About
                </a>
              </li>
              {/* <li className="menu__list">
                <a
                  href="#clients"
                  className="menu__link"
                  onClick={() => isClose()}
                >
                  Clients
                </a>
              </li> */}
              <li className="menu__list">
                <a
                  href="#contact"
                  className="menu__link"
                  onClick={() => isClose()}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <ul className="hamburger__wrapper">
            <li>
              <button className="hamburger" onClick={() => isOpen()}>
                <GiHamburgerMenu />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
