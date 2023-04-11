import React from 'react';
import styled from 'styled-components';
import theme from '@/utils/theme';

export default function InputBlock({ label, type, name, as, ...props }) {

    const InputField = styled.input`
        width: 100%;
        border: none;
        padding: 1.5em;
        margin-bottom: 1.5em;
        border-radius: .5em;

        background-color: ${props => props.theme.colors.lightgray};
        font-family: ${props => props.theme.fonts.serif};
        font-weight: 300;
    `;

    const InputLabel = styled.label`
        width: 100%;
        padding-bottom: .8em;
        
        display: flex;
        flex-direction: column;
        
        font-family: ${props => props.theme.fonts.sans};
        font-size: ${props => props.theme.fontSizes.xs};
        font-weight: 300;
        text-indent: 1.2rem;
        text-transform: uppercase;
        letter-spacing: .1em;
    `;


    return(
        <>
            <InputLabel htmlFor={name}>
                {label}{props.required && '*'}
            </InputLabel>
            <InputField 
                id={name} 
                name={name} 
                type={type} 
                as={as}
                {...props} 
            />
        </>
    )
}