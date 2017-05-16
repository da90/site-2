import MobileMenu from "./modules/MobileMenu";
import RevealScroll from "./modules/RevealScroll";
import $ from "jquery";
import StickyMenu from "./modules/StickyMenu";

var mobileMenu = new MobileMenu();
new RevealScroll($(".feature-item"), "85%");
new RevealScroll($(".testimonial"), "60%");
var stickyMenu = new StickyMenu();
