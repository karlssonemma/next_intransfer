import styled from 'styled-components';

const Title = styled.h1`
    font-family: ${props => props.theme.fonts.sans};
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: ${props => props.theme.space[3]};
    font-weight: 400;
`;

export default Title;