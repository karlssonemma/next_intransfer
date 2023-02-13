import styled from 'styled-components';

const Container = styled.footer`
    width: 100%;
    padding: 3rem;
    background-color: ${props => props.theme.colors.orange};
`;

function Footer() {
    return(
        <Container>
            Foot
        </Container>
    )

};

export default Footer;