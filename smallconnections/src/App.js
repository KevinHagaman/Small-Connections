import React, { useState } from 'react'
import Navbar from './components/Navbar';
import UserSignUp from './components/Registration/UserSignUp';
import BusinessSignUp from './components/Registration/BusinessSignUp';
import UserSignIn from './components/Login/UserSignIn';
import BusinessSignIn from './components/Login/BusinessSignIn';

import GlobalStyle from './globalStyles';

const Pages = {
  HOMEPAGE: 0,
  USERSIGNUP: 1,
  USERLOGIN: 2,
  BUSINESSSIGNUP: 3,
  BUSINESSLOGIN: 4
};

function App() {
  const [page, setPage] = useState(Pages.USERSIGNUP);
  const currentPage =
    //page === Pages.HOMEPAGE ? <App
    page === Pages.USERSIGNUP ? <UserSignUp onBusinessClick={() => setPage(Pages.BUSINESSSIGNUP)}/> :
    page === Pages.USERLOGIN ? <UserSignIn onBusinessLoginClick={() => setPage(Pages.BUSINESSLOGIN)}/> :
    page === Pages.BUSINESSSIGNUP ? <BusinessSignUp onUserClick={() => setPage(Pages.USERSIGNUP)}/> :
    page === Pages.BUSINESSLOGIN ? <BusinessSignIn onUserLoginClick={() => setPage(Pages.USERLOGIN)}/> :
    null;

  return (
    <>
      <GlobalStyle />      
      <Navbar onSignInClick={() => {setPage(Pages.USERSIGNUP)}} onLogInClick={() => {setPage(Pages.USERLOGIN)}} />
      <br></br>
      { currentPage }
    </>
  );
}

export default App;
