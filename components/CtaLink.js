import styled from 'styled-components';


const Link = styled.a`
    font-family: ${props => props.theme.fonts.sans};
    display: block;
    color: ${props => props.theme.colors.orange};
    cursor: pointer;
    margin-top: ${props => props.theme.space[2]};
    font-weight: 400;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
    position: relative;
    top: 6px;

    color: orange;
`;

const CtaLink = ({ href, text, iconUrl }) => {

    return(
        <Link href={href}>
            <Icon 
                src={iconUrl}
                width={500}
                height={500}
                alt=''
            />
            {text}
        </Link>
    )
}


export default CtaLink;