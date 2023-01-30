import { createClient } from 'contentful';

let client; 

const createContentfulClient = () => {
    client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    return client;
};

export { client, createContentfulClient };
