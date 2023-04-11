import PageSection from '../PageSection';
import styled from 'styled-components';
import Image from 'next/image';
import InputBlock from './InputBlock';

import { useForm, ValidationError } from '@formspree/react';

const StyledForm = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 500px;
    max-width: 100%;
`;

const Title = styled.h2`
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 400;

    margin-bottom: ${props => props.theme.space[4]};
`;

const SubmitBtn = styled.button`
    border: none;
    padding: ${props => props.theme.space[4]};
    margin-top: ${props => props.theme.space[4]};
    border-radius: ${props => props.theme.space[1]};
    background-color: ${props => props.theme.colors.orange};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 300;
    font-size: ${props => props.theme.fontSizes.s};
    transition: .2s all;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.darkorange};
    }

`;


export default function Form({ props }) {

    const [state, handleSubmit] = useForm('mpzepdvb');
    if (state.succeeded) {
        return(
            <PageSection>
                <p>We'll be in touch shortly!</p>
            </PageSection>
        )
    }

    return(
        <PageSection id='contact' className='contact-section'>

            <Title>Kontakta oss här</Title>

           <StyledForm onSubmit={handleSubmit}>
            <ValidationError 
                field='email' 
                prefix='email' 
                errors={state.errors} 
            />
            <InputBlock 
                name='name'
                type='text'
                label='namn'
                required
            />
            <InputBlock 
                name='email'
                type='email'
                label='mejladress'
                required
            />
            <InputBlock 
                name='business'
                type='text'
                label='företag'
            />
            <InputBlock 
                name='message'
                type='textarea'
                as='textarea'
                label='meddelande'
                required
            />
            <SubmitBtn 
                type='submit' 
                disabled={state.submitting}
            >
                Skicka
            </SubmitBtn>
           </StyledForm>

        </PageSection>
    )
}