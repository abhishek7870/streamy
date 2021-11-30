import React from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { signIn, signOut } from "../action";
function GoogleAuthentication({ signIn, signOut, isSignIn }) {
  // const [signin, setsignin] = useState(null);

  const responseGoogle = (response) => {
    signIn(response.profileObj.googleId);
  };
  const logout = (response) => {
    signOut();
  };

  //   const renderAuthButton = () => {
  //     if (signin) {
  //       return <div>i am signin</div>;
  //     } else {
  //       return <div>i am not signin</div>;

  if (isSignIn) {
    return (
      <div>
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="ui red google button"
              onClick={renderProps.onClick}
            >
              {" "}
              <i className="google icon" />
              Logout
            </button>
          )}
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    );
  } else if (!isSignIn) {
    return (
      <div>
        <GoogleLogin
          clientId="1051910039159-i8me0hpi9fqo7estvjsmep38akemfvi9.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="ui red google button"
              onClick={renderProps.onClick}
            >
              {" "}
              <i className="google icon" />
              SignIn
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
// const mapStateToProps = (state)=>{
//   console.log(state.auth.isSignIn);
//   return {signin:state.auth.isSignIn}

// }
const mapStateToProps = (state) => ({
  isSignIn: state.auth.isSignIn
});
export default connect(mapStateToProps, { signIn, signOut })(
  GoogleAuthentication
);
