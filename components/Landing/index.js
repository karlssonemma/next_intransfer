import styled from 'styled-components';
import PageSection from '../PageSection';
import Image from 'next/image';
import CtaLink from '../CtaLink';

const Container = styled.article`
    width: 100%;
    height: max-content;
    padding: ${props => props.theme.space[6]};

    background-color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 200;
    line-height: 180%;

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
        position: absolute;
    `;

    const Title = styled.h1`
        font-size: ${props => props.theme.fontSizes.xl};
        margin-bottom: ${props => props.theme.space[2]};
        font-weight: 400;
    `;

    


export default function Landing({ props }) {

    let { title, body } = props.fields;
    let bgUrl = 'https:' + props.fields.background.fields.file.url;
    let bgWidth = props.fields.background.fields.file.details.image.width;
    let bgHeight = props.fields.background.fields.file.details.image.height;

    let ctaIconUrl = 'https:' + props.fields.cta.fields.icon.fields.file.url;
    let ctaText = props.fields.cta.fields.text;

    return(
        <PageSection className='landing-section'>
            <BgImage 
                src={bgUrl}
                width={bgWidth}
                height={bgHeight}
            />
            <Container>
                <Title>{title}</Title>
                <p>{body}</p>
                <CtaLink 
                    href='#contact'
                    iconUrl={ctaIconUrl}
                    text={ctaText}
                />
            </Container>
        </PageSection>
    )
}