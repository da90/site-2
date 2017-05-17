import MobileMenu from "./modules/MobileMenu";
import RevealScroll from "./modules/RevealScroll";
import $ from "jquery";
import StickyMenu from "./modules/StickyMenu";
import Modal from "./modules/Modal";

var mobileMenu = new MobileMenu();
new RevealScroll($(".feature-item"), "85%");
new RevealScroll($(".testimonial"), "60%");
var stickyMenu = new StickyMenu();
var modal = new Modal();
