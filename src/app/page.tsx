import { Metadata } from 'next';
import { OpeningScreen } from './OpeningScreen';

export const metadata: Metadata = {
  title: "Valentine's Gift for Theodore",
  description: "A special Valentine's Day surprise from Chérie to Theodore. Just for you...",
  openGraph: {
    title: "Valentine's Gift for Theodore",
    description: "A special Valentine's Day surprise from Chérie to Theodore.",
  },
};

export default function Home() {
  return <OpeningScreen />;
}
