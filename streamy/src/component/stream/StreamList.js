import React,{useEffect} from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {getStreams,signIn} from '../../action';
const StreamList = ({getStreams,streams,currentUser,isSignin}) => {

  useEffect(() => {
      getStreams();
  }, [])

  const renderAdmin = (stream)=>{
    if(stream?.profileId===currentUser && isSignin===true){
      return(
          <div className="right floated content">
            <Link to={`/stream/edit/${stream.id}`} className="ui button primary">
              Edit
            </Link>
            <Link to={`/stream/delete/${stream.id}`} className="ui button negative">
              Delete
            </Link>
              
          </div>
      );
    }

  }

  const renderList =()=>{
    return streams.map((stream)=>{
      return(
        <div className='item' key={stream.id}>
            {renderAdmin(stream)}

           <i className="large middle aligned icon camera" />
           <div className="content">
             <Link to={`/stream/${stream.id}`} className="header">
              {stream.title}
             </Link>
             <div className="description">{stream.description}</div>
           </div>
           
        </div>

      );

      
    })

  }

 const renderCreate=()=>{
   if(isSignin){
   return (
       <div style={{textAlign:"right"}}>
         <Link to="/stream/new" className="ui button primary">Create Stream</Link>
       </div>
   );
   }
 }
  return(
    <div>
       <h2>Stream</h2>
       <div className="ui celled list">{renderList()}</div>
       {renderCreate()}
    </div>

  );

  
  

};
const mapStateToProps=(state) =>{
   return {streams:Object.values(state.stream),
    currentUser:state.auth.profileId,
    isSignin:state.auth.isSignIn
  }; // converting object to array
}


export default connect(mapStateToProps,{getStreams,signIn}) (StreamList);
