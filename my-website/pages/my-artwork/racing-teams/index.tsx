import React from 'react'
import { Breadcrumb, Layout, Menu, Button } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {}

export default function racingTeams({}: Props) {
    const router = useRouter();
  return (
    <div>racingTeams
        <Button onClick={() =>router.push("/my-artwork/racing-teams/toro-corsa")}>Toro Corsa</Button>
    </div>
  )
}