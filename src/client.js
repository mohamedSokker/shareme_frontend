import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-04-28",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builer = imageUrlBuilder(client);

export const urlFor = (source) => builer.image(source);
