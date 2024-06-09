import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={clsx(
        sidebarMenu
          ? 'sidebar-menu'
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ''}`
      )}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + '/home-fashion'}>
              {t('home')}
              {sidebarMenu ? (
                <span>
                  <i className=""></i>
                </span>
              ) : (
                <i />
              )}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/shop-grid-standard'}>
              {t('Shop')}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/shop-grid-standard'}>
              {t('Service')}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/contact'}>
              {t('Contact')}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/about'}>
              {t('About')}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
