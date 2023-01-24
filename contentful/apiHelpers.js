import { client } from './client';

export const getEntriess = async (props) => {
    const res = await client.getEntries({ content_type: 'landing' })
    console.log(res)
    return res;
}