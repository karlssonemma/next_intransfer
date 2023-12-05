import PageSection from '../PageSection';
import styled from 'styled-components';
import Image from 'next/image';
import InputBlock from './InputBlock';
import Title from '../Title';
import Button from '../Button';
import Text from '../Text';

import { useForm, ValidationError } from '@formspree/react';

const StyledForm = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    max-width: 100%;
`;

const Message = styled(Text)`
    margin: 0 auto;
`;


export default function Form({ props }) {

    const [state, handleSubmit] = useForm('mpzepdvb');
    if (state.succeeded) {
        return(
            <PageSection>
                <Message>Tack för ditt meddelande. Du hör ifrån oss inom kort!</Message>
            </PageSection>
        )
    };

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
                name='company'
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
            <Button 
                type='submit' 
                disabled={state.submitting}
            >
                Skicka
            </Button>
           </StyledForm>

        </PageSection>
    )
}