import { Metadata } from 'next';
import { LoveLetter } from './LoveLetter';

export const metadata: Metadata = {
  title: "A Love Letter for Theodore | Valentine's Day",
  description: "Words from my heart to yours. A special love letter from Chérie to Theodore.",
  openGraph: {
    title: "A Love Letter for Theodore",
    description: "Words from my heart to yours.",
  },
};

export default function LetterPage() {
  return <LoveLetter />;
}
