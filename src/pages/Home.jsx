import React from "react";
import Navbar from "../components/Navbar";
import Separator from "../components/Separator";
import VideoHero from "../components/VideoHero";

export default function home() {
  return (
    <>
      <Navbar/>
      <Separator />
      <VideoHero/>
    </>
  );
}
