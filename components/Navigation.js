import styled from 'styled-components';
import Image from 'next/image';
import { createClient } from 'contentful';

let client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const Navbar = styled.nav`
    width: 100%;
    height: 200px;
    padding: 0 2em 0 2em;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        justify-content: space-between;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        padding: 0 200px;
    }
`;

const NavLink = styled.a`
    font-family: ${props => props.theme.fonts.main};
    margin-left: 2em;
    display: none;
    font-weight: 400;
    scroll-behavior: smooth;
    text-decoration: none;
    color: black;

    &:hover {
        color: ${props => props.theme.colors.orange};
    }

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        display: inline-block;
    }
`;

const Logo = styled.img`
    width: 300px;
    height: auto;
`;



const Navigation = ({ assets }) => {
    // console.log('assets', assets)

    return(
        <Navbar>
            <a href='#'>hej</a>
            
            <div>
                <NavLink href="#about">om oss</NavLink>
                <NavLink href="#contact">kontakt</NavLink>
            </div>
        </Navbar>
    )
};

export async function getStaticProps() {

    const res = await client.getAssets();
    
      return {
        props: {
          landing: res.items
        }
      }
};

export default Navigation;