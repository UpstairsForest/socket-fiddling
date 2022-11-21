import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Button } from "./views/Button";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Button />
        <Button />
      </header>
    </div>
  );
};

export default App;
