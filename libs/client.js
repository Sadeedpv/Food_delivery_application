import SanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"

export const client = SanityClient({
    projectId:"lzndtrud",
    dataset:'production',
    useCdn: true,
    apiVersion: '2022-07-20',
    token:process.env.NEXT_APP_TOKEN
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

