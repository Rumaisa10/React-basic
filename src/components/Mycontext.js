import React from "react";

const mycontext = React.createContext();
const dadaprovider=mycontext.Provider
const puticonsumer = mycontext.Consumer

export {dadaprovider,puticonsumer};