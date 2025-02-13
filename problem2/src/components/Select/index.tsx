import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> & { Option: React.FC<OptionProps> } = ({
  children,
  ...props
}) => {
  return (
    <select className="py-2 border rounded px-4 cursor-pointer" {...props}>
      {children}
    </select>
  );
};

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
}

Select.Option = ({ children, ...props }) => {
  return <option {...props}>{children}</option>;
};

export default Select;
