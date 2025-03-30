import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button disabled>nothing</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Primary and Large
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        Baidu
      </Button>
    </div>
  );
}

export default App;
