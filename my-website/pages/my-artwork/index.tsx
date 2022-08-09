import React from 'react'
import { Breadcrumb, Layout, Menu } from "antd";
import LayoutBase from "../../layout/base";
import Head from "next/head";

type Props = {}

export default function myArtwork({}: Props) {
  return (
    <LayoutBase>
       <Head>
        <meta charSet="utf-8" />
        <title>My Artwork</title>
        <meta name="description" content="My Artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ height: 2000, width: "100%", backgroundColor: "lightgray" }}>My Artwork</div>
    </LayoutBase>
  )
}