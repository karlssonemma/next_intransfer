import styled from 'styled-components';

const Button = styled.button`
    display: block;
    width: max-content;
    padding: ${props => props.theme.space[4]} ${props => props.theme.space[6]};
    margin-top: ${props => props.theme.space[3]};
    border: none;
    border-radius: ${props => props.theme.space[1]};

    background-color: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};

    font-family: ${props => props.theme.fonts.sans};
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.xs};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .10em;

    transition: .2s all;
    scroll-behavior: smooth;

    cursor: pointer;
    &:visited {
        color: white;
    }
    
    &:hover {
        opacity: 0.6;
    }
`;

export default Button;