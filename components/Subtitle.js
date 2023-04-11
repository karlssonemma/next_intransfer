import styled from 'styled-components';

const Subtitle = styled.h2`
    font-family: ${props => props.theme.fonts.sans};
    font-size: ${props => props.theme.fontSizes.l};
    font-weight: 400;
    margin-bottom: ${props => props.theme.space[2]};
`;

export default Subtitle;