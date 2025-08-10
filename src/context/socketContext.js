import React, { createContext } from "react";

/**
 * Mock SocketContext that provides a minimal socket-like API.
 * If you want to connect to a real backend, replace this provider
 * with a socket.io-client connection.
 */

export const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const mockSocket = {
    on: () => {},
    off: () => {},
    emit: () => {},
    disconnect: () => {}
  };

  return (
    <SocketContext.Provider value={mockSocket}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketContext;
