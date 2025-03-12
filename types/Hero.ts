import { PortableTextBlock } from "next-sanity";

export type Hero = {
  _id: string;
  _createdAt: Date;
  title?: string;
  description: PortableTextBlock[];
  image: {
    url: string;
    alt: string;
  };
  button: {
    icon: string;
    text: string;
    url: string;
  };
  icons: {
    url: string;
    alt: string;
  }[];
};
