import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Input, Box } from 'components/primitive';
import { Header } from 'components/common/auth-header.component';
import {
  LoginContainer,
  LoginFormContainer,
  LoginText,
  FormContainer,
  StyledButton,
  TermsContainer,
  StyledCheckbox,
} from './register.screen.styles';

export const RegisterScreen = () => {
  return (
    <LoginContainer>
      <Header />

      <LoginFormContainer>
        <FormContainer>
          <LoginText variant='contentHeader' center>
            Crate an Account
          </LoginText>

          <Box style={{ gap: '2.6rem' }}>
            <Input type='text' label='Enter your Full Name' placeholder='John Doe' />
            <Input type='text' label='Enter your Email' placeholder='johndoe@example.com' />
          </Box>

          <TermsContainer>
            <StyledCheckbox type='checkbox' />
            <Text variant='content'>
              By clicking, you agree to <Link to={'google.com'}>Safient's Terms </Link>
              of Use & <Link to={'google.com'}>Privacy Policy.</Link>
            </Text>
          </TermsContainer>

          <StyledButton
            variant='primary'
            label={{ text: 'Create' }}
            onClick={() => 'clicked'}
            color='primaryGradient'
          />
        </FormContainer>
      </LoginFormContainer>
    </LoginContainer>
  );
};
