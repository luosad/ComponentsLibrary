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

//自定义属性加上原生属性
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (props) => {
  const { disabled, children, size, btnType, href, className, ...restProps } =
    props;
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
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
