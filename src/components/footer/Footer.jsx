import React from "react";
import logo from "../../assets/images/logo.webp";
import whats from "../../assets/icons/whatsFooter.svg";
import youtube from "../../assets/icons/youtubeBlack.svg";
import twitter from "../../assets/icons/twitterBlack.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#EBE8D8] p-6 mt-[60px]" id="contact-us">
      <div className="container">
        <div className="flex items-start justify-between flex-wrap gap-5">
          <div className="logoSite flex flex-col justify-between gap-8">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-[150px]" />
            </Link>
            <div className="socialIcons flex items-center gap-6">
              <a href="##">
                <img src={whats} alt="whatsapp" />
              </a>
              <a href="##">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="##">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>

          {/* <div className="about flex flex-col gap-3 items-start">
            <h4 className="font-bold text-xs leading-4">عن الموقع</h4>
            <ul className="flex flex-col gap-1 items-start font-extrabold text-xs">
              <li>
                <a href="##">إجراءات الشكاوى</a>
              </li>
              <li>
                <a href="##">الشروط والأحكام</a>
              </li>
              <li>
                <a href="##">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="##">سياسة الكوكيز</a>
              </li>
              <li>
                <a href="##">سياسة الاسترداد</a>
              </li>
              <li>
                <a href="##">المعلومات القانونية</a>
              </li>
            </ul>
          </div> */}
          <div className="about flex flex-col gap-10 lg:items-center justify-between">
            <h4 className="font-extrabold text-textSecondary text-xl leading-4">
              روابط مهمة
            </h4>
            <ul className="flex flex-col lg:flex-row gap-3 items-start font-extrabold text-xs">
              <li>
                <Link to="/">الرئيسية</Link>
              </li>
              <li>
                <Link to="/project-methodology">
                  منهجية الشركة في إدارة المشروع
                </Link>
              </li>
              <li>
                <Link to="/project-stages">مراحل إنشاء المشروع</Link>
              </li>
              <li>
                <Link to="/project-parts">اجزاء المشروع</Link>
              </li>
              <li>
                <Link to="/control-room">المنصة وغرفة التحكم</Link>
              </li>
              <li>
                <Link to="/partners">شركاؤنا</Link>
              </li>
            </ul>
          </div>
          {/* <div className="about flex flex-col gap-3 items-start">
            <h4 className="font-bold text-xs leading-4">عن الباحـة</h4>
            <ul className="flex flex-col gap-1 items-start font-extrabold text-xs">
              <li>
                <a href="##">من نحن</a>
              </li>
              <li>
                <a href="##">كيف يعمل</a>
              </li>
              <li>
                <a href="##">الأمان</a>
              </li>
              <li>
                <a href="##">المستثمر</a>
              </li>
              <li>
                <a href="##">خريطة الموقع</a>
              </li>
              <li>
                <a href="##">الأخبار</a>
              </li>
            </ul>
          </div> */}
          {/* <div className="about flex flex-col gap-3 items-start">
            <h4 className="font-bold text-xs leading-4">شركاؤنا</h4>
            <ul className="flex flex-col gap-1 items-start font-extrabold text-xs">
              <li>
                <a href="##">إجراءات الشكاوى</a>
              </li>
              <li>
                <a href="##">الشروط والأحكام</a>
              </li>
              <li>
                <a href="##">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="##">سياسة الكوكيز</a>
              </li>
              <li>
                <a href="##">سياسة الاسترداد</a>
              </li>
              <li>
                <a href="##">المعلومات القانونية</a>
              </li>
            </ul>
          </div> */}
          <div className="contactInfo flex flex-col gap-10 items-start basis-36">
            <h4 className="font-extrabold text-xl leading-4">بيانات التواصل</h4>
            <div className="flex flex-col items-start gap-5">
              <div
                className="contact flex flex-col gap-1"
                style={{ fontFamily: "Poppins" }}
              >
                <a
                  href="mailto:info@baccoksa.com"
                  className="font-extrabold text-xs opacity-85"
                >
                  info@baccoksa.com
                </a>
                <a
                  href="tel:+966530444084"
                  className="font-extrabold text-xs opacity-85"
                >
                  <bdi>+966530444084</bdi>
                </a>
              </div>
              {/* <div className="font-extrabold text-xs opacity-85">
                <p className="">
                  Springfield House Water Lane, Wilmslow Cheshire, SK9 5BG
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
