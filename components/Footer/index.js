//FOOTER COMPONENT

//IMPORTING
import Image from "next/image";
import Newsletter from "../Newsletter";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

//EXPORTING FOOTER
export default function Footer({ config }) {
  return (
    <>
      <Newsletter className="mt-12" />
      <footer className="footer py-12 px-8 md:px-0 flex bg-gradient-to-br from-primary-dark via-primary-light to-primary-light">
        <div className="m-auto container flex flex-col md:flex-row py-12 items-center font-medium">
          <div className="text-center md:text-left md:w-6/12 pt-12 md:pt-0">
            <Image
              src="/images/logo.svg"
              alt={config.siteTitle}
              width={176}
              height={36}
            />
            <p className="pt-4 md:mr-64">
              We Simplify Your Life By Simplifying Your Payments
            </p>
          </div>
          <div className="text-center md:text-right md:w-6/12 pt-12 md:pt-0">
            <ul className="flex space-x-8 justify-center md:justify-end">
              <li>
                <a href="#">
                  <FiFacebook className="text-4xl" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiInstagram className="text-4xl" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiTwitter className="text-4xl" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiLinkedin className="text-4xl" />
                </a>
              </li>
            </ul>
            <ul className="flex space-x-8 md:justify-end mt-5 font-medium text-lg">
              <li>Termos de uso</li>
              <li>Política de privacidade</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <span className="copyright-text">
          Seladon Enterprise 2021-2022 | All rights reserved
        </span>
      </div>
    </>
  );
}
