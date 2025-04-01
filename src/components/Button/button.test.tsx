import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "test",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test button component", () => {
  it("should render the correct default button", () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const element = screen.queryByText("Nice") as HTMLButtonElement;
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element!);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    render(<Button {...testProps}>Nice</Button>);
    const element = screen.queryByText("Nice");
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-primary btn-lg test");
  });
  it("should render a link when btnType is link and href is provided", () => {
    render(
      <Button btnType={ButtonType.Link} href="http://example.com">
        Link
      </Button>
    );
    const element = screen.queryByText("Link");
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
    expect(element).toHaveAttribute("href", "http://example.com");
  });
  it("should render disabled button when disabled set to true", () => {
    render(<Button {...disabledProps}>Nice</Button>);
    const element = screen.queryByText("Nice") as HTMLButtonElement;
    expect(element.disabled).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual("BUTTON");
    // expect(element).toHaveClass("btn btn-disabled");
    fireEvent.click(element!);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
