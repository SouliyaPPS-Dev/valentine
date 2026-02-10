import { Metadata } from "next";
import { OpeningScreen } from "./OpeningScreen";

export const metadata: Metadata = {
  title: "Valentine's Gift for You",
  description:
    "A special Valentine's Day surprise from Chérie to the one she loves. Just for you...",
  openGraph: {
    title: "Valentine's Gift for You",
    description:
      "A special Valentine's Day surprise from Chérie to her beloved.",
  },
};

export default function Home() {
  return <OpeningScreen />;
}
