import cardImage1 from "../../../public/images/about-icon1.png";
import cardImage2 from "../../../public/images/about-icon2.png";
import cardImage3 from "../../../public/images/about-icon3.png";

export interface Props {
  id: number;
  title: string;
  cardImage: string;
  body: string;
}
export const bentCards: Props[] = [
  {
    id: 1,
    title: "Ask Anything",
    cardImage: cardImage1,
    body: "Enter your question or topic. No account needed.",
  },
  {
    id: 1,
    title: "Discover & Contribute",
    cardImage: cardImage2,
    body: "Explore DApps, learn from technical articles, or deep-dive into ICP resources. If you're a builder, you can submit your own public resource for indeing and help grow the knowledge base.",
  },
  {
    id: 1,
    title: "Index & Match",
    cardImage: cardImage3,
    body: "Seeker scans decentralized sources and matches you with the most relevant answers ",
  },
];
