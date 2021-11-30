import React,{useState,useEffect} from 'react'
import SimpleModal from './SimpleModal';
const StreamDelete = () =>{
    const [open, setOpen] = useState(false); 
   useEffect(() => {
       setOpen(!open);
   }, []) 
    return(
        <div>
            <h3>Delete Stream</h3>
            <SimpleModal open={open} setOpen={setOpen}/>
        </div>
    );
}

export default StreamDelete;