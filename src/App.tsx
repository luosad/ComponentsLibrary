import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

import { Menu } from "./components/Menu/menu";
import MenuItem from "./components/Menu/menu-item";
import SubMenu from "./components/Menu/subMenu";

import Icon from "./components/Icon/icon";
import { library, Library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <div className="App">
      {/* Button组件 */}
      {/* <Button disabled>nothing</Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Large}>
        Default
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        larger
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        smaller
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        danger
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        Baidu
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
        disabled
      </Button> */}

      {/* Menu组件 */}
      <Menu
        defaultIndex={"0"}
        onSelect={(index) => console.log(index)}
        mode="horizontal"
      >
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link 2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
          <MenuItem>dropdown 3</MenuItem>
        </SubMenu>
        <MenuItem>cool link 3</MenuItem>
      </Menu>
      {/* 纵向 */}
      <Menu
        defaultIndex={"0"}
        onSelect={(index) => console.log(index)}
        mode="vertical"
        defaultOpenSubMenus={["2"]}
      >
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link 2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
          <MenuItem>dropdown 3</MenuItem>
        </SubMenu>
        <MenuItem>cool link 3</MenuItem>
      </Menu>

      {/* Icon组件 */}
      {/* <Icon icon="arrow-down" theme="primary" size="10x" /> */}
    </div>
  );
}

export default App;
