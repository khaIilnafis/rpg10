import React from 'react';
import Auth from '../utilities/auth-service'
const userContext = React.createContext(Auth.getUser()); // Create a context object

export {
  userContext // Export it so it can be used by other Components
};