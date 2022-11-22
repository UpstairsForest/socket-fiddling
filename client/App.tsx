import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Socket } from "./netoworking/Socket";

const App: Component = () => {
  let socket = new Socket();

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div class={"container"}>
          <div class={"row"} style={{}}>
            <Button socket={socket} buttonNumber={0} />
            <Button socket={socket} buttonNumber={1} />
            <Button socket={socket} buttonNumber={2} />
          </div>
          <div>
            <Button socket={socket} buttonNumber={3} />
            <Button socket={socket} buttonNumber={4} />
            <Button socket={socket} buttonNumber={5} />
          </div>
          <div>
            <Button socket={socket} buttonNumber={6} />
            <Button socket={socket} buttonNumber={7} />
            <Button socket={socket} buttonNumber={8} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
