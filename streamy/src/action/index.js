import jsonPlaceholder from "../apis/jsonPlaceholder";
export const signIn = (profileId) => {
  return {
    type: "SIGN_IN",
    payload: profileId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const streamCreateData = (body) => async (dispatch,getState) => {
   const {profileId} = getState().auth;
  const response = await jsonPlaceholder.post("/stream",{...body,profileId});
  dispatch({ type: "CREATE_STREAM", payload: response.data});
  
};

export const getStreams = ()=> async (dispatch)=>{
  const response = await jsonPlaceholder.get('/stream');
  dispatch({type:'GET_STREAMS',payload:response.data});
}

export const getStream = (id)=> async (dispatch)=>{
  const response = await jsonPlaceholder.get(`/stream/${id}`);
  dispatch({type:'GET_STREAM',payload:response.data});
}

export const editStream = (id,body)=> async (dispatch)=>{
    const response = await jsonPlaceholder.patch(`/stream/${id}`,body);

    dispatch({type:'EDIT_STREAM',payload:response.data});
}

export const deleteStream = (id) => async (dispatch) =>{
   await jsonPlaceholder.delete(`/stream/${id}`);
   dispatch({type:'DELETE_STREAM',payload:id});
} 