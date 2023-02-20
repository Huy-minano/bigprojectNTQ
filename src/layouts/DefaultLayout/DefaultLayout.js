import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import React from "react";
import { useDetectScroll } from "@smakss/react-scroll-direction"
function DefaultLayout({ children }) {
  const [scrollDir] = useDetectScroll({});
  return (
    <div>
      {
          (scrollDir==="still" ? <Header/> : scrollDir==="up" ? <Header/> : "")
      }
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
