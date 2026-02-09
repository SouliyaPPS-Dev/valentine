import { Metadata } from 'next';
import { Bouquet } from './Bouquet';

export const metadata: Metadata = {
  title: "A Bouquet of Feelings | Theodore",
  description: "Every flower tells a story. A bouquet of feelings from Chérie to Theodore.",
  openGraph: {
    title: "A Bouquet of Feelings",
    description: "Every flower tells a story.",
  },
};

export default function BouquetPage() {
  return <Bouquet />;
}
