import styled from 'styled-components';
import Logo from './Logo';

import Link from 'next/link';
import PageSection from './PageSection';

const Container = styled.footer`
    max-width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: ${props => props.theme.space[6]};
    padding-top: ${props => props.theme.space[6]}; 
    border-top: 1px solid ${props => props.theme.colors.lightgray};
    /* background-color: ${props => props.theme.colors.orange}; */

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        margin: ${props => props.theme.space[6]} 200px;
        flex-direction: row;
        align-items: flex-start;
    }
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    position: relative;
    top: 4px;
`;

const ContactItemsList = styled.ul`
    width: max-content;
    margin-top: ${props => props.theme.space[5]};
    /* background-color: ${props => props.theme.colors.orange}; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;

    font-family: ${props => props.theme.fonts.main};
    font-weight: 300;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        align-items: flex-start;
        margin-top: 0;
    }
`;

const ContactItemText = styled.p`
    display: inline-block;
    text-decoration: none;
    color: black;
    margin-bottom: .5em;
    line-height: 180%;
    letter-spacing: .75px;

    &:hover {
        text-decoration: ${props => props.$isLink && 'underline'}
    }
`;

function Footer({ props }) {

    const { contact, logoAsset } = props;
    const { body, title, contactInfo } = contact.fields;

    return(
        <Container>
            <Logo asset={logoAsset} />
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
                                alt=''
                            />
                            {item.fields.isLink 
                                ? <ContactItemText as={Link} href={text} $isLink={true}>{text}</ContactItemText>
                                : <ContactItemText>{text}</ContactItemText>
                            }
                        </li>
                    )
                })} 
            </ContactItemsList>
        </Container>
    )

};

export default Footer;