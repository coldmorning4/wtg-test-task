let addUser = (user) => {
    return {
        type: "ADD_USER",
        user
    }
};
let editUser =  (user, index) =>{
    return {
        type: "EDIT_USER",
        user,
        index
    }
};
let deleteUser = (index) => {
    return {
        type: "DELETE_USER",
        index
    }
};

let deleteAllUsers = () => {
    return {
        type: "DELETE_USERS"
    }
}

module.exports = {addUser, editUser, deleteUser, deleteAllUsers};