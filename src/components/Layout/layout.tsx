import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Login from "../Login/login";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        <Login />
        {children}
      </main>
      <Footer />
    </>
  );
}
