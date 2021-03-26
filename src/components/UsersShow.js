import React from 'react';

const UsersShow = ({user}) => {
    return (
        <div>
            <p className="name">{user.fullName}</p>
            <p className="title">{user.email}</p>
            <p className="description">{user.age}</p>
        </div>
    );
};

export default UsersShow;