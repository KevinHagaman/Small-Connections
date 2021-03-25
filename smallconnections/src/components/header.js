import React from 'react'
import logo from '../SCLogo.png'

console.log(logo);

const mainLogo = () => {
    return (

        <div>
            <img src={logo} alt="Logo" />;
        </div>
    )
}

export default mainLogo