import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import classNames from "classnames";

type Props = {
  children?: JSX.Element;
};

type TButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = React.forwardRef<HTMLButtonElement, TButton>((props, ref) => {
  return (
    <button
      ref={ref}
      // type="submit"
      className={classNames(
        "w-full bg-transparent border p-3 rounded-lg font-semibold focus:border-free700 outline-none placeholder-gray-400"
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };
