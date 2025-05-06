import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: "2024-01-01",
    useCdn: false,
})

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return builder.image(source)
}