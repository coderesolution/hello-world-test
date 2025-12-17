import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2hfll1vi",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});