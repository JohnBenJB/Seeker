import React from "react";
import cardImage from "../../../public/images/frame-landingpage.png";
import cardImage2 from "../../../public/images/card2-features.png";
import { FaLink } from "react-icons/fa";

export interface Props {
  id: number;
  icon: React.ReactElement;
  body: string;
  cardImage: string;
}

export const features: Props[] = [
  {
    id: 1,
    icon: React.createElement(FaLink),
    body: "On-chain Indexing",
    cardImage: cardImage,
  },
  {
    id: 2,
    icon: React.createElement(FaLink),
    body: "Ai-Ready",
    cardImage: cardImage2,
  },
  {
    id: 3,
    icon: React.createElement(FaLink),
    body: "Lightweight",
    cardImage: cardImage2,
  },
  {
    id: 4,
    icon: React.createElement(FaLink),
    body: "Fast Search",
    cardImage: cardImage2,
  },
  {
    id: 5,
    icon: React.createElement(FaLink),
    body: "Community Submissions",
    cardImage: cardImage2,
  },
];
