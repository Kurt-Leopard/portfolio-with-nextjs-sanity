import { PortableTextBlock } from "next-sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  position: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  description: PortableTextBlock[];
  icons: {
    title: string;
    iconFile: string;
  }[];
};
