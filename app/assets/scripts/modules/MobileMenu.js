import $ from "jquery";

class MobileMenu {
  constructor() {
    this.siteHeader = $(".header");
    this.menuIcon = $(".header__menu-i");
    this.menuContent = $(".header__menu");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("header__menu--vis");
    this.siteHeader.toggleClass("header--expand");
    this.menuIcon.toggleClass("header__menu--x")
  }
}

export default MobileMenu;
