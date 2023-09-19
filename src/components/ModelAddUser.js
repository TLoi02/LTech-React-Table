import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {postUser} from "../services/UserService";
import { toast } from 'react-toastify';


const ModalAddUser = (props) => {
   const {show, handleClose} = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handelSaveUser = async ()=>{
        const res = await postUser(name, job);

        if (res && res.id){
            //handel success
            handleClose();
            setName("");
            setJob("");
            toast.success("Create Succsess!");
        }
        else{
            toast.error("Create Error");
        }
    }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input value={name} 
                        onChange={(event) => setName(event.target.value)}
                        type="text" 
                        className="form-control" 
                        placeholder="Name here..." required/>
                    </div>
                    <div className="form-group">
                        <label>Job</label>
                        <input value={job}
                         onChange={(event) => setJob(event.target.value)}
                         type="text" 
                         className="form-control" 
                         placeholder="Job here..." required/>
                    </div>
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddUser;
