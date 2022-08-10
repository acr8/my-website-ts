import React, { useEffect, useState } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";
import { useRouter } from "next/router";

type Props = {};

export default function Navbar({}: Props) {
  const router = useRouter();
  const [header, setHeader] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  // const [current, setCurrent] = useState('home');
  const [current, setCurrent] = useState(router.pathname === "/" ? "home" : router.pathname === "/about" ? "about" : router.pathname === "/my-artwork" ? "artwork" : "");

  const toHome = () => {
    router.push("/");
    setCurrent("home");
  };

  const toAbout = () => {
    router.push("/about");
    setCurrent("about");
  };

  const toMyArtwork = () => {
    router.push("/my-artwork");
    setCurrent("artwork");
  };

  useEffect(() => {
    window.onscroll = () => {
      let itemTranslate = Math.min(0, window.pageYOffset / 3 - 60);
      setScrollY(itemTranslate);
      if (itemTranslate <= -15) {
        setHeader(false);
      } else if (itemTranslate >= -15) {
        setHeader(true);
      }
    };
  }, [header]);
  

  const items = [
    {
      label: (
        <div className="navbar-menu-item">
          <Button className="navbar-button" onClick={() => toHome()}>
          {/* <Button className="navbar-button"> */}
            <div className="item-border-bottom">
              <span className={`item-text ${header ? "scroll" : ""}`}>Home</span>
            </div>
          </Button>
        </div>
      ),
      key: "home",
    },
    {
      label: (
        <div className="navbar-menu-item">
          <Button className="navbar-button" onClick={() => toMyArtwork()}>
          {/* <Button className="navbar-button"> */}
            <div className="item-border-bottom">
              <span className={`item-text ${header ? "scroll" : ""}`}>My Artwork</span>
            </div>
          </Button>
        </div>
      ),
      key: "artwork",
    },
    {
      label: (
        <div className="navbar-menu-item">
          <Button className="navbar-button" onClick={() => toAbout()}>
          {/* <Button className="navbar-button"> */}
            <div className="item-border-bottom">
              <span className={`item-text ${header ? "scroll" : ""}`}>About</span>
            </div>
          </Button>
        </div>
      ),
      key: "about",
    },
  ];

  return (
    <div className={`navbar-container ${header ? "scroll" : ""}`}>
      <h1>MY WEBSITE</h1>
      <Menu className="navbar-menu" selectedKeys={[current]} mode="horizontal" items={items}/>
    </div>
  );
}
