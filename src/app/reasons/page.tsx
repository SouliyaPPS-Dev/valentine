import { Metadata } from 'next';
import { Reasons } from './Reasons';

export const metadata: Metadata = {
  title: "Reasons I Love You | Theodore",
  description: "Just a few of the infinite reasons why Chérie loves Theodore.",
  openGraph: {
    title: "Reasons I Love You",
    description: "Just a few of infinite reasons.",
  },
};

export default function ReasonsPage() {
  return <Reasons />;
}
