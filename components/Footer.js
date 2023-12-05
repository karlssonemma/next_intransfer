import styled from 'styled-components';
import theme from '@/utils/theme';
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
    width: 18px;
    height: 18px;
    margin-right: 17px;
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

    font-family: ${props => props.theme.fonts.sans};
    font-weight: 300;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        align-items: flex-start;
        margin-top: 0;
    }
`;

const ContactItemText = styled.p`
    display: inline-block;
    text-decoration: none;
    color: inherit;
    margin-bottom: .5em;
    line-height: 180%;
    letter-spacing: .75px;
    transition: .2s all;
    font-size: ${props => props.theme.fontSizes.s};
`;

const ByLine = styled.p`
    margin-top: 2em;

    font-family: ${props => props.theme.fonts.sans};
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: 200;
    letter-spacing: .75px;
    color: ${props => props.theme.colors.darkgray};
    text-align: center;

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        text-align: left;
    }
`;

const LogoContainer = styled.div`
    margin-top: 4em;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        margin-top: 0;
    }
`;

function Footer({ props }) {

    const { contact, logoAsset } = props;
    const { body, title, contactInfo } = contact.fields;

    return(
        <Container>
            
           <ContactItemsList>
                {/* {contactInfo.map(item => {
                    let iconUrl = 'https:' + item.fields.icon.fields.file.url;
                    let text = item.fields.text;
                    let target = item.fields.text.includes('@') 
                    ? 'mailto:' + item.fields.text 
                    : '';

                    console.log('item',item)
                    return(
                        <li key={item.sys.id}>
                            <Icon 
                                src={iconUrl} 
                                width={512} 
                                height={512}
                                alt=''
                            />
                            {item.fields.isLink 
                                ? <ContactItemText as='a' href={target} $isLink={true}>{text}</ContactItemText>
                                : <ContactItemText>{text}</ContactItemText>
                            }
                        </li>
                    )
                })}  */}
            </ContactItemsList>
            <LogoContainer>
                <Logo asset={logoAsset} />
                <ByLine>Design & development by 
                    <a href='https://karlssonemma.com' target='_blank' rel='noreferrer'> Emma Karlsson</a>
                </ByLine>
            </LogoContainer>
        </Container>
    )

};

export default Footer;