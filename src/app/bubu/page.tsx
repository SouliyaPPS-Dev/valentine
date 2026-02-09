import { Metadata } from 'next';
import { BubuMoment } from './BubuMoment';

export const metadata: Metadata = {
  title: "Bubu & Bubu | A Cozy Moment",
  description: "Like Bubu and Bubu, we fit together perfectly. A cozy moment just for us.",
  openGraph: {
    title: "Bubu & Bubu",
    description: "A cozy moment just for us.",
  },
};

export default function BubuPage() {
  return <BubuMoment />;
}
