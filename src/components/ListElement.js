import React from 'react';
import {useDispatch} from "react-redux";
import {deleteUser} from '../app/actions/actions'
import ModalEdit from '../components/ModalEdit'

const ListElement = ({data}) => {


    const dispatch = useDispatch()

    return (
        <table id="users">
            <tr>
                <td>{data.fullName}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <div className="container-button">
                    <ModalEdit data_user={data}/>
                    <button className="btn btn-delete" onClick={() => {dispatch(deleteUser(data.key));}}>Delete
                    </button>
                </div>

            </tr>

        </table>
    );
};

export default ListElement;