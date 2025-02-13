import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  color?: string;
  opacity?: number;
}
const OverLay = ({
  children,
  className = "",
  color = "#000",
  opacity = 0.5,
  ...rest
}: IProps & React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={`${className} relative`} {...rest}>
      {children}
      <div
        className="absolute inset-0 bg-black"
        style={{ backgroundColor: color, opacity }}
      />
    </div>
  );
};

export default OverLay;
