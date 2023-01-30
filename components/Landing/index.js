import styled from 'styled-components';

import PageSection from '../PageSection';


export default function Landing ({ props }) {

    console.log(props)

    let title = props[0].fields.title;

    const Container = styled.article`
    width: 100%;
    height: max-content;
    padding: ${props => props.theme.space[5]};

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

    const BgImage = styled.img`
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

    return(
        <PageSection>
            {/* <BgImage src='/bank-phrom-Tzm3Oyu_6sk-unsplash.jpg' /> */}
            <Container>
                <Title>{title}</Title>
                <p>Structured Query Language är ett standardiserat programspråk för att hämta och modifiera data i en relationsdatabas. SQL uttalas bokstav för bokstav eller ibland "s'ikuell" som i engelskans "sequel"</p>
                {/* <CtaLink /> */}
            </Container>
        </PageSection>
    )
}