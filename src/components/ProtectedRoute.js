import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, auth, ...otherProps }) {
  return (
    <Route
      {...otherProps}
      render={(props) => {
        if (auth.isLoaded === false) {
          return <h1>Loading...</h1>;
        } else if (auth.isLoaded === true && auth.isEmpty === false) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseState.auth,
  };
};

// export class ProtectedRoute extends Component {
//     render({component : Component, auth, ...otherProps}) {
//         return (
//             <div>
//                 <Route
//                     {...otherProps}
//                     render ={(props) =>{
//                         if(this.auth.isLoaded === false){
//                             return <h1>Loading...</h1>
//                         }
//                         else if(this.auth.isLoaded === true && this.auth.isEmpty === false){
//                             return <Component {...props} />
//                         }
//                         else{
//                             return <Redirect to = '/' />
//                         }
//                     }
//                 }
                
//                 />
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//       return {
//         auth: state.firebaseState.auth
//       }
//     }
    
export default connect(mapStateToProps, null)(ProtectedRoute)