import $ from "jquery";

class Modal {
  constructor() {
    this.openModalBtn = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalBtn = $(".modal__close");
    this.events();
  }

  events() {
    //clicking the open modal btn
    this.openModalBtn.click(this.openModal.bind(this));
    //click the x button
    this.closeModalBtn.click(this.closeModal.bind(this));
    //push any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--vis");
    this.closeModalBtn.addClass("modal--vis");
    //ignore the # link scrolling
    return false
  }

  closeModal() {
    this.modal.removeClass("modal--vis");
    this.closeModalBtn.removeClass("modal--vis");
  }
}

export default Modal;
