import React, { useState} from 'react';
import Modal from "react-modal";
import {editUser} from "../app/actions/actions";
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
const ModalEdit = ({data_user}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [fullName, setFullName] = useState(data_user.fullName)
    const [email, setEmail] = useState(data_user.email)
    const [age, setAge] = useState(data_user.age)

    const dispatch = useDispatch();

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            if (!data_user) return;
            dispatch(editUser({ fullName: fullName, email: email, age: age }, data_user.key));
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
            <button className="btn btn-edit" onClick={openModal}>Edit</button>

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
export default ModalEdit