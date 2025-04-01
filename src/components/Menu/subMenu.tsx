import React, { useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menu-item";
import Icon from "../Icon/icon";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const context = React.useContext(MenuContext);
  const { index, title, className, style, children } = props;
  //纵向menu自动展开子菜单
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpend =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;
  const [menuOpen, setMenuOpen] = useState(isOpend);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical",
  });

  /* 事件处理函数 */
  //处理点击事件，点击标题是切换子菜单的显示和隐藏
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  //单独对于横向菜单的处理，鼠标悬停在子菜单上时，300ms后显示子菜单
  //如果鼠标离开子菜单，300ms后隐藏子菜单
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };

  //根据不同的模式，给子菜单添加不同的事件处理函数
  //所有菜单都有点击事件，如果是横向菜单，则还有鼠标悬停事件
  const clickEvent =
    context.mode === "vertical" ? { onClick: handleClick } : {};
  const hoverEvent =
    context.mode === "horizontal"
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {};

  //根据不同的模式，渲染子菜单
  const renderChildren = () => {
    const subMenuClasses = classNames("submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;

      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error(
          "warning: SubMenu has a child which is not a MenuItem component"
        );
      }
    });

    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvent}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"></Icon>
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
