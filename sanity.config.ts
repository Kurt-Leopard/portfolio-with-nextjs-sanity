import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import schemas from "@/sanity/schemas/index";

const config = defineConfig({
  projectId: "5ehqg6da",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2025-03-10",
  basePath: "/admin",
  plugins: [structureTool(), simplerColorInput()],
  schema: { types: schemas },
});

export default config;
