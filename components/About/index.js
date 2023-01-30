import PageSection from '../PageSection';
import { client } from '@/contentful/client';
import { requestToBodyStream } from 'next/dist/server/body-streams';

export default function About({ props }) {

    let { title, body } = props[0].fields;
    
    return(
        <PageSection>
            <p>{title}</p>
        </PageSection>
    )
};
