const users = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.user]
        case "EDIT_USER":
            return state.map((user, index) => index === action.index ? action.user : user)
        case "DELETE_USER":
            return state.filter((data, key) => key !== action.index)
        case "DELETE_USERS":
            return []
        default:
            return state;
    }
};

module.exports = users;