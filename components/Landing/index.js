import styled from 'styled-components';

import PageSection from '../PageSection';
import Image from 'next/image';
import Title from '../Title';
import Text from '../Text';
import Button from '../Button';

const Container = styled.article`
    width: 100%;
    height: max-content;
    padding: ${props => props.theme.space[6]};

    background-color: ${props => props.theme.colors.white};
    font-weight: 200;

    z-index: 10;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
      width: 50%;
      padding: 80px;
      padding-right: 200px;
    }
  `;

    const BgImage = styled(Image)`
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: static;

        @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
            position: absolute;
        }
    `;


export default function Landing({ props }) {

    let { title, body } = props.fields;
    let bgUrl = 'https:' + props.fields.background.fields.file.url;
    let bgWidth = props.fields.background.fields.file.details.image.width;
    let bgHeight = props.fields.background.fields.file.details.image.height;


    return(
        <PageSection className='landing-section'>
            <BgImage 
                src={bgUrl}
                width={bgWidth}
                height={bgHeight}
            />
            <Container>
                <Title>{title}</Title>
                <Text>{body}</Text>
                <Button as='a' href='#contact'>
                    Kontakta oss här
                </Button>
            </Container>
        </PageSection>
    )
}