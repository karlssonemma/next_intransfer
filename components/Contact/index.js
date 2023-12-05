import PageSection from '../PageSection';
import styled from 'styled-components';
import Image from 'next/image';
import Title from '../Title';
import Text from '../Text';
import Form from '../Form';

const Container = styled.div`
    display: grid;
    grid-gap: 100px;
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 900px;

    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        grid-template-columns: auto max-content;
    }
  `;

const ContactText = styled.article`
    width: 100%;
    margin-bottom: ${props => props.theme.space[4]};

    font-weight: 200;
    line-height: 180%;
    text-align:center;
`;

const ContactItemsList = styled.ul`
    width: 100%;
    max-width: max-content;
    height: max-content; //ikke bra
    /* padding: ${props => props.theme.space[5]}; */

    display: flex;
    flex-direction: column;
    margin: 0 auto;

    padding: ${props => props.theme.space[6]} ${props => props.theme.space[6]} 0 ${props => props.theme.space[6]};
    background-color: ${props => props.theme.colors.orange};
    list-style: none;

    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        margin-top: ${props => props.theme.space[4]};
    }
`;

const ContactCard = styled.li`
    font-family: ${props => props.theme.fonts.sans};
    height: max-content;
    padding-bottom: ${props => props.theme.space[6]};

    & h3 {
        font-style: italic;
        margin-bottom: ${props => props.theme.space[2]};
    }

    & p, a {
        font-weight: 200;
        margin: ${props => props.theme.space[1]} 0;
    }

    & a {
        color: #222222;
        text-decoration: none;
        transition: .2s all;
    }

    & a:hover {
        text-decoration: underline;
    }
`;


const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    position: relative;
    top: 5px;
`;

const Link = styled.a`
    color: black;
    text-decoration: none;
`;

export default function Contact({ props }) {

    console.log("CONTACT", props)
    const { body, title, contactCards, emailIcon, phoneIcon } = props.fields;

    let phoneUrl = 'https:' + phoneIcon.fields.file.url;
    let emailUrl = 'https:' + emailIcon.fields.file.url;

    return(
        <PageSection className='contact-section'>
            <ContactText>
                <Title>{title}</Title>
                <Text>{body}</Text>
            </ContactText>
            <Container>
                <Form />
                <ContactItemsList>
                    {contactCards.map(item => {
                        return(
                            <ContactCard key={item.sys.id}>
                                <h3>{item.fields.name}</h3>
                                <a href={`mailto:${item.fields.email}`}>
                                    <Icon 
                                        src={emailUrl} 
                                        width={512} 
                                        height={512}
                                        alt=''
                                    />
                                    {item.fields.email}
                                </a>
                                <p>
                                    <Icon 
                                        src={phoneUrl} 
                                        width={512} 
                                        height={512}
                                        alt=''
                                    />
                                    {item.fields.phone}
                                    </p>
                            </ContactCard>
                        )
                    })} 
                </ContactItemsList>
            </Container>
        </PageSection>
    )
}