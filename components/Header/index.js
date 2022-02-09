//HEADER COMPONENT

//IMPORTING
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { useState, useEffect } from "react";

//EXPORTING HEADER
export default function Header({ config }) {
  let [navToggle] = useState(null);

  if (process.browser) {
    var nav = document.getElementById("site-menu");
    var header = document.getElementById("top");

    //CONDITIONAL
    if (nav && header) {
      window.addEventListener("scroll", function () {
        if (window.scrollY >= 400) {
          nav.classList.add("nav-sticky");
          header.classList.add("pt-scroll");
        } else {
          nav.classList.remove("nav-sticky");
          header.classList.remove("pt-scroll");
        }
      });
    }

    //NAV TOGGLE
    navToggle = function navToggle() {
      var btn = document.getElementById("menuBtn");
      var nav = document.getElementById("menu");
      if (btn) {
        btn.classList.toggle("open");
      }
      if (nav) {
        nav.classList.toggle("flex");
        nav.classList.toggle("hidden");
      }
    };
  }

  useEffect(() => {}, [navToggle]);

  //RETURN
  return (
    <>
      <header
        id="top"
        className="bg-gradient-to-br from-primary-dark via-primary-light to-primary-light"
      >
        <div className="mx-auto py-8 container px-8 md:px-0">
          <div className="flex flex-row">
            <div className="flex">
              <Link href="#">
                <>
                  <Image
                    src="/images/logo.svg"
                    alt={config.siteTitle}
                    width={176}
                    height={36}
                  />
                </>
              </Link>
            </div>
            <div id="site-menu" className="flex-grow relative">
              <div
                id="menuBtn"
                className="w-full md:w-auto flex flex-row md:flex-none justify-end flex-no-wrap md:justify-between items-center"
              >
                <button
                  className="hamburger block md:hidden focus:outline-none"
                  type="button"
                  onClick={navToggle}
                >
                  <span className="hamburger__top-bun"></span>
                  <span className="hamburger__bottom-bun"></span>
                </button>
              </div>
              <nav
                id="menu"
                className="transition duration-700 hidden absolute md:static top-16 md:top-0 shadow md:shadow-none bg-primary md:bg-opacity-0 p-5 md:w-auto md:flex flex-col md:flex-row list-none space-x-0 space-y-6 md:space-x-14 md:space-y-0 justify-end md:items-center font-semibold md:py-0 md:pb-0 md:text-lg text-right md:w-full w-60 right-0"
              >
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Support</Link>
                </li>
                <li>
                  <Button
                    className={"transform hover:scale-105 text-sm md:text-lg"}
                    theme="white"
                    text="Download Now"
                  ></Button>
                </li>
              </nav>
            </div>
          </div>
          <div className="flex items-center" style={{ minHeight: "500px" }}>
            <div className="md:w-4/12">
              <h1 className="text-5xl font-bold leading-snug">
                We Simplify Your Life
                <br />
                By Simplifying Your
                <br />
                <span className="heading">Payments</span>
              </h1>
              <p className="mt-8 font-medium">
                Our app is simple and efficient, it'll help you simplifying all
                those payments you have to make everyday. Why don't you just
                give it a shot?!
              </p>
              <div className="mt-12 flex space-x-8">
                <Button theme="dark" text="Download Now"></Button>
                <Button theme="outline" text="Know More"></Button>
              </div>
            </div>
            <div
              className="md:w-8/12 relative"
              style={{ minHeight: "450px", height: "100%" }}
            >
              <div
                className="absolute xl:-top-16"
                style={{ minWidth: "850px", width: "100%" }}
              >
                <Image
                  src="/images/hero.svg"
                  width={1294}
                  height={862}
                  alt={config.siteTitle}
                  layout="responsive"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
