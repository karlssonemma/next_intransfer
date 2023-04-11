import styled from 'styled-components';
import theme from '@/utils/theme';

const Text = styled.p`
    margin-bottom: ${props => props.theme.space[5]};

    font-family: ${props => props.theme.fonts.serif};
    line-height: 180%;
    font-weight: 300;
`;

export default Text;