import React, { ReactNode } from "react";

interface IProps {
  label?: ReactNode | string;
  isRequire?: boolean;
}

const Input = ({
  label,
  className,

  ...rest
}: IProps & React.ComponentPropsWithoutRef<"input">) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-bold uppercase">{label}</label>}
      <input
        {...rest}
        className={`${className} text-base bg-transparent hover:bg-transparent border-0 border-solid border-b-2 pb-2 focus:!border-primary focus:shadow-none hover:!border-green-surface-2 border-green-surface-2 rounded-none focus:bg-transparent`}
      />
    </div>
  );
};

export default Input;
