import React, { useState } from "react";
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom';
import { streamCreateData } from "../../action";
const StreamCreate = ({ streamCreateData }) => {

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const history= useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title: title,
      description: description,
    };
    console.log(body);
    await streamCreateData(body);
    history.push('/');
    
  };
  return (
    <div className="ui form">
      <h2>Create Stream</h2>
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
};

export default connect(null, { streamCreateData })(StreamCreate);
