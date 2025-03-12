import { defineType } from "sanity";

const project = defineType({
  name: "project",
  title: "Recent Projects",
  type: "document",
  fields: [
    {
      name: "position",
      title: "Position",
      type: "string",
      options: {
        list: [
          { title: "Right Image & Left Text", value: "right" },
          { title: "Left Image & Right Text", value: "left" },
        ],
        layout: "dropdown",
      },
      initialValue: "right",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
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
      name: "icons",
      title: "Icons",
      type: "array",
      of: [
        {
          type: "object",
          name: "iconItem",
          title: "Icon",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "iconFile",
              title: "Icon / Image",
              type: "file",
            },
          ],
        },
      ],
    },
  ],
});

export default project;
