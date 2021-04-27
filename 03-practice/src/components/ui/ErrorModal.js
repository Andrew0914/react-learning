import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import { createPortal } from "react-dom";
import React from "react";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onResume}></div>;
}

function Modal(props) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onResume}>Ok</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <>
      {createPortal(
        <Backdrop onResume={props.onResume} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <Modal
          onResume={props.onResume}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ErrorModal;
