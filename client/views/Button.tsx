import type { Component } from "solid-js";

import styles from "./../App.module.css";
import { createSignal } from "solid-js";

export const Button: Component = () => {
  const [isPressed, setIsPressed] = createSignal(false);
  const onClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 1000);
  };
  return (
    <button
      class={isPressed() ? styles.active + " " + styles.button : styles.button}
      onClick={onClick}
    />
  );
};
