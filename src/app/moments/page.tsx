import { Metadata } from "next";
import { OurMoments } from "./OurMoments";

export const metadata: Metadata = {
  title: "Our Precious Moments | Us",
  description:
    "Memories we created together. Every moment with you is a treasure.",
  openGraph: {
    title: "Our Precious Moments",
    description: "Every moment with you is a treasure.",
  },
};

export default function MomentsPage() {
  return <OurMoments />;
}
