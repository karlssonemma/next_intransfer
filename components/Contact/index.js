import PageSection from '../PageSection';
import styled from 'styled-components';
import Image from 'next/image';
import Title from '../Title';
import Text from '../Text';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
    width: 100%;
    max-width: 800px;
  `;

const ContactText = styled.article`
    width: 100%;
    margin-bottom: ${props => props.theme.space[4]};

    font-weight: 200;
    line-height: 180%;
`;

const ContactItemsList = styled.ul`
    width: 100%;
    height: auto; //ikke bra
    /* padding: ${props => props.theme.space[5]}; */

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: ${props => props.theme.space[5]};

    list-style: none;

     @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ContactCard = styled.li`
    background-color: ${props => props.theme.colors.orange};
    padding: ${props => props.theme.space[5]};
    font-family: ${props => props.theme.fonts.sans};

    & h3 {
        font-style: italic;
        margin-bottom: ${props => props.theme.space[2]};
    }

    & a {
        color: ${props => props.theme.colors.black};
        text-decoration: none;
    }

    & a:hover {
        color: pink;
    }

    & p, a {
        font-weight: 200;
        margin: ${props => props.theme.space[1]} 0;
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
            <Container>
            <ContactText>
                <Title>{title}</Title>
                <Text>{body}</Text>
            </ContactText>
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