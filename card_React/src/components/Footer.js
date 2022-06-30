import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <a href="#youtube" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="#facebook" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#twitter" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#instagram" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </footer>
  );
}
