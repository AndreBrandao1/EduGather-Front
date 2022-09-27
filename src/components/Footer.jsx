import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="social">
            <span>Get connected with us on social Networks</span>
            <div>
              <FontAwesomeIcon icon={FaFacebook} with={18} height={18} />
              <FontAwesomeIcon icon={FaInstagram} with={18} height={18} />
              <FontAwesomeIcon icon={FaWhatsapp} with={18} height={18} />
              <FontAwesomeIcon icon={FaLinkedin} with={18} height={18} />
            </div>
          </div>
          <div className="content">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="bottom">
            <span>&copy; 2022 Copyright NumericAll</span>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            display: flex;
            width: 100%;
            height: 350px;
            backgroud-color: #022444;
            bottom: 0;
            position: absolute;
          }
        `}
      </style>
    </>
  );
}
