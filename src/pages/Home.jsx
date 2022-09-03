import React from "react";
import Navbar from "../components/Navbar";
import Separator from "../components/Separator";
import VideoHero from "../components/VideoHero";
import Counter from "../components/Counter";
import BlockContent from "../components/BlockContent";
import DesignBlock from "../components/DesignBlock";

export default function home() {
  return (
    <>
      <Navbar />
      <main>
        <VideoHero />
        <Separator></Separator>
        <Counter />
        <BlockContent />
        <DesignBlock />
        <Separator></Separator>

      </main>
    </>
  );
}
