import { Hero } from "@/types/Hero";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "5ehqg6da",
  dataset: "production",
  apiVersion: "2025-03-10",
  useCdn: false,
});

// Fetch Hero Data
export async function getHero(): Promise<Hero | null> {
  return client.fetch(
    groq`*[_type == "hero"][0]{
      _id,
      _createdAt,
      title,
      description,
     "image": image.asset->url,
     "imageAlt": image.alt,
      "button": select(
        defined(button) => {
          "icon": button.icon.asset->url,
          "text": button.text,
          "url": button.url
        },
        null
      ),
      "icons": icons[] {
        "url": asset->url,
        "alt": alt
      }
    }`
  );
}

// Fetch Projects Data
export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      position,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      description,
      icons[]{
        title,
        "iconFile": iconFile.asset->url
      }
    }`
  );
}
