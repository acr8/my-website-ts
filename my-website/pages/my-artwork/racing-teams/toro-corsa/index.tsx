import React from 'react'
import { Breadcrumb, Layout, Menu, Button } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {}

export default function toroCorsa({}: Props) {
    const router = useRouter();
  return (
    <div>Toro Corsa
        <Button onClick={() =>router.push("/my-artwork/racing-teams/toro-corsa/bianca_de_la_rosa")}>Bianca De La Rosa</Button>
    </div>
  )
}