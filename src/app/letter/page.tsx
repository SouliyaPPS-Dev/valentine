import { Metadata } from "next";
import { LoveLetter } from "./LoveLetter";

export const metadata: Metadata = {
  title: "A Love Letter for You | Valentine's Day",
  description:
    "Words from my heart to yours. A special love letter from Chérie to her beloved.",
  openGraph: {
    title: "A Love Letter for You",
    description: "Words from my heart to yours.",
  },
};

export default function LetterPage() {
  return <LoveLetter />;
}
