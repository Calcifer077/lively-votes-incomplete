import { useContext, createContext, useState } from "react";

// Creating context
const AuthContext = createContext();

// Providing state to the children
function AuthProvider({ children }) {
  // Defining state
  const [userId, setUserId] = useState("1");
  const [userEmail, setUserEmail] = useState("test@mail.com");

  // expects a object
  function login({ id, email }) {
    setUserId(id);
    setUserEmail(email);
  }

  function logout() {
    setUserId("");
    setUserEmail("");
  }

  return (
    <AuthContext.Provider
      value={{
        userId,
        userEmail,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// This is a custom hook which lets the child components use state.
function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");

  return context;
}

// named export
// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider };
