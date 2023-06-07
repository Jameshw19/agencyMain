import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer__container">
        <div className="footer__row row__column">
          <div className="footer__list">
            {/* <div className="footer__icons--list">
              <a href="">
                <GrFacebookOption className="footer__icon" />
              </a>
              <a href="">
                <AiOutlineTwitter className="footer__icon" />
              </a>
              <a href="">
                <AiOutlineInstagram className="footer__icon" />
              </a>
            </div> */}
          </div>
          <div className="footer__copyright">
            Copyright &copy; {new Date().getFullYear()} We-Mu
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
