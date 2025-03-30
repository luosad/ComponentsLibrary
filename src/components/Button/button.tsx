import React from "react";
import classNames from "classnames";
import { FC } from "react";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
  Medium = "md",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
  href = "href",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
}

const Button: FC<BaseButtonProps> = (props) => {
  const { disabled, children, size, btnType, href } = props;
  const classes = classNames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

// Button.defaultProps = {
//   disabled: false,
//   btnType: ButtonType.Default,
// };

export default Button;
