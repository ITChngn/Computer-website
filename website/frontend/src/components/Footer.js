import React from "react";
import "../styles/footer.css";

import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <div className="socialmedia">
              <img
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/401198999_1832916347161090_3157211743369510353_n.png?stp=dst-png_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_ohc=9zs3akfgw44AX_NFpQA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRvGp4m6GlVNgbbSqkllrj7-bTL7iDlnNfQWbVEEfa5FQ&oe=65A10100"
                alt="My Logo"
              />
              <div className="socialmedia-icons">
                <FaFacebookF className="socialmedia-icons-logo" />
                <FaSquareXTwitter className="socialmedia-icons-logo" />
                <FaLinkedinIn className="socialmedia-icons-logo" />
                <FaInstagram className="socialmedia-icons-logo" />
              </div>
            </div>
          </div>

          <div className="sb_footer-links_div">
            <h4>Үндсэн цэс</h4>
            <p>Бүтээгдэхүүний Ангилал</p>
            <p>Компьютер Угсрах</p>
            <p>Холбоо Барих</p>
          </div>
          <div className="sb_footer-links_div">
            <h4>Туслах цэс</h4>
            <p>Мэдээ, Мэдээлэл</p>
            <p>Түгээмэл Асуулт</p>
            <p>Тусламж</p>
            <p>Үйлчилгээний Нөхцөл</p>
            <p>Санал Хүсэлт</p>
          </div>
          <div className="sb_footer-links_div">
            <h4>Холбоо барих</h4>
            <p>
              <IoPhonePortraitOutline />
              +976 12345678
            </p>
            <p>
              <CiMail />
              info@techstore.mn
            </p>
            <p>
              <MdOutlinePlace />
              Гадаадад
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copy-right">
            <p>@{new Date().getFullYear()} Codeinn. All right reversed.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div className="sb_footer-below-term">
                <p>Terms & Conditions</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
