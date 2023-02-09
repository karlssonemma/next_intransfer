import React from 'react';
import styled from 'styled-components';
import theme from '@/utils/theme';

export default function InputBlock({ label, type, name, as, ...props }) {

    const InputField = styled.input`
        background-color: ${props => props.theme.colors.lightgray};
        border: none;
        padding: 1.5em;
        margin-bottom: 1.5em;
        border-radius: .5em;
        font-family: ${props => props.theme.fonts.main};
        font-weight: 300;
    `;

    const InputLabel = styled.label`
        display: flex;
        flex-direction: column;
        font-size: ${props => props.theme.fontSizes.xs};
        font-weight: 300;
        text-indent: 1.2rem;
        text-transform: uppercase;
        padding-bottom: .8em;
        letter-spacing: .2em;
    `;


    return(
        <>
            <InputLabel for={name}>
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