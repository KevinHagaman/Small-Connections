import React, { useState } from 'react'
//import Navbar from './components/Navbar';
import UserSignUp from './components/Registration/UserSignUp';
import BusinessSignUp from './components/Registration/BusinessSignUp';
import UserSignIn from './components/Login/UserSignIn';
import BusinessSignIn from './components/Login/BusinessSignIn';

import GlobalStyle from './globalStyles';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import EmailConfirm from './components/Registration/EmailConfirm';

const Pages = {
  HOMEPAGE: 0,
  USERSIGNUP: 1,
  USERLOGIN: 2,
  BUSINESSSIGNUP: 3,
  BUSINESSLOGIN: 4,
  EMAILCONFIRMATION: 5
};

function App() {
  //const [page, setPage] = useState(Pages.USERSIGNUP);
  const [page, setPage] = useState(Pages.HOMEPAGE);
  console.log({page});
  const currentPage =
    page === Pages.HOMEPAGE ? <Landing onUserClick={() => setPage(Pages.USERSIGNUP)}/> :
    page === Pages.USERSIGNUP ? <UserSignUp onBusinessClick={() => setPage(Pages.BUSINESSSIGNUP)}/> :
    //page === Pages.HOMEPAGE ? <Landing onUserLoginClick={() => setPage(Pages.USERLOGIN)}/> :
    // page === Pages.USERSIGNUP ? <UserSignUp onSubmitClick={(firstName) => setPage(Pages.BUSINESSSIGNUP)}/> :
    page === Pages.USERSIGNUP ? <UserSignUp onSubmitClick={data => setPage(Pages.EMAILCONFIRMATION)}/> : //EMAIL CONFIRMATION ATTEMPT
    page === Pages.USERLOGIN ? <UserSignIn onBusinessLoginClick={() => setPage(Pages.BUSINESSLOGIN)}/> :
    page === Pages.BUSINESSSIGNUP ? <BusinessSignUp onUserClick={() => setPage(Pages.USERSIGNUP)}/> :
    page === Pages.BUSINESSSIGNUP ? <BusinessSignUp onSubmitClick={data => setPage(Pages.EMAILCONFIRMATION)}/> : //EMAIL CONFIRMATION ATTEMPT
    page === Pages.BUSINESSLOGIN ? <BusinessSignIn onUserLoginClick={() => setPage(Pages.USERLOGIN)}/> :
    page === Pages.EMAILCONFIRMATION ? <EmailConfirm onSubmitClick={() => setPage(Pages.EMAILCONFIRMATION)}/> :
    null;

  return (
    <>
      <GlobalStyle />
      <Navbar onSignInClick={() => {setPage(Pages.USERSIGNUP)}} onLogInClick={() => {setPage(Pages.USERLOGIN)}}/>
      {/*<Navbar onSignInClick={() => {setPage(Pages.USERSIGNUP)}} onLogInClick={() => {setPage(Pages.USERLOGIN)}} />*/}
      <br></br>
      { currentPage }
    </>
  );
}

export default App;
