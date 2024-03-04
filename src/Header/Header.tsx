import { Children, ReactNode } from "react";

type HeaderProps ={
    titel: string;
    level: number;
    children: ReactNode;
};

const Header = ({titel, level, children}: HeaderProps) => {
  return (
    <div>
      <h1>
      {children}
      </h1>
        {titel} level: {level} 
    </div>
  );
};

export default Header
