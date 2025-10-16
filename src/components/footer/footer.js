import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// "@fortawesome/free-regular-svg-icons": "^5.15.1",

import {
  faGithub,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footCont">
        <span className="copyrightText">
          Copyright © {new Date().getFullYear()}. Haruki Mizuno. All rights reserved
        </span>
        <div className="socialinks">
          <span>Follow me</span>
          <a href="https://github.com/0x0Zeus" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/haruki-mizuno-6310a6365/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:100terry001@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://t.me/+19023558773" target="_blank">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://whatsapp.com/chat/+13192894564" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  )
}
