import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {editStream} from '../../action';
const StreamEdit = ({editStream,stream,props}) =>{
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const history = useHistory();
  const {id} = useParams();  
  useEffect(() => {
    const streamData=(stream.filter(stream=>stream.id==id))
   streamData.map((data)=>{
      settitle(data.title);
      setdescription(data.description);
   })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title: title,
      description: description,
    };
    console.log(body);
    await editStream(id,body);
    history.push('/');
    
  };
  return (
    <div className="ui form">
      <h2>Edit Stream</h2>
      <label>Title</label>
      <input
        className="field"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <label>Description</label>
      <input
        className="field"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button className="ui button primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );

   
}
const mapStateToProps = (state)=>{
  return {stream:Object.values(state.stream)}
}

export default connect(mapStateToProps,{editStream}) (StreamEdit);