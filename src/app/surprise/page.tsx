import { Metadata } from "next";
import { Surprise } from "./Surprise";

export const metadata: Metadata = {
  title: "A Special Promise",
  description: "A special Valentine's Day promise from Chérie to her beloved.",
  openGraph: {
    title: "A Special Promise",
    description:
      "This Valentine's Day, I promise you a thousand more moments like this...",
  },
};

export default function SurprisePage() {
  return <Surprise />;
}
