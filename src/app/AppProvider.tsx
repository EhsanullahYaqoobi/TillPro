// // context/appContext.js
// import React from "react";
// import { createContext, useState } from "react";

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   return React.useContext(AppContext);
// };