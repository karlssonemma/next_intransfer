import PageSection from '../PageSection';
import styled from 'styled-components';
import theme from '@/utils/theme';

const Body = styled.p`
    font-family: ${props => props.theme.fonts.main};
    line-height: 180%;

    font-weight: 200;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 50%;
    }
`;

const Subtitle = styled.h2`
    margin-bottom: ${props => props.theme.space[2]};

    font-size: ${props => props.theme.fontSizes.l};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 400;
`;

export default function About({ props }) {

    const data = props[0].fields;

    const title = data.title;
    const body = data.body.content[0].content[0].value;

    
    return(
        <PageSection>
            <Subtitle>{title}</Subtitle>
            <Body>{body}</Body>
        </PageSection>
    )
};
