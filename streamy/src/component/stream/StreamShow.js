import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import {useParams} from 'react-router-dom';
const StreamShow = ({stream}) => {
   const {id} = useParams();
   const [title, settitle] = useState("");
   const [description, setdescription] = useState("");
   useEffect(() => {
      stream.map((stream)=>{
         if(stream.id==id){
           settitle(stream.title);
           setdescription(stream.description);
           
           
         }
      })
   }, [])
   
  return(
          <div className="title">
             <h1>{title}</h1>
             <h3>{description}</h3>

          </div>
  );
};

const mapStateToProps=(state)=>{
   return{stream:Object.values(state.stream)}
}

export default connect(mapStateToProps) (StreamShow);
