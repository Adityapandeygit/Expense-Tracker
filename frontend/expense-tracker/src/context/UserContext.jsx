import React, {createContext, useState} from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

    // function to update user data
    const updateUser = (userData) => {
        setUser(userData);
    };

    // function to update token
    const updateToken = (newToken) => {
        setToken(newToken);
        if (newToken) {
            localStorage.setItem("token", newToken);
        } else {
            localStorage.removeItem("token");
        }
    };

    // function to clear user data (e.g ,on logout)
    const clearUser = () => {
        setUser(null);
        updateToken(null);
    };

    return (
        <UserContext.Provider value={{ user, updateUser, clearUser, token, updateToken }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;