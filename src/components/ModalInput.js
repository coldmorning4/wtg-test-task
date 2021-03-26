import React, { useState} from 'react';
import Modal from "react-modal";
import {addUser} from "../app/actions/actions";
import {useDispatch} from "react-redux";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const ModalInput = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)

    const dispatch = useDispatch();

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = {fullName, email, age};
            if (!body) return;
            dispatch(addUser(body));
            setFullName("");
            setEmail("")
            setAge("")
            closeModal();

        } catch (err) {
            console.log(err.message)
        }
    }

    const openModal = () =>{
        setIsOpen(true);
    }


    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
                <button className="btn btn-add" onClick={openModal}>Add new user</button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    appElement={document.getElementById('root')}
                >
                    <div>Add new user</div>
                    <form onSubmit={onSubmitForm}>
                        <br/>

                        <div>
                            <label>Full Name</label>
                            <div>
                                <input
                                    name="fullName"
                                    type="text"
                                    className="form-modal"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={e => setFullName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label>Email</label>
                            <div>
                                <input
                                    name="email"
                                    type="text"
                                    className="form-modal"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label>Age</label>
                            <div>
                                <input
                                    name="age"
                                    type="number"
                                    className="form-modal"
                                    placeholder="Age"
                                    value={age}
                                    onChange={e => setAge(+e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button className="btn-modal btn-add-modal" type="submit">
                                Add
                            </button>
                            <button className="btn-modal btn-cancel-modal" type="button" onClick={closeModal}>
                               Cancel
                            </button>
                        </div>

                    </form>

                </Modal>
        </div>

    );
};
export default ModalInput