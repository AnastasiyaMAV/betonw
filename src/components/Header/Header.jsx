/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.scss';

import LittleBtn from '../../ui/buttons/LittleBtn/LittleBtn';
import { pages } from '../../utils/constants';

function Header() {
  const location = useLocation();
  const [menuBox, setMenuBox] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-wrap">
          <div className="header__logo" />
          <h2 className="header__name">Beton-W</h2>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-items">
            {pages.map((page) => (
              <li
                key={page.id}
                className="header__nav-item"
              >
                <NavLink
                  to={page.path}
                  className={`header__navlink
                    ${location.pathname === page.path ? 'header__navlink_active' : ''}
                  `}
                >
                  {page.title}
                </NavLink>
              </li>
            ))}
            <li
              className="header__nav-item"
            >
              <LittleBtn
                text="Заказать"
                href="tel:+79533856934"
                mainColor="#101725"
                bgcColor="#e7ead6"
                addColor="#dfba30"
              />
            </li>
          </ul>
        </nav>

        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" checked={menuBox} />
          <label
            className="menu__btn"
            htmlFor="menu__toggle"
            onClick={() => {
              if (menuBox) {
                setMenuBox(false);
              } else {
                setMenuBox(true);
              }
            }}
          >
            <span />
          </label>
          <ul className={menuBox ? 'menu__box menu__box_active' : 'menu__box'}>
            {pages.map((page) => (
              <li
                key={page.id}
              >
                <NavLink
                  to={page.path}
                  className={`menu__item
                    ${location.pathname === page.path ? 'menu__item_active' : ''}
                  `}
                  onClick={() => {
                    if (menuBox) {
                      setMenuBox(false);
                    } else {
                      setMenuBox(true);
                    }
                  }}
                >
                  {page.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
