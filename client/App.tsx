import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Socket } from "./netoworking/Socket";

const App: Component = () => {
  const onMessage = (buttonNumber: number) => {
    console.log(buttonNumber);
  };
  let socket = new Socket();

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Button socket={socket} buttonNumber={0} />
        <Button socket={socket} buttonNumber={1} />
      </header>
    </div>
  );
};

export default App;
