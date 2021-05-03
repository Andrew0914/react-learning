import Card from "./Card";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onResume}></div>;
}

const ModalBox = (props) => {
  return (
    <Card className={classes.modal}>
      {props.children}
    </Card>
  );
}

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onResume={props.onResume} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalBox {...props} />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default Modal;