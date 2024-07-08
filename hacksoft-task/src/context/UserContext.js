import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Ivan Goranov',
        title: 'Candidate for a front-end developer at HackSoft'
    });

    const updateUser = (newName, newTitle) => {
        setUser({ name: newName, title: newTitle });
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
