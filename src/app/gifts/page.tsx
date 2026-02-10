import { Metadata } from "next";
import { GiftRoom } from "./GiftRoom";

export const metadata: Metadata = {
  title: "Your Special Gifts",
  description:
    "Choose your special gifts from Chérie. A love letter, precious moments, and more surprises await.",
  openGraph: {
    title: "Your Special Gifts",
    description: "Choose your special gifts from Chérie.",
  },
};

export default function GiftsPage() {
  return <GiftRoom />;
}
