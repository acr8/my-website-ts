import React, { ReactNode, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Col, Row, Avatar, Layout, Menu, BackTop, Button, Drawer, Badge, Modal, message, notification } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { getCookies, setCookies, removeCookies, hasCookie } from "cookies-next";
import Navbar from "../modules/navbar/navbar";
import moment from "moment";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

type Props = { children: React.ReactNode };

export default function LayoutBase({ children }: Props) {
  const router = useRouter();
  const nodeRef = React.useRef(null);
  const [showChildren, setshowChildren] = useState(false);
  const [navbarFade, setNavbarFade] = useState(typeof window !== "undefined" ? (sessionStorage.getItem("fade") === "ok" ? true : false) : false);
// const [navbarFade, setNavbarFade] = useState(false)

  useEffect(() => {
    setshowChildren(true);
    setNavbarFade(true);
    sessionStorage.setItem("fade", "ok");
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", removeSessionStorage);
    return () => {
      window.removeEventListener("beforeunload", removeSessionStorage);
    };
  }, []);

  const removeSessionStorage = () => {
    sessionStorage.clear();
  };

  return (
    <Layout>
      <CSSTransition nodeRef={nodeRef} unmountOnExit in={navbarFade} timeout={2000} classNames="navbar-transition">
        <Header ref={nodeRef} className="navbar-header">
          <Navbar/>
        </Header>
      </CSSTransition>
      <Content>{showChildren && children}</Content>
      <BackTop />
    </Layout>
  );
}
