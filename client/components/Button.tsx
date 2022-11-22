import styles from "./../App.module.css";
import { createSignal } from "solid-js";
import { Socket } from "../netoworking/Socket";

export const Button = (props: { socket: Socket; buttonNumber: number }) => {
  const [buttonStyle, setButtonStyle] = createSignal(styles.button);

  const onMessage = (buttonNumber: number) => {
    if (buttonNumber == props.buttonNumber) {
      setButtonStyle(styles.buttonHim);
      setTimeout(() => setButtonStyle(styles.button), 1000);
    }
  };
  const onClick = () => {
    props.socket.send(props.buttonNumber).then(() => {
      setButtonStyle(styles.buttonMe);
      setTimeout(() => setButtonStyle(styles.button), 1000);
    });
  };

  props.socket.subscribe(onMessage);

  return <button class={buttonStyle()} onClick={onClick} />;
};
