import PageSection from '../PageSection';
import theme from '@/utils/theme';

import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';


const Subtitle = styled.h2`
    margin-bottom: ${props => props.theme.space[2]};

    font-size: ${props => props.theme.fontSizes.l};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 400;
`;

const Paragraph = styled.p`
    margin-bottom: 1em;

    font-family: ${props => props.theme.fonts.main};
    line-height: 180%;
    font-weight: 200;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        width: 50%;
      }
`;

export default function About({ props }) {

    const title = props.fields.title;
    const body = props.fields.body;

    const renderOptions = {
        renderText: (text) => {
          return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
          }, []);
        }, renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return(
                    <Paragraph>{children}</Paragraph>
                )
            }
        }
      };

    return(
        <PageSection id='about' className='about-section'>
            <Subtitle>{title}</Subtitle>
            {documentToReactComponents(body, renderOptions)}
        </PageSection>
    )
};
