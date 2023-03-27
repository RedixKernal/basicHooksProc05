import React from 'react';

const userContext = React.createContext();

const UserSend = userContext.Provider;
const UserReceive = userContext.Consumer;

export {UserSend,UserReceive}