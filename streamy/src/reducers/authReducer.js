const INTIAL_VALUE = {
  isSignIn: false,
  profileId: null,
};

export default (state = INTIAL_VALUE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignIn: true, profileId: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignIn: false, profileId: null };
    default:
      return state;
  }
};
