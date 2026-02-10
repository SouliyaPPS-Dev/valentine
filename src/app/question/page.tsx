import { Metadata } from "next";
import { ValentineQuestion } from "./ValentineQuestion";

export const metadata: Metadata = {
  title: "Will You Be My Valentine?",
  description:
    "A special question from Chérie to the one she loves on this Valentine's Day.",
  openGraph: {
    title: "Will You Be My Valentine?",
    description:
      "A special question from Chérie to the one she loves on this Valentine's Day.",
  },
};

export default function QuestionPage() {
  return <ValentineQuestion />;
}
