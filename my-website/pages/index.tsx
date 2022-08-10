import React, { ReactNode, useEffect, useState } from "react";
import type { NextPage } from "next";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import { Layout, Card, Col, Row, Form, Input, Button, DatePicker, Select, Checkbox, Radio, Table, Tag, Pagination, Modal, message, Tooltip, Skeleton, notification } from "antd";
import Head from "next/head";
import Image from "next/image";
import LayoutBase from "../layout/base";
import moment from "moment";

const { Header, Content, Footer } = Layout;

type Props = { scrollY: number };

const Home: NextPage<Props> = ({ scrollY }) => {
  const router = useRouter();
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const [element, setElement] = useState(false);
  const [firstElement, setFirstElement] = useState(false);
  const [offset, setOffset] = useState(null);

  const setScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  useEffect(() => {
    if (offset <= 340) {
      setElement(true);
    } else if (offset >= 350) {
      setElement(false);
    }
  }, [offset]);

  useEffect(() => {
    setTimeout(() => {
      setFirstElement(true);
    }, 600);
  });

  return (
    <LayoutBase>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row className="home-container first">
        <CSSTransition nodeRef={ref1}  unmountOnExit in={element} timeout={500} classNames="first-scroll-1">
          <CSSTransition nodeRef={ref1} unmountOnExit in={firstElement} timeout={800} classNames="first-transition">
            <Col ref={ref1} xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ background: "lightgray" }}>
                <p style={{ fontSize: 20 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptas porro ratione reiciendis, qui possimus dolor dignissimos aliquid est deleniti saepe. Porro ut facere voluptas veritatis harum? Dolores, dignissimos amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam assumenda sed eligendi, asperiores mollitia quae magni error et veniam? Delectus nihil laboriosam voluptates eveniet asperiores quae debitis molestiae nesciunt temporibus!
                </p>
              </div>
            </Col>
          </CSSTransition>
        </CSSTransition>
        <CSSTransition unmountOnExit nodeRef={ref2} in={element} timeout={500} classNames="first-scroll-2">
          <CSSTransition unmountOnExit nodeRef={ref2} in={firstElement} timeout={800} classNames="second-transition">
            <Col ref={ref2} xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
              <div style={{ width: 500, height: 500, backgroundColor: "lightgray" }}></div>
            </Col>
          </CSSTransition>
        </CSSTransition>
      </Row>
      <Row className="home-container" style={{ backgroundColor: "gray" }}>
        <div></div>
      </Row>
      <Footer className="custom-footer">
        <Row>
          <Col span={8} style={{ backgroundColor: "red", marginTop: 0 }}>
            <div className="circle"></div>
          </Col>
          <Col span={8} style={{ textAlign: "center" }}>
            Copyright © {moment().format("YYYY")} Bima - All Rights Reserved
          </Col>
          <Col span={8} style={{ backgroundColor: "green" }}></Col>
        </Row>
      </Footer>
    </LayoutBase>
  );
};

export default Home;
