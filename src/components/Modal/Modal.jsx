import React, { Component } from "react";
import { ModalStyled, Overlay } from "./StyledModal";
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  render() {
    return (
      <Overlay>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Overlay>
    );
  }
}

export default Modal;
