import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealScroll {
  constructor(el, offset) {
    this.itemsToReveal = el;
    this.offsetPer = offset;
    this.hideInit();
    this.createWaypoints();
  }

  hideInit() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
        var currentItem = this;
        new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--vis");
        },
        offset: that.offsetPer
      });
    });
  }
}

export default RevealScroll;
