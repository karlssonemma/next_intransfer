import styled from "styled-components";
import theme from '../utils/theme';

const PageSection = styled.section`
    width: 100%;
    min-height: 100vh;
    height: max-content;
    background-color: white;
    padding: ${props => props.theme.space[6]} ${props => props.theme.space[5]};

    display: flex;
    //annan løsning bætter om man vill ændra font i framtiden
    font-family: ${props => props.theme.fonts.main};
    letter-spacing: .75px;
    overflow: hidden;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
      //padding
        padding: 200px;
    }

    &.landing-section {
      justify-content: center;
      align-items: center;
      padding: 0;

      @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        justify-content: flex-end;
        align-items: center;
        position: relative;
      }
    }

    &.about-section {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    &.image-section {
      justify-content: center;
    }

    &.contact-section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;

export default PageSection;