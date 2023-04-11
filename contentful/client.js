import { createClient } from 'contentful';

let client; 

const createContentfulClient = () => {
    client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    });
    return client;
};

export { client, createContentfulClient };
