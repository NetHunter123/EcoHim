import React from "react";
import Footer from "../components/Footer";
import TopLayout from "../components/TopLayout";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopLayout>
        {children}
      </TopLayout>
      <Footer ></Footer>
    </>
  );
};

export default MainLayout;
