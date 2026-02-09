import { Metadata } from 'next';
import { ValentineQuestion } from './ValentineQuestion';

export const metadata: Metadata = {
  title: "Will You Be My Valentine? | Theodore",
  description: "A special question from Chérie to Theodore on this Valentine's Day.",
  openGraph: {
    title: "Will You Be My Valentine?",
    description: "A special question from Chérie to Theodore.",
  },
};

export default function QuestionPage() {
  return <ValentineQuestion />;
}
