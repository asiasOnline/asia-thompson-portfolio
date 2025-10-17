import { createClient } from 'contentful';
import { create } from 'domain';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
})

export async function getBlogPosts() {
    const entries = await client.getEntries({
        content_type: ''
    })
}