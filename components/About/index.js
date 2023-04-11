import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import theme from '@/utils/theme';
import PageSection from '../PageSection';
import Subtitle from '../Subtitle';
import Text from '../Text';



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
                    <Text>{children}</Text>
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
