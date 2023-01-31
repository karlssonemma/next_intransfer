import PageSection from '../PageSection';
import styled from 'styled-components';
import Image from 'next/image';

const GridContainer = styled.article`
    display: grid;
    /* background-color: green; */
    width: 100%;
    gap: 50px;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      height: auto;
    }
  `;
  
  const GridImg = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;

    :first-of-type {
      @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        grid-row-start: 1;
        grid-row-end: span 2;
      }
    }
  `;


export default function Gallery({ props }) {

    const imagesArray = props.fields.images;    

    return(
        <PageSection>
            <GridContainer>
                {imagesArray.map(img => {

                    let url = 'https:' + img.fields.file.url;
                    let width = img.fields.file.details.image.width;
                    let height = img.fields.file.details.image.height;

                    return(
                        <GridImg 
                            src={url}
                            width={width}
                            height={height}
                        />
                    )
                })}
            </GridContainer>
        </PageSection>
    )
}