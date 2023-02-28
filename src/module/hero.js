// function hero(){
//     return(
//         <div className="container" id="typed-string">
//             <h1><span className="welcome" />Welcome!</h1>
//                 <div className="scrolldown">
//                     <span />
//                     <span />
//                     <span />
//                 </div>
//         </div>
//     )
// }

import React, { Component } from 'react'
import Typical from 'react-typical'
 
class hero extends React.Component {
  render () {
    return (
        <div className="container" id="typed-string">
             <h1><span className="welcome" />
                    <Typical 
                    loop={Infinity}
                    wrapper="h1"
                    steps= {["Welcome!", 3000, "Willkommen!", 3000, "Bienvenue!", 3000, "Selamat datang!", 3000]}
                    />
                </h1>
                 <div className="scrolldown">
                    <span />
                    <span />
                    <span />
                </div>
         </div>
    )
  }
}



export default hero