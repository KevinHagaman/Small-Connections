import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import UserSignUp from './components/Registration/UserSignUp';
import BusinessSignUp from './components/Registration/BusinessSignUp';
import UserSignIn from './components/Login/UserSignIn';
import BusinessSignIn from './components/Login/BusinessSignIn';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from'./aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react'
import GlobalStyle from './globalStyles';
import { listTodos } from './graphql/queries';

Amplify.configure(awsconfig)

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

   // <AmplifySignOut />
   // eslint-disable-next-line
  const [info, setInfo] = useState([]);

  useEffect(() => {
      fetchInfo()
  }, []);

  const fetchInfo = async () => { // function to pull info from graphql schema configuration
      try {
          const infoData = await API.graphql(graphqlOperation(listTodos));
          const infoList = infoData.data.listTodos.items;
          console.log('User Info', infoList);
          setInfo(infoList);
        } catch (error) {
          console.log('error on fetching info', error);
        }

  }

  return (
    <>
      <GlobalStyle />     
      <Navbar onSignInClick={() => {setPage(Pages.USERSIGNUP)}} onLogInClick={() => {setPage(Pages.USERLOGIN)}} />
      <br></br>
      { currentPage }
    </>
  );
}

export default withAuthenticator (App);


