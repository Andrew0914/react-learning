import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div className={styles.backdrop} onClick={props.onResume}>
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
    </div>
  );
}

export default ErrorModal;
