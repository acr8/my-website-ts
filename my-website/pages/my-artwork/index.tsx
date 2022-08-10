import React from "react";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import LayoutBase from "../../layout/base";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {};

export default function myArtwork({}: Props) {
  const router = useRouter();

  return (
    <LayoutBase>
      <Head>
        <meta charSet="utf-8" />
        <title>My Artwork</title>
        <meta name="description" content="My Artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ height: 2000, width: "100%", backgroundColor: "lightgray", padding: "100px 50px" }}>
        My Artwork
        <Button onClick={() => router.push("my-artwork/racing-teams")}>Racing Teams</Button>
      </div>
    </LayoutBase>
  );
}
