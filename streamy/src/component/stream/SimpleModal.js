import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Link, useHistory, useParams} from 'react-router-dom';
import {deleteStream} from '../../action';
import { connect } from 'react-redux';
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    height:150,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SimpleModal({open,setOpen,deleteStream})  {
  const history= useHistory();
  const {id} = useParams();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  //  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete=()=>{
    deleteStream(id);
    history.push("/");
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="header" style={{fontSize:"25px",marginTop:"10px"}}>Delete Stream</div>
      <div className="content" style={{fontSize:"25px",paddingTop:"15px"}}>Are you sure want to delete stream?</div>
      <div className="action" style={{paddingTop:"15px"}}>
         <button onClick={handleDelete} className="ui button negative">Delete</button>
         <Link to="/" className="ui button" style={{marginLeft:"8px"}}>Cancel</Link>
      </div>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default connect(null,{deleteStream})(SimpleModal);