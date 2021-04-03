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
  const [page, setPage] = useState(Pages.USERSIGNUP); //makes sense, im gonna figure that part out tonight, gotta get ready for work for now, thanks so much! no problem, bye
  const currentPage =
    //page === Pages.HOMEPAGE ? <App
    page === Pages.USERSIGNUP ? <UserSignUp onBusinessClick={() => setPage(Pages.BUSINESSSIGNUP)}/> :
    page === Pages.USERLOGIN ? <UserSignIn onBusinessLoginClick={() => setPage(Pages.BUSINESSLOGIN)}/> :
    page === Pages.BUSINESSSIGNUP ? <BusinessSignUp onUserClick={() => setPage(Pages.USERLOGIN)}/> :
    page === Pages.BUSINESSLOGIN ? <BusinessSignIn onUserLoginClick={() => setPage(Pages.BUSINESSLOGIN)}/> :
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
