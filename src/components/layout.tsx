import React, {ReactNode} from "react";
import { Meta } from "./Meta";
import Footer from "./Footer";
import Header from "./Header";

interface MyProps {
    children?: ReactNode;
  }

export const Layout = ({ children }: MyProps):JSX.Element => {
  return (
    <>
      <Meta />
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};