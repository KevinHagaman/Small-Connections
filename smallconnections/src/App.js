import React, { useState } from 'react'
import Navbar from './components/Navbar';
import SignUp from './components/Registration/RegisterUser';
import GlobalStyle from './globalStyles';

const Pages = {
  SIGNUP: 0
};

function App() {
  const [page, setPage] = useState("signup");

  return (
    <>
      <GlobalStyle />      
      <Navbar onSignInClick={() => {setPage(Pages.SIGNUP)}} />
      <br></br>
      {
        page === Pages.SIGNUP ? <SignUp/> :
        null
      }
    </>
  );
}

// class App extends Component {

//   constructor() {
//     this.state = {
//       currentPage: "signup"
//     };
//   }

//   render() {
//     this.setState({currentPage: "homepage"});
//     return <div></div>
//   }

// }

export default App;
