import React from 'react'
import styled from 'styled-components/macro';

const EmailConfirmContainer = styled.div`
  height: 200px;
  display: block;
  alignItems: center;
  justify-content: center;
  position: fixed;
  textAlign: center;
  padding: 24px 36px;
  margin: 24px 36px;
  border: 2px solid;
  width: 100%;
  border-radius: 10px;
`

const EmailConfirm = () => {
    return (
        <EmailConfirmContainer>
            <h1>Please check your Email Address and follow the link for verification!</h1>
        </EmailConfirmContainer>
    )
}

export default EmailConfirm
