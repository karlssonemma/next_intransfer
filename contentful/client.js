import { createClient } from 'contentful';


const createContentfulClient = () => {
    let client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    return client;
};

// export const client = createContentfulClient();
