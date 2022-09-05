import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Navbar from "../components/Navbar";
import Separator from "../components/Separator";
import VideoHero from "../components/VideoHero";
import Counter from "../components/Counter";
import BlockContent from "../components/BlockContent";
import DesignBlock from "../components/DesignBlock";
import Card from "../components/Card";

import cardImg1 from "../assets/img/index_low_cost.webp";
import cardImg2 from "../assets/img/index_fast_fck.webp";

export default function Home() {
  const [cardData, setCardData] = useState([
    [
      uuidv4(),
      "Low cost, forever",
      "Solana's scalability ensures transactions remain less than $0.01 for both developers and users.",
      cardImg1,
    ],
    [
      uuidv4(),
      "Fast, forever",
      "Solana is all about speed, with 400 millisecond block times. And as hardware gets faster, so does the network",
      cardImg2,
    ],
  ]);


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
        <section className="cardSection">
          {cardData.map((item) => (
            <Card id={item[0]} cardData={item}></Card>
          ))}
        </section>
      </main>
    </>
  );
}
