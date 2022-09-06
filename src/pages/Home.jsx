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
import DesignBlockDecentralized from "../components/DesignBlockDecentralized";
import ColoredCard from "../components/ColoredCard";
import SoloCard from "../components/SoloCard";

import cardImg1 from "../assets/img/index_low_cost.webp";
import cardImg2 from "../assets/img/index_fast_fck.webp";

export default function Home() {
  const [cardData, setCardData] = useState([
    [
      "Low cost, forever",
      "Solana's scalability ensures transactions remain less than $0.01 for both developers and users.",
      cardImg1,
    ],
    [
      "Fast, forever",
      "Solana is all about speed, with 400 millisecond block times. And as hardware gets faster, so does the network",
      cardImg2,
    ],
  ]);

  const [coloredCardData, setColoredCardData] = useState([
    [
      "Solana Community",
      "There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.",
      "learn more",
      "#eb54bc",
    ],
    [
      "Become a Validator",
      "Help secure the network by running decentralized infrastructure. Learn about operating a validator node.",
      "Get Started",
      "#14f195",
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
            <Card key={uuidv4()} cardData={item}></Card>
          ))}
        </section>
        <DesignBlockDecentralized />
        <Separator></Separator>

        <section className="coloredCardDataSection">
          {coloredCardData.map((item) => (
            <ColoredCard key={uuidv4()} coloredCardData={item}></ColoredCard>
          ))}
        </section>
        <section className="soloCardSection">
          <SoloCard></SoloCard>
        </section>
      </main>
    </>
  );
}
