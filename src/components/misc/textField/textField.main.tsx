import React from "react";
import classNames from "classnames";

type TextFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className={classNames(
          "w-full bg-transparent border p-3 rounded-lg font-semibold focus:border-free700 outline-none placeholder-gray-400"
        )}
        {...props}
      />
    );
  }
);

TextField.displayName = "";

export { TextField };
