import React, { createContext, useState } from "react";

export const UsersContext = createContext([]);

export function UsersProvider({ children }) {
  const [users] = useState([
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
  ]);

  return (
    <UsersContext.Provider value={{ users }}>
      {children}
    </UsersContext.Provider>
  );
}
