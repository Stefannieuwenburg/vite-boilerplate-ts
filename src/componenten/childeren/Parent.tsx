import  { FC, ReactNode } from "react";
//import Child from "../src/components/childeren/Child";
//import Second from "../src/components/childeren/Second";

interface Props {
  children: ReactNode;
}

const Parent:FC<Props> = (children) => {
  return (
    <>
      <h1>Hello Ts</h1>
      {children}
    </>
  );
};

export default Parent;
