import styled from 'styled-components';
import Image from 'next/image';

import Logo from './Logo';


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
    margin-left: 2em;
    display: none;
    scroll-behavior: smooth;
    text-decoration: none;
    color: black;

    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: 400;
    font-family: ${props => props.theme.fonts.sans};
    text-transform: uppercase;
    letter-spacing: .1em;

    transition: .2s all;

    &:hover {
        color: ${props => props.theme.colors.orange};
    }

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        display: inline-block;
    }
`;



const Navigation = ({ props }) => {

    return(
        <Navbar>
            <a href='#'>
                <Logo 
                    asset={props}
                />
            </a>
            
            <div>
                <NavLink href='#about'>om oss</NavLink>
                <NavLink href='#contact'>kontakt</NavLink>
            </div>
        </Navbar>
    )
};


export default Navigation;