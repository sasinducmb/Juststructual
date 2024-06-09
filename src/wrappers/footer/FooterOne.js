import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";


const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  return (
    <footer
      className={clsx(
        'footer-area',
        backgroundColorClass,
        spaceTopClass,
        spaceBottomClass,
        extraFooterClass,
        spaceLeftClass,
        spaceRightClass
      )}
    >
      <div className={`${containerClass ? containerClass : 'container'}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? 'col-xl-3 col-sm-4' : 'col-lg-3 col-sm-4'
            }`}
          >
            {/* footer copyright */}
            <FooterCopyright
              footerLogo="/assets/img/logo/logo.png"
              spaceBottomClass="mb-30"
            />
          </div>
          <div
            className={`${
              sideMenu ? 'col-xl-2 col-sm-4' : 'col-lg-2 col-sm-4'
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? 'footer-widget mb-30 ml-95'
                  : 'footer-widget mb-30 ml-50'
              }`}
            >
              <div className="footer-title">
                <h3>HOME</h3>
              </div>
              <div className="footer-title">
                <h3>CONTACT</h3>
              </div>
              <div className="footer-title">
                <h3>SHOP</h3>
              </div>
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? 'col-xl-3 col-sm-4' : 'col-lg-2 col-sm-6'
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? 'footer-widget mb-30 ml-145'
                  : 'footer-widget mb-30 ml-75'
              }`}
            >
              <div className="footer-title">
                <h3>REFUND POLICIES</h3>
              </div>
              <div className="footer-title">
                <h3>TERMS AND CONDITIONS</h3>
              </div>
              <div className="footer-title">
                <h3>PRIVACY POLICY</h3>
              </div>
              <div className="footer-title">
                <h3>HELP CENTER</h3>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? 'col-xl-3 col-sm-8' : 'col-lg-4 col-sm-6'
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? 'footer-widget mb-30 ml-145'
                  : 'footer-widget mb-30 ml-75'
              }`}
            >
            <div className="footer-title">
              <h3>CONTACT US</h3>
            </div>
            <div className="footer-title">
              <h3>+00 98 799 799</h3>
            </div>
            <div className="footer-title">
              <h3>Info@juststructral.com</h3>
            </div>
            {/* footer newsletter */}
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="pt-40"
              sideMenu={sideMenu}
            />
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
