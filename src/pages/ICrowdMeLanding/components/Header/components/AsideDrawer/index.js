import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-scroll';

import './styles.scss';

const AsideDrawer = ({ links, isOpen }) => {
  const modify = classNames({
    'aside--is-open': isOpen,
  });

  return (
    <aside className={`aside ${modify}`}>
      {links.map(({ label, to }, index) => {
        return (
          <div className="aside__item-wrapp" key={index}>
            <Link
              className="navbar__item"
              activeClass="navbar__item--active"
              to={to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              isDynamic={true}
            >
              {label}
            </Link>
          </div>
        );
      })}
    </aside>
  );
};

export default AsideDrawer;
