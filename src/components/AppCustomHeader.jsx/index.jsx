import React from "react";

export default function AppCustomHeader() {
  return (
    <nav className="navbar navbar--fixed-top">
      <div className="navbar__inner">
        <div className="navbar__items">
          <a className="navbar__brand" href="/">
            <div className="navbar__logo">
              <img
                src="/img/logo.png"
                alt="TRGT"
                className="themedImage_node_modules-@docusaurus-theme-classic-lib-next-theme-ThemedImage-styles-module themedImage--light_node_modules-@docusaurus-theme-classic-lib-next-theme-ThemedImage-styles-module"
              />
            </div>
            <b className="navbar__title"></b>
          </a>
          <a
            aria-current="page"
            className="navbar__item navbar__link navbar__link--active"
            href="/docs/developer/holidaybot"
          >
            Developer Docs
          </a>
        </div>
        <div className="navbar__items navbar__items--right">
          <div className="toggle_node_modules-@docusaurus-theme-classic-lib-next-theme-ColorModeToggle-styles-module colorModeToggle_node_modules-@docusaurus-theme-classic-lib-next-theme-Navbar-Content-styles-module"></div>
        </div>
      </div>
      <div role="presentation" className="navbar-sidebar__backdrop"></div>
    </nav>
  );
}
