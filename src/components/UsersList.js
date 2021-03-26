import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import ListElement from "./ListElement";
import {deleteAllUsers} from "../app/actions/actions";

const UsersList = () => {

    const dispatch = useDispatch()

    const users = useSelector(state => state);
    return (
        <div>
            <button className="btn btn-delete-all" onClick={() => {
                dispatch(deleteAllUsers());
            }}>Delete All Users</button>
            <table id="users-title">
                <tr>
                    <td>Full name</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </table>
            {
                users.map((user, key) => {
                    const data = {...user, key}
                    return (<ListElement data={data} />)
                })
            }
        </div>
    );
};

export default UsersList;
