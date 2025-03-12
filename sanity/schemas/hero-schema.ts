import { defineType } from "sanity";
const hero = defineType({
  name: "hero",
  title: "Hero Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Optional title for the hero section",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                type: "textColor", // Enables the text color picker
              },
              {
                type: "highlightColor", // Enables the background color picker
              },
            ],
          },
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility",
        },
      ],
    },

    {
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        {
          name: "icon",
          title: "Icon",
          type: "file",
        },
        {
          name: "text",
          title: "Button Text",
          type: "string",
        },
        {
          name: "url",
          title: "Button URL",
          type: "url",
        },
      ],
    },
    {
      name: "icons",
      title: "Icons",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Describe the icon for accessibility",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
});

export default hero;
