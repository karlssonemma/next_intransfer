import PageSection from '../PageSection';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
    max-width: 600px; // vet ej om denna

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
      flex-direction: row;
    }
  `;

const ContactText = styled.article`
    width: 100%;
    height: max-content; //ikke bra
    /* padding: 0 ${props => props.theme.space[4]}; */
    margin-bottom: ${props => props.theme.space[4]};

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-weight: 200;
    line-height: 180%;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        text-align: right;
        margin-right: ${props => props.theme.space[5]};
    }
`;

const ContactItemsList = styled.ul`
    width: 100%;
    height: auto; //ikke bra
    padding: ${props => props.theme.space[5]};
    background-color: ${props => props.theme.colors.orange};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: none;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    position: relative;
    top: 2px;
`;

const Link = styled.a`
    color: black;
    text-decoration: none;
`;

export default function Contact({ props }) {

    console.log("CONTACT", props)
    const { body, title, contactInfo } = props.fields;

    return(
        <PageSection>
            <Container>
            <ContactText>
                <p>{title}</p>
                <p>{body}</p>
            </ContactText>
            <ContactItemsList>
                {contactInfo.map(item => {
                    let url = 'https:' + item.fields.icon.fields.file.url;
                    let text = item.fields.text;
                    return(
                        <li>
                            <Icon 
                                src={url} 
                                width={512} 
                                height={512}
                            />
                            <Link href={text}>{text}</Link>
                        </li>
                    )
                })} 
            </ContactItemsList>
            </Container>
        </PageSection>
    )
}