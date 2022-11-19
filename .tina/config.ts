
  import { defineConfig } from "tinacms";
  
  // Your hosting provider likely exposes this as an environment variable
  const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
  
  export default defineConfig({
    branch,
    clientId: "dc247f5c-2217-4b20-8d4f-f82cf83ebaef",   // Get this from tina.io
    token: "21b7071c0088158b845997478d40c2b06fd0d5f8",      // Get this from tina.io
    build: {
      outputFolder: "admin",
      publicFolder: "public",
    },
    media: {
      tina: {
        mediaRoot: "images",
        publicFolder: "public",
      },
    },
    schema: {
      collections: [
        {
          name: "post",
          label: "Posts",
          path: "posts",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              required: true,
            },
            {
              name: 'thumbnail',
              type: 'image',
              label: 'Thumbnail',
             },
            {
              label: 'Tags',
              name: 'tags',
              type: 'string',
              list: true,
            },
            {
              label: "Date",
              name: "date",
              type: "datetime",
            },
            {
              type: "rich-text",
              name: "body",
              label: "Body",
              isBody: true,
            },
          ],
        },
      ],
    },
  });
  